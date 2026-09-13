import { ExternalLink } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Modern Landing Page',
      description: 'A polished landing page with animated sections and a premium layout.',
      stack: ['React', 'Tailwind', 'Framer Motion'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website with dark mode and smooth navigation.',
      stack: ['React', 'Tailwind', 'Vite'],
      link: '#',
    },
    {
      title: 'E-commerce UI',
      description: 'A sleek product page experience designed for conversion and clarity.',
      stack: ['React', 'CSS', 'Figma'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="snap-start py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Projects</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        A few examples of my recent work.
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`rounded-3xl border p-6 shadow-sm ${
              darkMode ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white'
            }`}
          >
            <div className="h-36 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-400"></div>

            <h3 className="mt-6 text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    darkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-500"
            >
              View Project <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;