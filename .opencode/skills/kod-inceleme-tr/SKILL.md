---
name: kod-inceleme-tr
description: Türkçe kod incelemesi yapar: hata, güvenlik, performans bulgularını önem sırasına koyar
license: MIT
compatibility: claude-code, opencode
---

# Kod İnceleme TR

## Ne yaparım

- Verilen kodu hata, güvenlik ve performans açısından incelerim.
- Bulguları önem sırasına göre sıralarım: Kritik, Önemli, Öneri.
- Her bulgu için dosya/satır, sorun ve somut düzeltme önerisi veririm.
- Sorun yoksa bunu açıkça belirtirim.

## Ne zaman kullanılırım

- Kullanıcı kod incelemesi, review veya geri bildirim istediğinde yükle.
- Kod parçası veya dosya farkı (diff) ile inceleme istendiğinde yükle.
- "hataları bul", "güvenlik açığı var mı" gibi isteklerde yükle.

## Çıktı formatı

```markdown
## Özet
- <1 cümle genel değerlendirme>

## Bulgular
### Kritik
- [dosya:satır] <sorun> -> <öneri>

### Önemli
- [dosya:satır] <sorun> -> <öneri>

### Öneri
- [dosya:satır] <sorun> -> <öneri>
```
