# artificial-pack-skills-tr

Open pack of 30+ Turkish skills working on both Claude Code and OpenCode, tested, beginner-friendly.

## Install

```bash
git clone https://github.com/your-org/artificial-pack-skills-tr.git
cd artificial-pack-skills-tr
npm run skills:sync
```

`npm run skills:sync` merges `skills/` into `.opencode/skills` and `.claude/skills` **WITHOUT deleting other skills**.

> **Guarantee:** sync never deletes other skills, it only refreshes `*-tr` copies.

## Skills

| Skill | What it does |
|-------|--------------|
| toplanti-notu-tr | Turns rough meeting notes into structured Turkish minutes with decisions and action items. |
| nextjs-hata-cozucu-tr | Diagnoses Next.js errors in Turkish with step-by-step fix suggestions. |
| kvkk-redaksiyon-tr | Redacts personal data per KVKK (Turkish GDPR) before sharing text externally. |
| akademik-ozetleyici-tr | Summarizes academic papers in Turkish with key findings and citations. |
| e-fatura-aciklama-tr | Writes compliant e-fatura / e-arşiv explanation lines in correct Turkish format. |
| commit-mesaji-tr | Generates conventional commit messages in Turkish with correct type and scope. |
| pr-aciklama-tr | Drafts pull request descriptions in Turkish with summary, changes, and test notes. |
| kod-inceleme-tr | Reviews code in Turkish with bugs, risks, and concrete fix suggestions. |
| test-yazici-tr | Writes unit tests for your code with Turkish explanations of each case. |
| dokuman-cevirici-tr | Translates technical docs to natural Turkish while preserving code blocks. |

Full list: see `skills/` (30+ skills).

## Contributing

See [CONTRIBUTING-TR.md](CONTRIBUTING-TR.md). Quick rule: run `npm run lint:skills` locally and keep it green before opening a PR.

## License

MIT — see [LICENSE](LICENSE).
