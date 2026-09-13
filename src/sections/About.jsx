import { motion } from 'framer-motion';
import { Code2, Rocket, Sparkles } from 'lucide-react';

const About = ({ darkMode }) => {
  const card = darkMode ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white';

  return (
    <section id="about" className="snap-start py-24">
      <div className="max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">About Me</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">I design and build web experiences that feel premium.</h2>
        <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          I’m passionate about turning ideas into clean, interactive websites. My focus is on user experience, responsive design, and performance.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl border p-6 shadow-sm ${card}`}
          >
            <Code2 className="text-emerald-500" size={24} />
            <h3 className="mt-4 text-xl font-semibold">Clean Code</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Writing maintainable React and Tailwind code with thoughtful structure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`rounded-2xl border p-6 shadow-sm ${card}`}
          >
            <Rocket className="text-emerald-500" size={24} />
            <h3 className="mt-4 text-xl font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Building polished interfaces quickly without sacrificing quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`rounded-2xl border p-6 shadow-sm ${card}`}
          >
            <Sparkles className="text-emerald-500" size={24} />
            <h3 className="mt-4 text-xl font-semibold">Modern Design</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Creating intuitive layouts with smooth motion and strong visual hierarchy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;