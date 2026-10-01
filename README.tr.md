# artificial-pack-skills-tr

Claude Code ve OpenCode'da birlikte çalışan, test edilmiş, yeni başlayan dostu 30+ Türkçe skill içeren açık paket.

## Kurulum

```bash
git clone https://github.com/your-org/artificial-pack-skills-tr.git
cd artificial-pack-skills-tr
npm run skills:sync
```

`npm run skills:sync`, `skills/` klasörünü `.opencode/skills` ve `.claude/skills` içine **diğer skill'leri silmeden** birleştirir.

> **Garanti:** sync diğer skill'leri asla silmez, sadece `*-tr` kopyalarını tazeler.

## Skill'ler

| Skill | Ne yapar |
|-------|----------|
| toplanti-notu-tr | Dağınık toplantı notlarını kararlar ve aksiyon maddeleriyle düzenli tutanağa çevirir. |
| nextjs-hata-cozucu-tr | Next.js hatalarını Türkçe teşhis eder, adım adım çözüm önerir. |
| kvkk-redaksiyon-tr | Metni dışarı paylaşmadan önce KVKK'ya uygun şekilde kişisel verilerden arındırır. |
| akademik-ozetleyici-tr | Akademik makaleleri bulgular ve atıflarla Türkçe özetler. |
| e-fatura-aciklama-tr | E-fatura / e-arşiv için mevzuata uygun Türkçe açıklama satırları yazar. |
| commit-mesaji-tr | Doğru tip ve kapsamla Türkçe conventional commit mesajı üretir. |
| pr-aciklama-tr | Özet, değişiklik ve test notlarıyla Türkçe pull request açıklaması hazırlar. |
| kod-inceleme-tr | Kodu Türkçe inceler; hata, risk ve somut düzeltme önerisi verir. |
| test-yazici-tr | Kodun için her durumu Türkçe açıklayan birim testleri yazar. |
| dokuman-cevirici-tr | Teknik dokümanları kod bloklarını koruyarak doğal Türkçeye çevirir. |

Tüm liste için `skills/` klasörüne bakın (30+ skill).

## Katkıda Bulunma

Bakınız [CONTRIBUTING-TR.md](CONTRIBUTING-TR.md). Kısa kural: PR açmadan önce yerelde `npm run lint:skills` çalıştırın ve yeşil tutun.

## Lisans

MIT — bakınız [LICENSE](LICENSE).
