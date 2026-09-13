import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  const lightColor = {
    navBg: 'bg-gradient-to-br from-emerald-400 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textHover: 'text-teal-500',
    textActive: 'text-teal-600',
    indicator: 'from-teal-400 to-teal-500',
    button: 'from-teal-500 to-teal-600',
  };

  const darkColor = {
    navBg: 'bg-gradient-to-br from-slate-800 to-slate-950',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    textHover: 'text-teal-400',
    textActive: 'text-teal-400',
    indicator: 'from-teal-400 to-teal-500',
    button: 'from-teal-500 to-teal-600',
  };

  const colors = darkMode ? darkColor : lightColor;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="relative flex justify-center w-full fixed z-50 mt-4 px-4">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg w-full lg:w-auto`}
      >
        <a
          href="#home"
          onClick={() => setActiveSection('home')}
          className={`font-bold text-lg mr-8 ${colors.textPrimary}`}
        >
          Portfolio
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                activeSection === item.name.toLowerCase()
                  ? colors.textActive
                  : `${colors.textSecondary} hover:${colors.textHover}`
              }`}
            >
              {item.name}
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r ${colors.indicator}`}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-8">
          <button
            onClick={toggleDarkMode}
            className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition ${
              darkMode
                ? 'border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            {darkMode ? 'Light' : 'Dark'}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${colors.textPrimary}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[90%] ${colors.navBg} backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg flex flex-col gap-4`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary
                }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;


