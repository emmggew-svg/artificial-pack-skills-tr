# Katkıda Bulunma — İlk PR'ını 15 Dakikada At

Hoş geldin! Bu rehber tek sayfada ilk katkını anlatır.

## 1. Forkla (2 dk)

1. Repo'yu forkla.
2. Klonla:
   ```bash
   git clone https://github.com/KULLANICI-ADIN/artificial-pack-skills-tr.git
   cd artificial-pack-skills-tr
   ```

## 2. Bir Skill Ekle / Düzelt (8 dk)

- Yeni skill: `skills/<ornek-skill-tr>/SKILL.md` oluştur.
- Düzeltme: tek PR = tek skill. Başka dosyaya dokunma.

## 3. Lint'i Yerelde Yeşil Yap (3 dk) — ZORUNLU

PR açmadan **ÖNCE** şunu çalıştır:

```bash
npm run lint:skills
```

- ✅ Yeşilse: PR aç.
- ❌ Kırmızıysa: **draft PR** aç ve log çıktısını PR açıklamasına yapıştır. Yardım isterken hangi komutu çalıştırdığını yaz.

## 4. PR Şablonu

```md
## Ne değişti
- ...

## Neden
- ...

## Test
- [ ] `npm run lint:skills` yeşil (çıktıyı yapıştırdım)
- [ ] `npm run skills:sync` sonrası .opencode/skills ve .claude/skills içinde *-tr kopyası güncel
```

## 5. Sözümüz

- **48 saatte cevap sözü:** Her PR'a en geç 48 saat içinde dönüş yaparız (onay, değişiklik isteği veya soru).
- Kibar ve somut geri bildirim bekle; aynısını senden de bekleriz.

Kolay gelsin!
