---
name: kvkk-redaksiyon-tr
description: Türkçe metinlerde KVKK açısından riskli kişisel verileri tespit edip redaksiyon önerir
license: MIT
compatibility: claude-code, opencode
---

# KVKK Redaksiyon TR

## Ne yaparım
- Türkçe metinlerde ad-soyad, T.C. kimlik no, telefon, e-posta, adres, plaka gibi kişisel verileri tespit ederim.
- Her bulguyu KVKK riesgo düzeyine göre (yüksek / orta / düşük) sınıflandırırım.
- Maskeleme, silme veya rumuzlaştırma şeklinde redaksiyon önerisi sunarım.
- Özel nitelikli verileri (sağlık, ceza, biyometri vb.) ayrıca işaretlerim.
- Redaksiyon sonrası paylaşılabilir güvenli metni üretirim.

## Ne zaman kullanılırım
- Kullanıcı bir metnin KVKK açısından riskli olup olmadığını sorduğunda yükle.
- "Kişisel verileri maskele", "KVKK'ya uygun hale getir", "redakte et" gibi isteklerde kullan.
- Yayınlanacak veya paylaşılacak Türkçe metinlerde veri minimizasyonu gerektiğinde kullan.

## Çıktı formatı
```markdown
## Tespitler
| No | Veri | Tür | Risk | Öneri |
|----|------|-----|------|-------|
| V1 | <tespit edilen değer> | <örn. Telefon> | Yüksek/Orta/Düşük | <Maskele/Sil/Rumuzlaştır> |

## Redakte Metin
<kişisel verileri [MASKE] ile değiştirilmiş güvenli metin>

## Uyarı
<özel nitelikli veri veya yüksek risk varsa uyarı, yoksa "Yüksek riskli ek bulgu yok.">
```
