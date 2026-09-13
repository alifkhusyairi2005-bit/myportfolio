const Skills = ({ darkMode }) => {
  const skills = [
    {
      title: 'Frontend',
      items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Design',
      items: ['UI Design', 'Responsive Layouts', 'Accessibility', 'Figma'],
    },
    {
      title: 'Tools',
      items: ['Git', 'VS Code', 'Netlify', 'Vercel'],
    },
  ];

  return (
    <section id="skills" className="snap-start py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Skills</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        Tools and technologies I use to build great products.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className={`rounded-2xl border p-6 shadow-sm ${
              darkMode ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white'
            }`}
          >
            <h3 className="text-xl font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;