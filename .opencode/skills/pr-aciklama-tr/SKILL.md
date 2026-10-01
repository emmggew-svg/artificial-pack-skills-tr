---
name: pr-aciklama-tr
description: Kod farkından Türkçe pull request açıklaması yazar: ne, neden, test, risk
license: MIT
compatibility: claude-code, opencode
---

# PR Açıklama TR

## Ne yaparım

- Verilen kod farkını özetleyip Türkçe PR açıklaması yazarım.
- Değişikliğin ne olduğunu ve neden yapıldığını açıklarım.
- Yapılan testleri ve kalan riskleri listelerim.
- Gözden geçirene (reviewer) kontrol listesi sunarım.

## Ne zaman kullanılırım

- Kullanıcı PR açıklaması istediğinde yükle.
- Kod farkı (diff) verilip "PR aç", "PR yaz", "özetle" denildiğinde yükle.
- Birleştirme (merge) öncesi özet gerektiğinde yükle.

## Çıktı formatı

```markdown
## Ne değişti
- ...

## Neden
- ...

## Test
- [ ] ...

## Risk
- ...
```
