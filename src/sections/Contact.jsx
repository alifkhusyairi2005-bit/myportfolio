import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const inputClass = darkMode
    ? 'border-slate-700 bg-slate-900 text-white placeholder:text-slate-400'
    : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400';

  return (
    <section id="contact" className="snap-start py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let’s build something amazing together.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            If you want a modern website, feel free to reach out. I’m open to freelance work and collaborations.
          </p>

          <div className="mt-8 space-y-4">
            <div className={`flex items-center gap-3 rounded-2xl border p-4 ${darkMode ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white'}`}>
              <Mail className="text-emerald-500" size={18} />
              <span>alifkhusyairi2005@gmail.com</span>
            </div>
            <div className={`flex items-center gap-3 rounded-2xl border p-4 ${darkMode ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white'}`}>
              <Phone className="text-emerald-500" size={18} />
              <span>019-6361018</span>
            </div>
            <div className={`flex items-center gap-3 rounded-2xl border p-4 ${darkMode ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white'}`}>
              <MapPin className="text-emerald-500" size={18} />
              <span>Sepang, Selangor</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={`rounded-3xl border p-6 shadow-sm ${darkMode ? 'border-slate-700 bg-slate-900/70' : 'border-slate-200 bg-white'}`}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={`rounded-2xl border px-4 py-3 ${inputClass}`} placeholder="Your Name" />
            <input className={`rounded-2xl border px-4 py-3 ${inputClass}`} placeholder="Your Email" />
          </div>

          <input className={`mt-4 w-full rounded-2xl border px-4 py-3 ${inputClass}`} placeholder="Subject" />

          <textarea
            rows="5"
            className={`mt-4 w-full rounded-2xl border px-4 py-3 ${inputClass}`}
            placeholder="Tell me about your project..."
          />

          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-600">
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;