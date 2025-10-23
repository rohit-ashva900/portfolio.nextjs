import profile from "@/data/profile";

export const metadata = { title: "About – " + profile.name };

export default function AboutPage() {
  return (
    <section className="prose prose-slate max-w-none dark:prose-invert">
      <header className="not-prose mb-8 rounded-2xl border border-white/10 bg-white/40 p-6 backdrop-blur dark:bg-black/20">
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {profile.role} • {profile.location}
        </p>
        <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
          {profile.shortBio}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn" href="/projects">View Projects</a>
          <a className="btn" href={profile.resumeUrl} download>Download CV</a>
          <a className="btn" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </header>

      <h2>What I’m good at</h2>
      <ul>
        <li><strong>ETL/ELT Pipelines:</strong> Ingestion, normalization, and modeling for analytics & retrieval. Idempotent jobs, retries, and clear logging.</li>
        <li><strong>Azure & Databricks:</strong> ADF orchestration, Delta Lake (Bronze/Silver/Gold), cost-aware design, and stable deployments.</li>
        <li><strong>Search & Indexing:</strong> Elasticsearch/Pinecone with relevance-minded preprocessing and deterministic metadata.</li>
        <li><strong>Python Tooling:</strong> Selenium/Playwright/BeautifulSoup/Requests, robust PDF/OCR flows, and clean data contracts.</li>
      </ul>

      <h2>Impact highlights</h2>
      <ul>
        <li>Shipped 30+ production-grade Python pipelines across multi-site sources.</li>
        <li>Improved query performance using Parquet/Delta and medallion architecture.</li>
        <li>Delivered stable scheduled jobs with validation & monitoring.</li>
      </ul>

      <h2>Beyond work</h2>
      <p>
        I enjoy simplifying complex data problems, improving documentation, and sharing learnings. I also run creative side projects on YouTube.
      </p>
    </section>
  );
}
