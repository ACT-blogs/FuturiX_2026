import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Navigation, Instagram, Linkedin, Youtube, CheckCircle2, X } from 'lucide-react';

// Contact Form Component with mailto functionality
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Show popup first
        setShowPopup(true);

        // Delay mailto slightly to allow UI update
        setTimeout(() => {
            const mailtoLink = `mailto:futurix2026@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\n\n${formData.message}`)}`;
            window.location.href = mailtoLink;
            setFormData({ name: '', subject: '', message: '' });
        }, 1000);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Your Name
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="input w-full"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Subject
                    </label>
                    <input
                        type="text"
                        placeholder="Inquiry about FuturiX 2026"
                        className="input w-full"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Message
                    </label>
                    <textarea
                        placeholder="Tell us about your inquiry..."
                        rows="5"
                        className="input w-full resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                </button>
            </form>

            {/* Professional Success Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-gray-900 border border-purple-500/30 p-8 rounded-2xl shadow-2xl max-w-sm w-full relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="text-center relative z-10">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30">
                                    <CheckCircle2 className="w-8 h-8 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                    Message Sent!
                                </h3>
                                <p className="text-gray-300 mb-6 font-light">
                                    Thanks for reaching out! We've prepared your email client to send the message.
                                </p>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="btn-primary w-full py-2 rounded-xl"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Contact = () => {
    const collegeAddress = "Thamaraikulam, Pollachi Highway, Coimbatore - 642 120";
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8!2d77.05181!3d10.77832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzQyLjAiTiA3N8KwMDMnMDYuNSJF!5e0!3m2!1sen!2sin!4v1234567890";

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 badge-primary mb-6">
                        <Mail className="w-4 h-4" />
                        <span>Get In Touch</span>
                    </div>
                    <h1 className="heading-lg gradient-text mb-6">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Have questions about FuturiX 2026? We're here to help! Reach out to our team for any inquiries.
                    </p>
                </motion.div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-strong p-6 rounded-2xl hover-lift text-center"
                    >
                        <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                            style={{ background: 'var(--accent-gradient)' }}>
                            <Mail className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Email Us</h3>
                        <p className="text-sm mb-2" style={{ color: 'var(--text-tertiary)' }}>Send us an email</p>
                        <a href="mailto:futurix2026@gmail.com"
                            className="font-medium hover:gradient-text transition-all"
                            style={{ color: 'var(--accent-primary)' }}>
                            futurix2026@gmail.com
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-strong p-6 rounded-2xl hover-lift text-center"
                    >
                        <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                            style={{ background: 'var(--accent-gradient)' }}>
                            <Phone className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Student Coordinators</h3>
                        <div className="flex flex-col gap-2 mt-4 text-sm">
                            <a href="tel:+918098421779" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                                <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>Jasvanth. S</span>
                                <span style={{ color: 'var(--accent-primary)' }}>+91 80984 21779</span>
                            </a>
                            <a href="tel:+919176120750" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                                <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>Santhoshkumar. K</span>
                                <span style={{ color: 'var(--accent-primary)' }}>+91 91761 20750</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-strong p-6 rounded-2xl hover-lift text-center"
                    >
                        <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                            style={{ background: 'var(--accent-gradient)' }}>
                            <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Visit Us</h3>
                        <p className="text-sm mb-2" style={{ color: 'var(--text-tertiary)' }}>Arjun College of Technology</p>
                        <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>
                            {collegeAddress}
                        </p>
                    </motion.div>
                </div>

                {/* Map and Contact Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Interactive Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-strong rounded-2xl overflow-hidden"
                    >
                        <div className="p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                                        Our Location
                                    </h3>
                                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                                        Find us on the map
                                    </p>
                                </div>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=10.77832,77.05181`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline flex items-center space-x-2"
                                >
                                    <Navigation className="w-4 h-4" />
                                    <span>Get Directions</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative h-96">
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Arjun College of Technology Location"
                            />
                        </div>
                        <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 mt-0.5" style={{ color: 'var(--accent-primary)' }} />
                                <div>
                                    <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                                        Arjun College of Technology
                                    </p>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        {collegeAddress}
                                    </p>
                                    <p className="text-xs mt-2" style={{ color: 'var(--text-tertiary)' }}>
                                        📍 Coordinates: 10.77832°N, 77.05181°E
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-strong p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                            Send us a Message
                        </h3>
                        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                            Fill out the form below to send us an email directly.
                        </p>
                        <ContactForm />
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="glass-strong p-8 rounded-2xl text-center"
                >
                    <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--accent-primary)' }} />
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                        Event Information
                    </h3>
                    <p className="max-w-2xl mx-auto mb-4" style={{ color: 'var(--text-secondary)' }}>
                        FuturiX 2026 is a premier technical symposium hosted by Arjun College of Technology.
                        Join us for an exciting showcase of innovation, technology, and talent.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-gradient)' }}></div>
                            <span style={{ color: 'var(--text-tertiary)' }}>Event Date: February 21, 2026</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-gradient)' }}></div>
                            <span style={{ color: 'var(--text-tertiary)' }}>Registration Opens</span>
                        </div>
                    </div>
                </motion.div>

                {/* Social Media Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="glass-strong p-8 rounded-2xl text-center"
                >
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                        Connect With Us
                    </h3>
                    <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                        Follow us on social media for the latest updates and announcements
                    </p>
                    <div className="grid grid-cols-3 gap-3 md:flex md:justify-center md:gap-6 max-w-2xl mx-auto">
                        {/* Instagram */}
                        <motion.a
                            href="https://www.instagram.com/arjunct2013/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-strong p-3 md:p-4 rounded-2xl hover-lift group flex flex-col items-center justify-center"
                        >
                            <Instagram className="w-6 h-6 md:w-8 md:h-8 mb-2 transition-colors"
                                style={{ color: 'var(--accent-primary)' }} />
                            <p className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                Instagram
                            </p>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            href="https://www.linkedin.com/company/arjuncollegeoftechnology/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-strong p-3 md:p-4 rounded-2xl hover-lift group flex flex-col items-center justify-center"
                        >
                            <Linkedin className="w-6 h-6 md:w-8 md:h-8 mb-2 transition-colors"
                                style={{ color: 'var(--accent-primary)' }} />
                            <p className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                LinkedIn
                            </p>
                        </motion.a>

                        {/* YouTube */}
                        <motion.a
                            href="https://www.youtube.com/@arjuncollegeoftechnologyco1739"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-strong p-3 md:p-4 rounded-2xl hover-lift group flex flex-col items-center justify-center"
                        >
                            <Youtube className="w-6 h-6 md:w-8 md:h-8 mb-2 transition-colors"
                                style={{ color: 'var(--accent-primary)' }} />
                            <p className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                YouTube
                            </p>
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
