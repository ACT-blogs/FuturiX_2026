import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaRocket } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Departments', path: '/departments' },
        { name: 'Schedule', path: '/schedule' },
        { name: 'Register', path: '/register' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
            <div className="section-container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center"
                        >
                            <FaRocket className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                            <h1 className="text-xl font-bold gradient-text">Futurix 2K26</h1>
                            <p className="text-xs text-gray-400">Technical Symposium</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-primary/20 text-primary'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <FaTimes className="w-6 h-6 text-white" />
                        ) : (
                            <FaBars className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                                                ? 'bg-primary/20 text-primary'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
