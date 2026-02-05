import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Twitter, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Github, href: '#', label: 'GitHub' },
    ];

    const quickLinks = [
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Departments', path: '/departments' },
        { name: 'Schedule', path: '/schedule' },
        { name: 'Register', path: '/register' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="relative bg-dark-500 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Sparkles className="w-8 h-8 text-primary" />
                            <div>
                                <h3 className="text-2xl font-bold gradient-text">Futurix 2K26</h3>
                                <p className="text-xs text-gray-400">Innovation Meets Future</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            National-level Technical Symposium organized by Arjun College of Technology.
                            Join us in celebrating innovation, technology, and excellence.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 glass rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>
                                    Arjun College of Technology<br />
                                    Chennai, Tamil Nadu<br />
                                    India - 600001
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>futurix@arjuntech.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Event Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Event Details</h4>
                        <div className="space-y-3">
                            <div className="glass p-4 rounded-lg">
                                <p className="text-xs text-gray-400 mb-1">Event Date</p>
                                <p className="text-white font-semibold">March 15-16, 2026</p>
                            </div>
                            <div className="glass p-4 rounded-lg">
                                <p className="text-xs text-gray-400 mb-1">Registration Deadline</p>
                                <p className="text-white font-semibold">March 10, 2026</p>
                            </div>
                            <Link
                                to="/register"
                                className="block text-center btn-primary text-sm py-2"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Futurix 2K26. All rights reserved. | Arjun College of Technology
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-4">
                        Built with ❤️ for innovation and technology
                    </p>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
            </div>
        </footer>
    );
};

export default Footer;
