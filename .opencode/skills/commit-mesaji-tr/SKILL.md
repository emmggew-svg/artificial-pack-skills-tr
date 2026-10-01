---
name: commit-mesaji-tr
description: Kod değişikliğinden Türkçe, conventional-commit tarzı net commit mesajı yazar
license: MIT
compatibility: claude-code, opencode
---

# Commit Mesajı TR

## Ne yaparım

- Verilen kod farkını (diff) analiz ederim.
- Conventional Commits tarzında (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`) tek satırlık başlık yazarım.
- Gerekirse Türkçe 2-3 cümlelik gövde açıklaması eklerim.
- Belirsiz ifadelerden kaçınır, neyin neden değiştiğini net yazarım.

## Ne zaman kullanılırım

- Kullanıcı commit mesajı istediğinde yükle.
- `git diff` veya `git status` çıktısı verildiğinde yükle.
- "commit yaz", "commit mesajı öner" gibi isteklerde yükle.

## Çıktı formatı

```text
<tip>: <kısa Türkçe açıklama (en fazla 72 karakter)>

<opsiyonel gövde: 1-3 cümle, ne + neden>
```

- Sadece tek bir commit mesajı döndür, alternatif listesi verme.
- Kod bloğu dışında ek açıklama yazma.
