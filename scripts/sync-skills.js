#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

// Repo root = one level up from scripts/ (this file lives at scripts/sync-skills.js)
const repoRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(repoRoot, "skills");
const targets = [".opencode/skills", ".claude/skills"].map((rel) =>
  path.join(repoRoot, rel)
);

function removeDirRecursive(dirPath) {
  if (fs.rmSync) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  } else {
    // Fallback for very old Node versions
    const entries = fs.readdirSync(dirPath);
    for (const entry of entries) {
      const full = path.join(dirPath, entry);
      const stat = fs.lstatSync(full);
      if (stat.isDirectory() && !stat.isSymbolicLink()) {
        removeDirRecursive(full);
      } else {
        fs.unlinkSync(full);
      }
    }
    fs.rmdirSync(dirPath);
  }
}

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isSymbolicLink()) {
      continue; // symlinksiz kopya
    } else if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function listSubdirectories(dirPath) {
  const out = [];
  let entries;
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch (err) {
    return out;
  }
  for (const entry of entries) {
    if (entry.isDirectory() && !entry.isSymbolicLink()) {
      out.push(entry.name);
    } else if (entry.isSymbolicLink()) {
      try {
        const full = path.join(dirPath, entry.name);
        if (fs.statSync(full).isDirectory()) out.push(entry.name);
      } catch (err) {
        // bozuk symlink: yoksay
      }
    }
  }
  return out;
}

function main() {
  if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
    console.error("kaynak dizin bulunamad" + "\u0131" + ": skills/");
    process.exit(1);
  }

  const skillDirs = listSubdirectories(sourceDir);

  for (const target of targets) {
    fs.mkdirSync(target, { recursive: true });

    // SAFE temizlik: sadece "-tr" ile biten alt dizinleri sil
    const existing = listSubdirectories(target);
    for (const name of existing) {
      if (name.endsWith("-tr")) {
        removeDirRecursive(path.join(target, name));
      }
    }

    // skills/ altindaki her dizini hedefe kopyala
    for (const name of skillDirs) {
      copyDirRecursive(path.join(sourceDir, name), path.join(target, name));
    }
  }

  console.log("skills birle" + "\u015F" + "tirildi (di" + "\u011F" + "er skill'ler korundu)");
}

main();
