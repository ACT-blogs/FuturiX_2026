import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Departments', path: '/departments' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* Desktop Floating Navbar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
            >
                <div
                    className="flex items-center space-x-1 px-6 py-3 rounded-full glass-strong"
                    style={{
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                    }}
                >
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 font-tech tracking-wider"
                            style={{
                                color: location.pathname === link.path ? 'white' : 'var(--text-secondary)'
                            }}
                        >
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="navbar-pill"
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background: 'var(--accent-gradient)',
                                        boxShadow: '0 4px 20px rgba(0, 217, 255, 0.4)',
                                    }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    ))}

                    {/* Theme Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="ml-2 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                        ) : (
                            <Moon className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                        )}
                    </motion.button>

                    {/* Register Button */}
                    <Link
                        to="/register"
                        className="ml-2 px-6 py-2.5 rounded-full font-medium text-sm text-white transition-all duration-300"
                        style={{
                            background: 'var(--accent-gradient)',
                            boxShadow: '0 4px 20px rgba(0, 217, 255, 0.3)',
                        }}
                    >
                        Register
                    </Link>
                </div>
            </motion.nav>

            {/* Mobile Hamburger Menu (Top Right) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-6 right-6 z-50 md:hidden"
            >
                <div className="flex items-center space-x-3">
                    {/* Theme Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="w-12 h-12 rounded-full flex items-center justify-center glass-strong"
                        style={{
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                        ) : (
                            <Moon className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                        )}
                    </motion.button>

                    {/* Hamburger Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-12 h-12 rounded-full flex items-center justify-center glass-strong"
                        style={{
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                            color: 'var(--text-primary)'
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-80 glass-strong z-40 md:hidden"
                            style={{
                                backdropFilter: 'blur(20px)',
                                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            <div className="flex flex-col h-full p-8 pt-24">
                                {/* Navigation Links */}
                                <div className="space-y-3 flex-1">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-6 py-4 rounded-2xl text-base font-medium transition-all"
                                                style={{
                                                    background: location.pathname === link.path
                                                        ? 'var(--accent-gradient)'
                                                        : 'rgba(255, 255, 255, 0.05)',
                                                    color: location.pathname === link.path
                                                        ? 'white'
                                                        : 'var(--text-secondary)',
                                                    border: location.pathname === link.path
                                                        ? 'none'
                                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                                    boxShadow: location.pathname === link.path
                                                        ? '0 4px 20px rgba(0, 217, 255, 0.3)'
                                                        : 'none',
                                                }}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Register Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Link
                                        to="/register"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-6 py-4 rounded-2xl text-center font-semibold text-white"
                                        style={{
                                            background: 'var(--accent-gradient)',
                                            boxShadow: '0 8px 30px rgba(0, 217, 255, 0.4)',
                                        }}
                                    >
                                        Register Now
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
