import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="heading-lg gradient-text mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Have questions? Get in touch with our team
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a href="mailto:futurix2026@gmail.com" className="text-white hover:text-primary">
                                        futurix2026@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <p className="text-white">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <p className="text-gray-400 text-sm">Address</p>
                                    <p className="text-white">Arjun College of Technology, Chennai</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl">
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="input w-full" />
                            <input type="email" placeholder="Email" className="input w-full" />
                            <textarea placeholder="Message" rows="4" className="input w-full resize-none"></textarea>
                            <button className="btn-primary w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
