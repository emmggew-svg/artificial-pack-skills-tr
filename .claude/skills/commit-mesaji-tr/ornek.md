# Örnek: commit-mesaji-tr

## Girdi

```diff
- function topla(a, b) { return a + b; }
+ function topla(a, b) {
+   if (typeof a !== 'number' || typeof b !== 'number') throw new Error('sayi bekleniyor');
+   return a + b;
+ }
```

## Beklenen Çıktı

```text
fix: topla fonksiyonuna sayı tipi kontrolü ekle

Sayısal olmayan girdilerde sessiz hata yerine açık hata fırlatır.
```
