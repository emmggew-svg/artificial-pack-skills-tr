# Örnek — nextjs-hata-cozucu-tr

## Girdi
```
Error: Hydration failed because the server rendered HTML didn't match the client.
app/page.tsx (12:5) @ Home
```

## Beklenen Çıktı
```markdown
## Hata Özeti
Sunucu ile istemcinin ürettiği HTML farklı olduğu için hydration başarısız oldu.

## Olası Nedenler
1. `new Date()` veya `Math.random()` gibi istemcide değişen değer — sunucu ve istemci farklı HTML üretir.
2. `localStorage` veya `window` kullanımı sunucu bileşeninde — sunucuda tanımsızdır.

## Adım Adım Çözüm
1. `app/page.tsx` 12. satırdaki dinamik değeri bul.
2. Değeri `useEffect` içine taşı veya `suppressHydrationWarning` yerine istemci bileşeni (`"use client"`) kullan.
3. `npm run dev` ile sayfayı yenileyip hatanın gittiğini doğrula.

## Örnek Kod
```tsx
"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [saat, setSaat] = useState("");
  useEffect(() => { setSaat(new Date().toLocaleTimeString("tr-TR")); }, []);
  return <p>{saat}</p>;
}
```

## Korunma Önerisi
- Rastgele ve tarih değerlerini her zaman istemci tarafında üret.
```
