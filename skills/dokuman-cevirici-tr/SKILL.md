---
name: dokuman-cevirici-tr
description: İngilizce teknik dokümantasyonu terimleri koruyarak Türkçeye çevirir
license: MIT
compatibility: claude-code, opencode
---

# Doküman Çevirici TR

## Ne yaparım

- İngilizce teknik dokümantasyonu akıcı Türkçeye çeviririm.
- Teknik terimleri (API, token, cache, pull request) İngilizce bırakırım.
- Kod bloklarını, komutları ve yapılandırma örneklerini aynen korurum.
- Başlık yapısını ve madde listelerini bozmam.

## Ne zaman kullanılırım

- Kullanıcı İngilizce doküman, README veya açıklama metni çevirisi istediğinde yükle.
- "bunu Türkçeye çevir ama terimleri koru" gibi isteklerde yükle.
- Teknik blog veya API belgesi yerelleştirilirken yükle.

## Çıktı formatı

```markdown
# <Türkçe başlık>

<Türkçe paragraf, terimler İngilizce korunur>

```<dil>
<orijinal kod aynen>
```
```
