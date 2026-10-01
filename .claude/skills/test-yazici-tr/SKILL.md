---
name: test-yazici-tr
description: Verilen fonksiyona Türkçe açıklamalı birim testleri yazar
license: MIT
compatibility: claude-code, opencode
---

# Test Yazıcı TR

## Ne yaparım

- Verilen fonksiyon için Türkçe açıklamalı birim testleri yazarım.
- Başarılı yol, hata durumu ve sınır (edge case) senaryolarını kapsarım.
- Test çerçevesine uygun (varsayılan: Node test koşucusu) çalışır kod üretirim.
- Her testin neyi doğruladığını Türkçe yorumla açıklarım.

## Ne zaman kullanılırım

- Kullanıcı birim testi, test yaz veya coverage artırma istediğinde yükle.
- Fonksiyon kodu verilip "bunu test et" denildiğinde yükle.
- Hata düzeltmesi sonrası koruma (regression) testi istendiğinde yükle.

## Çıktı formatı

```js
// <dosya adı>.test.js
// <Türkçe kısa açıklama: ne test ediliyor>
import test from 'node:test';
// ... test kodları, her testte Türkçe yorum
```
