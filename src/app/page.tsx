import profile from '@/data/profile';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="grid gap-10">
      <section className="card p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
            <p className="mt-2 text-slate-500">{profile.role} • {profile.location}</p>
            <p className="mt-4 max-w-2xl text-slate-600">{profile.shortBio}</p>
            <div className="mt-6 flex gap-3">
              <Link href="/projects" className="btn">View Projects</Link>
              <a href={profile.resumeUrl} className="btn" download>
                Download CV
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 p-10 text-center">
            <div className="text-5xl font-extrabold">4+</div>
            <div className="text-sm text-slate-500">Key stacks: Python, SQL, PySpark, Azure, Airflow</div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'ETL/ELT Pipelines',
            desc: 'Reliable ingestion, normalization, and modeling for analytics & search.'
          },
          {
            title: 'Azure & Databricks',
            desc: 'ADF orchestration, Delta Lake, notebooks, jobs, and cost-aware design.'
          },
          {
            title: 'Search & Retrieval',
            desc: 'Elasticsearch/Pinecone indexing and relevance-minded data prep.'
          }
        ].map((c) => (
          <div key={c.title} className="card p-6">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{c.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

