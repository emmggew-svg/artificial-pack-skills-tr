#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const REQUIRED_SECTIONS = [
  "## Ne yaparım",
  "## Ne zaman kullanılırım",
  "## Çıktı formatı",
];

function stripQuotes(value) {
  const v = value.trim();
  if (v.length >= 2) {
    const first = v[0];
    const last = v[v.length - 1];
    if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
      return v.slice(1, -1).trim();
    }
  }
  return v;
}

function parseFrontmatter(content) {
  const lines = content.split(/\r?\n/);
  let start = -1;
  let end = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      if (start === -1) {
        start = i;
      } else {
        end = i;
        break;
      }
    }
  }
  if (start === -1 || end === -1) {
    return { error: "frontmatter bulunamad\u0131 (--- ... ---)" };
  }
  const data = {};
  const fmLines = lines.slice(start + 1, end);
  for (const line of fmLines) {
    if (line.trim() === "" || line.trim().startsWith("#")) continue;
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = stripQuotes(line.slice(colon + 1));
    if (key) data[key] = value;
  }
  const body = lines.slice(end + 1).join("\n");
  return { data, body };
}

function lintOne(skillsDir, dirName) {
  const reasons = [];
  const skillFile = path.join(skillsDir, dirName, "SKILL.md");

  if (!fs.existsSync(skillFile) || !fs.statSync(skillFile).isFile()) {
    return { name: dirName, ok: false, reasons: ["SKILL.md yok"] };
  }

  let content;
  try {
    content = fs.readFileSync(skillFile, "utf8");
  } catch (err) {
    return { name: dirName, ok: false, reasons: ["SKILL.md okunamad\u0131: " + err.message] };
  }

  const parsed = parseFrontmatter(content);
  if (parsed.error) {
    return { name: dirName, ok: false, reasons: [parsed.error] };
  }

  const { data, body } = parsed;

  // name kontrolü
  const name = (data.name || "").trim();
  if (!name) {
    reasons.push("name eksik");
  } else {
    if (!NAME_RE.test(name)) {
      reasons.push('name format\u0131 hatal\u0131: "' + name + '"');
    }
    if (name !== dirName) {
      reasons.push('name ("' + name + '") dizin ad\u0131yla e\u015Fle\u015Fmiyor ("' + dirName + '")');
    }
  }

  // description kontrolü
  const description = data.description !== undefined ? String(data.description).trim() : "";
  if (!description) {
    reasons.push("description eksik");
  } else if (description.length < 1 || description.length > 1024) {
    reasons.push("description uzunlu\u011Fu 1-1024 olmal\u0131 (" + description.length + ")");
  }

  // gövde bölümleri
  for (const section of REQUIRED_SECTIONS) {
    if (!body.includes(section)) {
      reasons.push('"' + section + '" eksik');
    }
  }

  return { name: dirName, ok: reasons.length === 0, reasons };
}

function main() {
  const arg = process.argv[2] || "./skills";
  const skillsDir = path.resolve(process.cwd(), arg);

  if (!fs.existsSync(skillsDir) || !fs.statSync(skillsDir).isDirectory()) {
    console.error("[FAIL] skills dizini bulunamad\u0131: " + arg);
    process.exit(1);
  }

  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  const dirs = entries
    .filter((e) => {
      if (!e.isDirectory() || e.isSymbolicLink()) return false;
      return true;
    })
    .map((e) => e.name)
    .sort();

  if (dirs.length === 0) {
    console.log("skill bulunamad\u0131: " + arg);
    process.exit(0);
  }

  let failCount = 0;
  for (const dirName of dirs) {
    const result = lintOne(skillsDir, dirName);
    if (result.ok) {
      console.log("[OK] " + result.name);
    } else {
      failCount++;
      console.log("[FAIL] " + result.name + ": " + result.reasons.join("; "));
    }
  }

  process.exit(failCount === 0 ? 0 : 1);
}

main();
