import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md pt-16 pb-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <h2 className="text-2xl font-bold gradient-text">Futurix 2K26</h2>
                            <p className="text-sm text-gray-400">Arjun College of Technology</p>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            A national-level technical symposium bringing together the brightest minds to innovate, compete, and inspire.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/ACT-blogs/FuturiX_2026" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300">
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['About', 'Events', 'Schedule', 'Departments', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-primary transition-colors flex items-center space-x-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                        <span>{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                <FaMapMarkerAlt className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>
                                    Arjun College of Technology<br />
                                    Coimbatore Main Road,<br />
                                    Chennai, Tamil Nadu 600001
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <FaPhoneAlt className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <FaEnvelope className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>futurix2026@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Event Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Event Details</h3>
                        <div className="space-y-3">
                            <div className="glass p-4 rounded-lg border border-white/5">
                                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Event Date</p>
                                <p className="text-white font-semibold">February 21, 2026</p>
                            </div>
                            <div className="glass p-4 rounded-lg border border-white/5">
                                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Registration Deadline</p>
                                <p className="text-white font-semibold">February 18, 2026</p>
                            </div>
                            <Link
                                to="/register"
                                className="block text-center btn-primary mt-4 py-3"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p>&copy; 2026 Futurix. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
