import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/arjunct2013/', label: 'Instagram' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/arjuncollegeoftechnology/', label: 'LinkedIn' },
        { icon: Youtube, href: 'https://www.youtube.com/@arjuncollegeoftechnologyco1739', label: 'YouTube' },
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Departments', path: '/departments' },
        { name: 'Register', path: '/register' },
    ];

    return (
        <footer className="relative border-t" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--accent-gradient)' }} />

            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <Link to="/" className="flex items-center space-x-3 group">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                className="w-12 h-12 flex items-center justify-center"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}logo.svg`}
                                    alt="FuturiX Logo"
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </motion.div>
                            <span className="text-2xl font-bold gradient-text">
                                Futurix_2026
                            </span>
                        </Link>
                        <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            A National Level Technical Symposium showcasing innovation, technology, and creativity.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-11 h-11 rounded-xl flex items-center justify-center glass hover-lift"
                                        style={{ borderColor: 'var(--border-color)' }}
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="inline-block transition-all hover:translate-x-2"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        <span className="hover:gradient-text">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }} />
                                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    Arjun College of Technology,<br />Thamaraikulam, Pollachi Highway,<br />Coimbatore - 642 120
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>+91 80984 21779</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                                <a href="mailto:futurix2026@gmail.com" className="text-sm hover:gradient-text transition-all" style={{ color: 'var(--text-secondary)' }}>
                                    futurix2026@gmail.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Important Dates */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Important Dates</h3>
                        <div className="space-y-4">
                            <div className="glass p-4 rounded-xl hover-lift">
                                <p className="text-xs mb-1" style={{ color: 'var(--text-tertiary)' }}>Event Date</p>
                                <p className="font-semibold gradient-text">February 21, 2026</p>
                            </div>
                            <div className="glass p-4 rounded-xl hover-lift">
                                <p className="text-xs mb-1" style={{ color: 'var(--text-tertiary)' }}>Online Registration</p>
                                <p className="font-semibold gradient-text">Until Feb 20, 2026</p>
                            </div>
                            <div className="glass p-4 rounded-xl hover-lift">
                                <p className="text-xs mb-1" style={{ color: 'var(--text-tertiary)' }}>Spot Registration</p>
                                <p className="font-semibold gradient-text">Available on Event Day</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t pt-8 pb-6" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm flex items-center" style={{ color: 'var(--text-tertiary)' }}>
                            © {currentYear} Futurix_2026. All rights reserved.
                        </p>
                        <p className="text-sm flex items-center" style={{ color: 'var(--text-tertiary)' }}>
                            Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by ACT Team
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
