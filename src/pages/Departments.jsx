import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Network, Cpu, Zap, Cog, Building2, ArrowRight } from 'lucide-react';
import { departments, getEventsByDepartment } from '../data/eventsData';

const iconMap = {
    Code2,
    Network,
    Cpu,
    Zap,
    Cog,
    Building2,
};

const colorClasses = {
    primary: {
        bg: 'bg-primary/10',
        border: 'border-primary/30',
        text: 'text-primary',
        dot: 'bg-primary',
        gradient: 'from-primary/10 to-primary/5',
    },
    secondary: {
        bg: 'bg-secondary/10',
        border: 'border-secondary/30',
        text: 'text-secondary',
        dot: 'bg-secondary',
        gradient: 'from-secondary/10 to-secondary/5',
    },
};

const Departments = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="heading-lg gradient-text mb-6">Departments</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore events organized by each department of Arjun College of Technology
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {departments.map((dept, index) => {
                        const Icon = iconMap[dept.icon];
                        const eventCount = getEventsByDepartment(dept.id).length;
                        const colors = colorClasses[dept.color];

                        return (
                            <motion.div
                                key={dept.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="card-hover group"
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className={`w-20 h-20 mx-auto ${colors.bg} border-2 ${colors.border} 
                                rounded-2xl flex items-center justify-center group-hover:scale-110 
                                transition-transform duration-300`}>
                                        <Icon className={`w-10 h-10 ${colors.text}`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {dept.name}
                                    </h3>

                                    {/* Event Count */}
                                    <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/5 rounded-lg">
                                        <div className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse`} />
                                        <span className="text-gray-300 text-sm font-medium">
                                            {eventCount} Event{eventCount !== 1 ? 's' : ''}
                                        </span>
                                    </div>

                                    {/* View Events Button */}
                                    <Link
                                        to={`/events?dept=${dept.id}`}
                                        className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 
                             bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 
                             rounded-lg transition-all duration-300 group/btn"
                                    >
                                        <span className="text-sm font-medium text-gray-300 group-hover/btn:text-white">
                                            View Events
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-xl blur-xl`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center glass p-8 rounded-2xl"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Can't decide? Explore all events
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Browse through our complete list of technical competitions, non-technical events, and workshops
                    </p>
                    <Link to="/events" className="btn-primary">
                        View All Events
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Departments;
