---
name: nextjs-hata-cozucu-tr
description: Next.js hata mesajlarını Türkçe açıklar, olası nedeni ve adım adım çözümü verir
license: MIT
compatibility: claude-code, opencode
---

# Next.js Hata Çözücü TR

## Ne yaparım
- Next.js hata mesajlarını ve stack trace çıktılarını sade Türkçe ile açıklarım.
- Hatanın olası nedenlerini ihtimal sırasına göre listelerim.
- Adım adım çözüm önerisi ve doğrulanabilir kontrol listesi veririm.
- İlgili dosya, satır ve Next.js kavramına (App Router, SSR, RSC vb.) işaret ederim.
- Tekrar etmemesi için korunma önerisi eklerim.

## Ne zaman kullanılırım
- Kullanıcı bir Next.js hata mesajı, console çıktısı veya build/derleme hatası paylaştığında yükle.
- "Bu hata ne demek", "Next.js hatası alıyorum", "hydration error", "build failed" gibi isteklerde kullan.
- Hata ayıklama ve çözüm adımları Türkçe anlatılmak istendiğinde kullan.

## Çıktı formatı
```markdown
## Hata Özeti
<hatanın tek cümlelik Türkçe açıklaması>

## Olası Nedenler
1. <neden 1> — <kısa gerekçe>
2. <neden 2> — <kısa gerekçe>

## Adım Adım Çözüm
1. <adım>
2. <adım>
3. <doğrulama komutu veya kontrol>

## Örnek Kod
```tsx
// <düzeltilmiş örnek>
```

## Korunma Önerisi
- <tekrar etmemesi için öneri>
```
