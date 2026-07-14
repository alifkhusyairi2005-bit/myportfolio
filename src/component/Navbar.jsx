import { link } from "framer-motion/client";
import [motion] from "framer-motion";
import {useState} from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' },
    ];

    const lightColor = {
        navBg:'bg-linear-to-br from-orange-400 to-white',
        textPrimary:'text-gray-900',
        textSecondary:'text-gray-800',
        textHover :'text-orange-500',
        textActive:'text-orange-600',
        indicator :'from-orange-400 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    };

    const darkColor = {
        navBg:'bg-linear-to-br from-gray-700 to-black',
        textPrimary:'text-white',
        textSecondary:'text-gray-300',
        textHover :'text-blue-400',
        textActive:'text-blue-400',
        indicator :'from-orange-400 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    };

    const colors = darkMode ? darkColor : lightColor;
    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <div className ="flex justify-center w-full fixed z-50 mt-4">
                <motion.div
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{duration: 0.5}}
                className ={'flex items-center justify-center ${colors.navBg}
                    backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg'}>
                    

                    </div>
                

                </motion.div>
        </div>
    )
}

export default Navbar

    
    