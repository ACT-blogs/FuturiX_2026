import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react';
import { getStats } from '../data/eventsData';

const Home = () => {
    const stats = getStats();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse-slow delay-1000" />
                </div>

                <div className="section-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
                            February 21, 2026
                        </span>
                        <h1 className="hero-title mb-6">
                            Innovate. Compete.
                            <br />
                            <span className="gradient-text">FuturiX_2026</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            National Level Technical Symposium organized by Arjun College of Technology.
                            Unleash your potential in a futuristic arena of technology.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/events" className="btn-primary w-full sm:w-auto group">
                                Explore Events
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="btn-outline w-full sm:w-auto">
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="section-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Total Events', value: stats.totalEvents, icon: Calendar },
                            { label: 'Departments', value: stats.departments, icon: Users },
                            { label: 'Prize Pool', value: stats.prizePool, icon: Trophy },
                            { label: 'Technical', value: stats.technicalEvents, icon: Zap },
                        ].map((stat, index) => {
                            // Helper component for icon
                            const Icon = stat.icon || Calendar;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Simple Zap icon component for the stats mapping fallback if needed
const Zap = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className={className}
    >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

export default Home;
