import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Trophy, Zap, Sparkles, Rocket, Download, Lightbulb } from 'lucide-react';
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern">
                {/* Animated Background */}
                <div className="absolute inset-0 mesh-gradient opacity-40" />

                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] opacity-20"
                    style={{ background: 'var(--accent-primary)' }}
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1],
                        rotate: [0, -5, 5, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
                    style={{ background: 'var(--accent-secondary)' }}
                />

                <div className="section-container relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Main Heading */}
                        <motion.div variants={itemVariants} className="relative inline-block mb-12 group cursor-default select-none">
                            {/* AI Powered Badge Removed */}

                            {/* Floating Bulb Removed */}

                            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter flex flex-wrap justify-center items-baseline gap-1 md:gap-3 leading-none font-sans relative z-10 pb-4 transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                                {/* FUTUR - Blue to Purple */}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 filter drop-shadow-xl transition-all duration-500">
                                    FUTUR
                                </span>

                                {/* I - Purple to Pink (with Bulb) */}
                                <div className="relative flex flex-col items-center">
                                    {/* Bulb */}
                                    <motion.div
                                        animate={{
                                            filter: ['drop-shadow(0 0 15px rgba(253,224,71,0.6))', 'drop-shadow(0 0 25px rgba(253,224,71,0.9))', 'drop-shadow(0 0 15px rgba(253,224,71,0.6))']
                                        }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute bottom-[80%] left-1/2 -translate-x-1/2 mb-1 md:mb-2 w-max"
                                    >
                                        <Lightbulb className="w-8 h-8 md:w-16 md:h-16 text-yellow-400 fill-yellow-400" strokeWidth={2} />
                                    </motion.div>

                                    {/* The Letter i (lowercase dotless) */}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-pink-500 filter drop-shadow-xl text-[0.75em] md:text-[0.75em] font-black transition-all duration-500">
                                        ı
                                    </span>
                                </div>

                                {/* X 2K26 - Pink to Orange */}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-orange-500 filter drop-shadow-xl transition-all duration-500">
                                    X 2K26
                                </span>
                            </h1>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 mb-2"
                            />

                            <p className="text-sm md:text-xl font-bold tracking-[0.8em] text-white/60 uppercase text-center mt-2 mix-blend-overlay">
                                Innovate. Compete.
                            </p>
                        </motion.div>

                        {/* Subheading */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light tracking-wide"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            National Level Technical Symposium organized by <span className="text-white font-medium">Arjun College of Technology</span>.
                            Unleash your potential in a futuristic arena of technology.
                        </motion.p>

                        {/* Countdown Timer */}
                        <motion.div variants={itemVariants} className="mb-12">
                            <Countdown />
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/events" className="btn-primary group relative overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    Explore Events
                                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                            <Link to="/contact" className="btn-outline group relative overflow-hidden">
                                <span className="relative z-10">Contact Us</span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
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
            <section className="py-20 border-y relative gradient-overlay" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="section-container relative z-10">
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
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    className="text-center p-6 rounded-2xl glass-strong gradient-border hover:neon-glow transition-all duration-300 cursor-default"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'var(--accent-gradient)' }}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text font-tech">{stat.value}</div>
                                    <div className="font-medium tracking-wide" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
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
                    <h2 className="heading-lg gradient-text mb-4 font-tech gradient-accent pb-4">Why FuturiX?</h2>
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
                                whileHover={{ y: -10 }}
                                className="glass-strong rounded-3xl p-8 gradient-border hover:neon-glow transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.8, type: "spring" }}
                                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                                    style={{ background: 'var(--accent-gradient)' }}
                                >
                                    <Icon className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4 font-tech" style={{ color: 'var(--text-primary)' }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Brochure Section */}
            <section className="py-20 border-t relative overflow-hidden" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="section-container text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center space-x-2 badge-primary mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Official Documentation</span>
                        </div>
                        <h2 className="heading-lg gradient-text mb-6 font-tech">Event Brochure</h2>
                        <p className="text-xl max-w-2xl mx-auto mb-12" style={{ color: 'var(--text-secondary)' }}>
                            Get all the details about events, rules, and schedules in our comprehensive brochure.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="max-w-4xl mx-auto glass-strong p-2 rounded-3xl overflow-hidden relative shadow-2xl"
                        >
                            {/* Brochure Image Preview */}
                            <div className="w-full rounded-2xl flex flex-col items-center justify-center relative overflow-hidden bg-black/40 border border-white/5">
                                <img
                                    src={`${import.meta.env.BASE_URL}FuturiX.png`}
                                    alt="FuturiX 2026 Brochure"
                                    className="w-full h-auto object-cover opacity-90 transition-opacity duration-300"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
