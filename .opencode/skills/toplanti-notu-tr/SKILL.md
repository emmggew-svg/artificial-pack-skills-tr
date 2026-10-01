---
name: toplanti-notu-tr
description: Türkçe toplantı transkriptlerini karar, sorumlu ve tarih içeren aksiyon listesine dönüştürür
license: MIT
compatibility: claude-code, opencode
---

# Toplantı Notu TR

## Ne yaparım
- Türkçe toplantı transkriptlerini okuyup özetlerim.
- Alınan kararları maddeler halinde çıkarırım.
- Her aksiyon için sorumlu kişi ve termin tarihi belirlerim.
- Belirsiz veya eksik bilgileri soru işaretiyle işaretlerim.
- Gereksiz sohbet ve tekrarları eleyip sade not üretirim.

## Ne zaman kullanılırım
- Türkçe bir toplantı transkripti, deşifresi veya ham toplantı notu verildiğinde yükle.
- Kullanıcı "toplantıyı özetle", "aksiyon listesi çıkar", "kararları yaz" gibi isteklerde bulunduğunda kullan.
- Ham konuşma metnini düzenli tutanak formatına çevirmem gerektiğinde kullan.

## Çıktı formatı
```markdown
# Toplantı Notu — <Başlık> (<Tarih>)

## Kararlar
- [K1] <karar metni>

## Aksiyonlar
| No | Aksiyon | Sorumlu | Tarih | Durum |
|----|---------|---------|-------|-------|
| A1 | <aksiyon> | <isim> | <GG.AA.YYYY veya Belirsiz> | Açık |

## Açık Sorular
- <yanıt bekleyen soru>
```
