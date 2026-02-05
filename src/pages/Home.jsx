import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calendar,
    Trophy,
    Users,
    Zap,
    ArrowRight,
    Sparkles,
    Rocket,
    Code2,
    Brain
} from 'lucide-react';
import { getStats } from '../data/eventsData';

const Home = () => {
    const stats = getStats();

    const features = [
        {
            icon: Code2,
            title: 'Technical Excellence',
            description: 'Cutting-edge competitions in AI, Web Development, Cybersecurity, and more',
            color: 'primary'
        },
        {
            icon: Brain,
            title: 'Innovation Hub',
            description: 'Showcase your innovative ideas and creative solutions',
            color: 'secondary'
        },
        {
            icon: Users,
            title: 'Networking',
            description: 'Connect with industry experts, mentors, and fellow tech enthusiasts',
            color: 'primary'
        },
        {
            icon: Trophy,
            title: 'Huge Prizes',
            description: `Win from a prize pool worth ${stats.prizePool}`,
            color: 'secondary'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background */}
                <div className="absolute inset-0 mesh-gradient" />
                <div className="absolute inset-0 particle-bg" />

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                />

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-block"
                    >
                        <div className="relative">
                            <Sparkles className="w-20 h-20 md:w-24 md:h-24 text-primary mx-auto animate-pulse" />
                            <div className="absolute inset-0 blur-2xl bg-primary opacity-50" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="heading-xl gradient-text mb-6 text-shadow"
                    >
                        Futurix 2K26
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-display"
                    >
                        Where Innovation Meets Tomorrow
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
                    >
                        National-level Technical Symposium by Arjun College of Technology
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Link to="/events" className="btn-primary group">
                            Explore Events
                            <Rocket className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/register" className="btn-secondary group">
                            Register Now
                            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Event Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
                            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.departments}</p>
                            <p className="text-sm text-gray-400">Departments</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
                            <Zap className="w-8 h-8 text-secondary mx-auto mb-2" />
                            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.totalEvents}+</p>
                            <p className="text-sm text-gray-400">Events</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
                            <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stats.prizePool}</p>
                            <p className="text-sm text-gray-400">Prize Pool</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
                            <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                            <p className="text-3xl md:text-4xl font-bold text-white mb-1">Mar 15-16</p>
                            <p className="text-sm text-gray-400">2026</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-primary/50 rounded-full p-1"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-md gradient-text mb-4">Why Futurix 2K26?</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Experience the perfect blend of competition, learning, and innovation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="card text-center group"
                        >
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-${feature.color}/10 
                            border border-${feature.color}/20 flex items-center justify-center
                            group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative section-container">
                <div className="relative glass p-8 md:p-12 lg:p-16 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
                    <div className="relative z-10 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-md text-white mb-4"
                        >
                            Ready to Shape the Future?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
                        >
                            Join hundreds of students in this incredible journey of innovation and technology
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/register" className="btn-primary text-lg group">
                                Register for Futurix 2K26
                                <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
