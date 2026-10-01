# Örnek: kod-inceleme-tr

## Girdi

```js
const query = "SELECT * FROM users WHERE id = " + req.query.id;
db.query(query);
```

## Beklenen Çıktı

```markdown
## Özet
- SQL enjeksiyonuna açık kritik bir güvenlik sorunu var.

## Bulgular
### Kritik
- [app.js:1] Kullanıcı girdisi doğrudan SQL'e eklenmiş -> Parametreli sorgu (`?` yer tutucu) kullanın.

### Önemli
- Yok.

### Öneri
- [app.js:2] Hata yönetimi yok -> `try/catch` ile hata günlüğü ekleyin.
```
