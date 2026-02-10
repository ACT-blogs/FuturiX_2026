import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Trophy, Zap, Sparkles, Rocket } from 'lucide-react';
import { getStats } from '../data/eventsData';
import Countdown from '../components/Countdown';

const Home = () => {
    const stats = getStats();

    const features = [
        {
            icon: Rocket,
            title: 'Innovation Hub',
            description: 'Cutting-edge technology competitions and workshops'
        },
        {
            icon: Users,
            title: 'Network & Collaborate',
            description: 'Connect with brilliant minds from across the nation'
        },
        {
            icon: Trophy,
            title: 'Win Big',
            description: 'Compete for exciting prizes and recognition'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 mesh-gradient opacity-60" />

                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
                    style={{ background: 'var(--accent-primary)' }}
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{ background: 'var(--accent-secondary)' }}
                />

                <div className="section-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Main Heading */}
                        <h1 className="heading-xl mb-6">
                            <span className="gradient-text">FuturiX_2026</span>
                            <br />
                            Innovate. Compete.
                        </h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            National Level Technical Symposium organized by Arjun College of Technology.
                            Unleash your potential in a futuristic arena of technology.
                        </motion.p>

                        {/* Countdown Timer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mb-10"
                        >
                            <Countdown />
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link to="/events" className="btn-primary group">
                                Explore Events
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="btn-outline">
                                Learn More
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
                        style={{ borderColor: 'var(--border-color)' }}>
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: 'var(--accent-primary)' }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="section-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Total Events', value: stats.totalEvents, icon: Calendar },
                            { label: 'Departments', value: stats.departments, icon: Users },
                            { label: 'Prize Pool', value: stats.prizePool, icon: Trophy },
                            { label: 'Technical', value: stats.technicalEvents, icon: Zap },
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center card-hover"
                                >
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                                        style={{ background: 'var(--accent-gradient)' }}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.value}</div>
                                    <div style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg gradient-text mb-4">Why FuturiX?</h2>
                    <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Experience the future of technology through innovation, collaboration, and competition
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="card-hover text-center p-8"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                                    style={{ background: 'var(--accent-gradient)' }}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;
