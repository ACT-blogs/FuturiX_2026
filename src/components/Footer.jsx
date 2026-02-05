import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/50 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Futurix_2026
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            A National Level Technical Symposium showcasing innovation, technology, and creativity.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Events', path: '/events' },
                                { name: 'Schedule', path: '/schedule' },
                                { name: 'Register', path: '/register' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors inline-block relative group">
                                        <span className="group-hover:translate-x-2 transition-transform inline-block">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm leading-relaxed">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Arjun College of Technology,<br />Coimbatore Main Road, Chennai 600001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>futurix2026@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Important Dates */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Important Dates</h3>
                        <div className="space-y-3">
                            <div className="glass p-4 rounded-lg">
                                <p className="text-xs text-gray-400 mb-1">Event Date</p>
                                <p className="text-white font-semibold">February 21, 2026</p>
                            </div>
                            <div className="glass p-4 rounded-lg">
                                <p className="text-xs text-gray-400 mb-1">Registration Deadline</p>
                                <p className="text-white font-semibold">February 18, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>© 2026 Futurix_2026. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
