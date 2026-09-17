import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Home = ({ darkMode }) => {
  const accent = darkMode ? 'text-emerald-400' : 'text-emerald-500';
  const card = darkMode ? 'bg-slate-900/70 border-slate-700' : 'bg-white/80 border-slate-200';

  return (
    <section id="home" className="snap-start flex min-h-screen items-start justify-center py-24">
      <div className="grid w-full items-start gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className={`mb-4 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
              darkMode
                ? 'border-emerald-500/30 bg-slate-900 text-emerald-300'
                : 'border-emerald-200 bg-emerald-50 text-emerald-600'
            }`}
          >
            Hello 👋 I’m ALIF KHUSYAIRI BIN A.HINAYADULLAH
          </p>

          <h1 className={`text-4xl font-bold sm:text-5xl lg:text-6xl ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            
            Computer Science student passionate about <span className={accent}>data, software development, and solving real-world problems</span>
          </h1>

        

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-600"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className={`rounded-full border px-6 py-3 font-medium transition ${
                darkMode
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Let’s Talk
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/alifkhusyairi2005-bit"
              target="_blank"
              rel="noreferrer"
              className={`rounded-full border p-3 ${
                darkMode
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/alif-khusyairi-6130ba313"
              target="_blank"
              rel="noreferrer"
              className={`rounded-full border p-3 ${
                darkMode
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:alifkhusyairi2005@gmail.com"
              className={`rounded-full border p-3 ${
                darkMode
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-20 flex translate-y-4 items-center justify-center sm:translate-y-8"
        >
          <div
            className={`relative flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full border-[6px] p-2 shadow-2xl sm:h-[360px] sm:w-[360px] ${
              darkMode
                ? 'border-emerald-400/70 bg-slate-900/80'
                : 'border-emerald-300 bg-white/90'
            }`}
          >
            <img
              src="/myself.jpg"
              alt="ALIF KHUSYAIRI"
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;