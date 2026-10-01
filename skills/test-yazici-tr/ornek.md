# Örnek: test-yazici-tr

## Girdi

```js
function topla(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('sayi bekleniyor');
  return a + b;
}
```

## Beklenen Çıktı

```js
// topla.test.js
// topla fonksiyonunun doğru toplama ve hata durumlarını test eder
import test from 'node:test';
import assert from 'node:assert/strict';
import { topla } from './topla.js';

test('iki pozitif sayıyı toplar', () => {
  // Başarılı yol: 2 + 3 = 5 olmalı
  assert.equal(topla(2, 3), 5);
});

test('sayı dışı girdide hata fırlatır', () => {
  // Hata durumu: metin verilirse hata beklenir
  assert.throws(() => topla('2', 3), /sayi bekleniyor/);
});
```
