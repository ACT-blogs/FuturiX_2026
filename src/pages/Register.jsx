import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, AlertCircle, Calendar, Trophy } from 'lucide-react';

const Register = () => {
    const guidelines = [
        'Registration is open to all undergraduate students from recognized institutions',
        'Team registrations must include all team member details',
        'Each participant can register for multiple events',
        'Registration deadline: March 10, 2026',
        'Registration confirmation will be sent via email',
        'Bring your college ID card and registration confirmation on the event day',
        'Workshop registrations are separate and on a first-come, first-served basis',
        'For team events, only one member needs to register the entire team',
    ];

    const process = [
        {
            step: '01',
            title: 'Fill the Registration Form',
            description: 'Click the button below to access the Google Form and fill in your details',
        },
        {
            step: '02',
            title: 'Select Your Events',
            description: 'Choose the events and workshops you want to participate in',
        },
        {
            step: '03',
            title: 'Submit & Confirm',
            description: 'Submit the form and wait for email confirmation within 24 hours',
        },
        {
            step: '04',
            title: 'Attend Futurix',
            description: 'Bring your ID and confirmation email on the event days',
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="heading-lg gradient-text mb-6">Registration</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Join Futurix 2K26 and be part of an incredible tech symposium experience
                    </p>
                </motion.div>

                {/* Registration CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative glass p-8 md:p-12 rounded-2xl mb-12 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
                    <div className="relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                            <Trophy className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="heading-sm text-white mb-4">Ready to Participate?</h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Click the button below to fill out the registration form and secure your spot at Futurix 2K26
                        </p>
                        <a
                            href="https://forms.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 btn-primary text-lg group"
                        >
                            <span>Open Registration Form</span>
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-sm text-gray-400 mt-4 flex items-center justify-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>Deadline: March 10, 2026</span>
                        </p>
                    </div>
                </motion.div>

                {/* Registration Process */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="heading-sm text-white text-center mb-8">Registration Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card text-center group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                                <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Guidelines */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass p-8 rounded-2xl mb-12"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-white">Registration Guidelines</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {guidelines.map((guideline, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <p className="text-gray-300">{guideline}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Help Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass p-8 rounded-2xl"
                >
                    <div className="flex items-center space-x-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-secondary" />
                        <h3 className="text-xl font-bold text-white">Need Help?</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                        If you face any issues during registration or have questions, please don't hesitate to reach out to us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="/contact" className="btn-outline">
                            Contact Us
                        </a>
                        <a href="mailto:futurix@arjuntech.edu" className="btn-secondary">
                            Email Support
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Register;
