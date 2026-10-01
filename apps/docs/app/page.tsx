import fs from "node:fs/promises";
import path from "node:path";

type Skill = {
  category: string;
  description: string;
  name: string;
};

async function getSkills(): Promise<Skill[]> {
  const filePath = path.join(process.cwd(), "../../data/skills.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as Skill[];
}

export default async function HomePage() {
  const skills = await getSkills();

  return (
    <main style={{ margin: "0 auto", maxWidth: 960, padding: "48px 24px" }}>
      <h1>Türkçe Beceri Paketi</h1>
      <p>
        Günlük işleriniz için Türkçe hazırlanmış 10 yapay zekâ becerisi: toplantı
        notu, Next.js hata çözümü, KVKK redaksiyonu, akademik özet, e-fatura
        açıklaması ve yazılım geliştirme yardımcıları.
      </p>

      <h2>Kurulum</h2>
      <ol>
        <li>Depoyu klonlayın.</li>
        <li>
          <code>npm run skills:sync</code> komutunu çalıştırın.
        </li>
        <li>İstediğiniz beceriyi seçip kullanmaya başlayın.</li>
      </ol>

      <p>
        <a href="https://github.com">Katkıda bulunun</a>: yeni beceri önerin,
        mevcut açıklamaları iyileştirin veya hata bildirin.
      </p>

      <h2>Beceriler ({skills.length})</h2>
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))"
        }}
      >
        {skills.map((skill) => (
          <article
            key={skill.name}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16
            }}
          >
            <h3 style={{ margin: "0 0 8px" }}>{skill.name}</h3>
            <p style={{ margin: "0 0 8px" }}>{skill.description}</p>
            <small>{skill.category}</small>
          </article>
        ))}
      </div>
    </main>
  );
}
