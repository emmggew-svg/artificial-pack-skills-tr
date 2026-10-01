# Örnek: pr-aciklama-tr

## Girdi

Kullanıcı girişi: "Sepete indirim kuponu ekleyen `applyCoupon(code)` fonksiyonu eklendi."

## Beklenen Çıktı

```markdown
## Ne değişti
- `applyCoupon(code)` fonksiyonu eklendi, geçersiz kuponda hata döndürüyor.

## Neden
- Ödeme adımında kupon desteği istendi, sepet tutarını düşürmek için.

## Test
- [ ] Geçerli kuponla (`YAZ10`) tutar %10 düşüyor.
- [ ] Geçersiz kuponda hata mesajı gösteriliyor.

## Risk
- Eski sepetlerde kupon alanı boş geçilebilir, geriye uyumlu.
```
