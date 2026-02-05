import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User, Send } from 'lucide-react';

const Contact = () => {
    const coordinators = {
        faculty: [
            {
                name: 'Dr. Rajesh Kumar',
                role: 'Faculty Coordinator',
                department: 'Computer Science & Engineering',
                email: 'rajesh.kumar@arjuntech.edu',
                phone: '+91 98765 43210',
            },
            {
                name: 'Dr. Priya Sharma',
                role: 'Faculty Coordinator',
                department: 'Electronics & Communication',
                email: 'priya.sharma@arjuntech.edu',
                phone: '+91 98765 43211',
            },
        ],
        student: [
            {
                name: 'Arun Prakash',
                role: 'Student Coordinator',
                department: 'CSE - Final Year',
                email: 'arun.p@arjuntech.edu',
                phone: '+91 98765 43220',
            },
            {
                name: 'Divya Menon',
                role: 'Student Coordinator',
                department: 'ECE - Final Year',
                email: 'divya.m@arjuntech.edu',
                phone: '+91 98765 43221',
            },
            {
                name: 'Karthik Raj',
                role: 'Technical Head',
                department: 'IT - Final Year',
                email: 'karthik.r@arjuntech.edu',
                phone: '+91 98765 43222',
            },
            {
                name: 'Sneha Reddy',
                role: 'Events Head',
                department: 'EEE - Final Year',
                email: 'sneha.r@arjuntech.edu',
                phone: '+91 98765 43223',
            },
        ],
    };

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="glass p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                                        <p className="text-gray-400">
                                            Arjun College of Technology<br />
                                            Coimbatore Main Road<br />
                                            Chennai, Tamil Nadu 600001<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                                        <a href="tel:+919876543210" className="text-gray-400 hover:text-primary transition-colors">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                        <a href="mailto:futurix@arjuntech.edu" className="text-gray-400 hover:text-primary transition-colors">
                                            futurix@arjuntech.edu
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="glass p-4 rounded-2xl">
                            <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                                    <p className="text-gray-400">Map Placeholder</p>
                                    <p className="text-sm text-gray-500">Campus Location</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="input"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="input"
                                    placeholder="What is this regarding?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="input resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button type="submit" className="w-full btn-primary group">
                                <span>Send Message</span>
                                <Send className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Faculty Coordinators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="heading-sm text-white text-center mb-8">Faculty Coordinators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coordinators.faculty.map((coord, index) => (
                            <motion.div
                                key={coord.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <User className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-1">{coord.name}</h3>
                                        <p className="text-sm text-primary mb-1">{coord.role}</p>
                                        <p className="text-sm text-gray-400 mb-3">{coord.department}</p>
                                        <div className="space-y-1">
                                            <a href={`mailto:${coord.email}`} className="flex items-center space-x-2 text-sm text-gray-400 hover:text-primary transition-colors">
                                                <Mail className="w-4 h-4" />
                                                <span>{coord.email}</span>
                                            </a>
                                            <a href={`tel:${coord.phone}`} className="flex items-center space-x-2 text-sm text-gray-400 hover:text-primary transition-colors">
                                                <Phone className="w-4 h-4" />
                                                <span>{coord.phone}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Student Coordinators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="heading-sm text-white text-center mb-8">Student Coordinators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coordinators.student.map((coord, index) => (
                            <motion.div
                                key={coord.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center">
                                    <User className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{coord.name}</h3>
                                <p className="text-xs text-secondary mb-1">{coord.role}</p>
                                <p className="text-xs text-gray-400 mb-3">{coord.department}</p>
                                <div className="space-y-1">
                                    <a href={`mailto:${coord.email}`} className="flex items-center justify-center space-x-1 text-xs text-gray-400 hover:text-primary transition-colors">
                                        <Mail className="w-3 h-3" />
                                        <span className="truncate">{coord.email}</span>
                                    </a>
                                    <a href={`tel:${coord.phone}`} className="flex items-center justify-center space-x-1 text-xs text-gray-400 hover:text-primary transition-colors">
                                        <Phone className="w-3 h-3" />
                                        <span>{coord.phone}</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
