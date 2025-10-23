import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-5">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/10 mb-4">
        {project.image ? (
          // use next/image if you want optimization
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">No image</div>
        )}
      </div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-500">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-lg bg-black/5 px-2 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {project.links?.repo && (
          <a className="btn" href={project.links.repo} target="_blank" rel="noreferrer">Repository</a>
        )}
        {project.links?.demo && (
          <a className="btn" href={project.links.demo} target="_blank" rel="noreferrer">Live Demo</a>
        )}
      </div>
    </article>
  );
}

