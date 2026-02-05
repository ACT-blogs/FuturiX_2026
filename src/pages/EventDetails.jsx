import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Users,
    Trophy,
    CheckCircle2,
    AlertCircle,
    Phone,
    ExternalLink
} from 'lucide-react';
import { getEventById, getDepartmentById, getCategoryById } from '../data/eventsData';

const EventDetails = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const event = getEventById(eventId);

    if (!event) {
        return (
            <div className="min-h-screen pt-24 pb-16">
                <div className="section-container">
                    <div className="text-center glass p-12 rounded-2xl max-w-md mx-auto">
                        <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-2">Event Not Found</h2>
                        <p className="text-gray-400 mb-6">The event you're looking for doesn't exist.</p>
                        <Link to="/events" className="btn-primary">
                            Back to Events
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const department = getDepartmentById(event.department);
    const category = getCategoryById(event.category);

    const categoryColors = {
        'technical': 'badge-primary',
        'non-technical': 'badge-secondary',
        'workshop': 'badge-success',
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Events</span>
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="glass p-8 rounded-2xl"
                        >
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="badge bg-white/5 text-white border border-white/10">
                                    {department?.name}
                                </span>
                                <span className={categoryColors[event.category]}>
                                    {category?.name}
                                </span>
                            </div>

                            <h1 className="heading-md text-white mb-4">{event.name}</h1>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {event.description}
                            </p>
                        </motion.div>

                        {/* Rules & Regulations */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <CheckCircle2 className="w-6 h-6 text-primary mr-2" />
                                Rules & Regulations
                            </h2>
                            <ul className="space-y-3">
                                {event.rules.map((rule, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-300">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Requirements */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <AlertCircle className="w-6 h-6 text-secondary mr-2" />
                                Requirements
                            </h2>
                            <ul className="space-y-3">
                                {event.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-300">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass p-6 rounded-2xl sticky top-24"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Event Details</h3>

                            <div className="space-y-4">
                                {/* Team Size */}
                                <div className="flex items-start space-x-3">
                                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-400">Team Size</p>
                                        <p className="text-white font-semibold">{event.teamSize}</p>
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div className="border-t border-white/10 pt-4">
                                    <p className="text-sm text-gray-400 mb-1">Eligibility</p>
                                    <p className="text-white font-semibold">{event.eligibility}</p>
                                </div>

                                {/* Prize Pool */}
                                {event.prizePool && (
                                    <div className="border-t border-white/10 pt-4">
                                        <div className="flex items-start space-x-3">
                                            <Trophy className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm text-gray-400">Prize Pool</p>
                                                <p className="text-2xl font-bold text-primary">{event.prizePool}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Register Button */}
                                <div className="border-t border-white/10 pt-4">
                                    <Link to="/register" className="block text-center btn-primary w-full group">
                                        Register Now
                                        <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Coordinators */}
                        {event.coordinators && event.coordinators.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="glass p-6 rounded-2xl"
                            >
                                <h3 className="text-xl font-bold text-white mb-6">Event Coordinators</h3>
                                <div className="space-y-4">
                                    {event.coordinators.map((coordinator, index) => (
                                        <div key={index} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg">
                                            <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-white font-semibold">{coordinator.name}</p>
                                                <a
                                                    href={`tel:${coordinator.phone}`}
                                                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                                                >
                                                    {coordinator.phone}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
