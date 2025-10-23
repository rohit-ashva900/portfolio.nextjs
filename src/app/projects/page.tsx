import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
export const metadata = { title: "Projects – Rohit Ashva" };

export default function ProjectsPage() {
  return (
    <section>
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-2 text-sm text-slate-500">
          A few recent builds. Code links included where available.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
