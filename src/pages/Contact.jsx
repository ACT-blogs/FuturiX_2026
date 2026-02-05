import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="heading-lg gradient-text mb-6">Get in Touch</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Reach out to our team for any queries.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Our Location</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Arjun College of Technology,<br />
                                            Coimbatore Main Road,<br />
                                            Chennai, Tamil Nadu 600001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <FaPhoneAlt className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Phone Number</h4>
                                        <p className="text-gray-400 mb-1">+91 98765 43210</p>
                                        <p className="text-sm text-gray-500">Mon-Fri 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Email Address</h4>
                                        <a href="mailto:futurix2026@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                                            futurix2026@gmail.com
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="glass p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium ml-1">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium ml-1">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full flex items-center justify-center group">
                                    <span>Send Message</span>
                                    <FaPaperPlane className="ml-2 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
