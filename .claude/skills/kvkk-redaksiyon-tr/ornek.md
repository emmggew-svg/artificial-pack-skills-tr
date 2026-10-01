# Örnek — kvkk-redaksiyon-tr

## Girdi
```
Müşterimiz Ahmet Yılmaz (0532 111 22 33, ahmet@mail.com) 12.05.2025 tarihinde şubemize başvurdu. T.C. no 10000000146.
```

## Beklenen Çıktı
```markdown
## Tespitler
| No | Veri | Tür | Risk | Öneri |
|----|------|-----|------|-------|
| V1 | Ahmet Yılmaz | Ad-Soyad | Orta | Rumuzlaştır (A.Y.) |
| V2 | 0532 111 22 33 | Telefon | Yüksek | Maskele |
| V3 | ahmet@mail.com | E-posta | Orta | Maskele |
| V4 | 10000000146 | T.C. Kimlik No | Yüksek | Sil |

## Redakte Metin
Müşterimiz A.Y. (05** *** **33, a***@mail.com) 12.05.2025 tarihinde şubemize başvurdu. T.C. no [SİLİNDİ].

## Uyarı
T.C. kimlik numarası yüksek risklidir, metinden tamamen çıkarılması önerilir.
```
