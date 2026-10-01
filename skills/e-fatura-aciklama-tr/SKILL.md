---
name: e-fatura-aciklama-tr
description: E-fatura ve e-arşiv fatura açıklamalarını Türkçe, mevzuata uygun dille yazar
license: MIT
compatibility: claude-code, opencode
---

# E-Fatura Açıklama TR

## Ne yaparım
- E-fatura ve e-arşiv fatura açıklamalarını açık, kısa ve mevzuata uygun Türkçe ile yazarım.
- Mal/hizmet adı, miktar, dönem ve sözleşme bilgisini standart sırayla dizerim.
- KDV tevkifatı, istisna ve iade gibi özel durumları uygun ifadeyle belirtirim.
- Kişisel veri ve gereksiz detay eklemem, resmî ve tarafsız dil kullanırım.
- 500 karakteri geçmeyen tek paragraf açıklama üretirim.

## Ne zaman kullanılırım
- Kullanıcı fatura açıklaması, e-fatura notu veya e-arşiv açıklama metni istediğinde yükle.
- "Faturaya açıklama yaz", "mevzuata uygun açıklama", "hizmet bedeli açıklaması" gibi isteklerde kullan.
- Ham sipariş veya hizmet bilgisini faturaya yazılabilir dile çevirmem gerektiğinde kullan.

## Çıktı formatı
```markdown
## Fatura Açıklaması
<500 karakteri geçmeyen tek paragraf resmi açıklama>

## Tür
<E-Fatura / E-Arşiv>

## Kontrol
- [ ] Mal/hizmet adı yazıldı
- [ ] Dönem/tarih bilgisi var
- [ ] Sözleşme/sipariş no eklendi (varsa)
- [ ] KDV/tevkifat ifadesi uygun
```
