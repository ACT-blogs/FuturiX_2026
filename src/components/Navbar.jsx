import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Departments', path: '/departments' },
        { name: 'Schedule', path: '/schedule' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            FuturiX_2026
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-300 relative group ${location.pathname === link.path ? 'text-primary' : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/register"
                            className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 border border-white/10 hover:border-primary/50"
                        >
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-300 hover:text-white transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.path
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/register"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-lg text-base font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-white/10 text-center mt-4"
                            >
                                Register Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
