import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowLeft,
    FaUsers,
    FaTrophy,
    FaCheckCircle,
    FaExclamationCircle,
    FaPhoneAlt,
    FaExternalLinkAlt,
    FaRegCalendarAlt,
    FaMapMarkerAlt
} from 'react-icons/fa';
import { getEventById, getDepartmentById, getCategoryById } from '../data/eventsData';

const EventDetails = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const event = getEventById(eventId);

    if (!event) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center glass p-12 rounded-2xl max-w-md mx-auto border border-white/10">
                    <FaExclamationCircle className="w-16 h-16 text-red-500 mx-auto mb-6 opacity-80" />
                    <h2 className="text-2xl font-bold text-white mb-2">Event Not Found</h2>
                    <p className="text-gray-400 mb-8">The event you're looking for doesn't exist.</p>
                    <Link to="/events" className="btn-primary">
                        Back to Events
                    </Link>
                </div>
            </div>
        );
    }

    const department = getDepartmentById(event.department);
    const category = getCategoryById(event.category);

    const categoryColors = {
        'technical': 'bg-primary/20 text-primary border-primary/20',
        'non-technical': 'bg-secondary/20 text-secondary border-secondary/20',
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
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-lg hover:bg-white/5 w-fit"
                    >
                        <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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
                            className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-300 border border-white/10">
                                        {department?.name}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[event.category]}`}>
                                        {category?.name}
                                    </span>
                                </div>

                                <h1 className="heading-md text-white mb-6">{event.name}</h1>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>

                        {/* Rules & Regulations */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/10"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <FaCheckCircle className="w-6 h-6 text-primary mr-3" />
                                Rules & Regulations
                            </h2>
                            <ul className="space-y-4">
                                {event.rules.map((rule, index) => (
                                    <li key={index} className="flex items-start space-x-3 group">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                        <span className="text-gray-300 leading-relaxed">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Requirements */}
                        {event.requirements && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="glass p-8 rounded-3xl border border-white/10"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <FaExclamationCircle className="w-6 h-6 text-secondary mr-3" />
                                    Requirements
                                </h2>
                                <ul className="space-y-4">
                                    {event.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start space-x-3 group">
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                            <span className="text-gray-300 leading-relaxed">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass p-6 rounded-3xl border border-white/10 sticky top-24"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Event Details</h3>

                            <div className="space-y-6">
                                {/* Team Size */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                        <FaUsers className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Team Size</p>
                                        <p className="text-white font-semibold mt-1">{event.teamSize}</p>
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                        <FaCheckCircle className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Eligibility</p>
                                        <p className="text-white font-semibold mt-1">{event.eligibility}</p>
                                    </div>
                                </div>

                                {/* Prize Pool */}
                                {event.prizePool && (
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                                            <FaTrophy className="w-5 h-5 text-yellow-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Rewards</p>
                                            <p className="text-lg font-bold text-yellow-400 mt-1">{event.prizePool}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Register Button */}
                                <div className="pt-4 mt-2">
                                    <Link to="/register" className="btn-primary w-full group justify-center text-center flex items-center">
                                        <span>Register Now</span>
                                        <FaExternalLinkAlt className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
                                className="glass p-6 rounded-3xl border border-white/10"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Event Coordinators</h3>
                                <div className="space-y-4">
                                    {event.coordinators.map((coordinator, index) => (
                                        <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <FaPhoneAlt className="w-3 h-3 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">{coordinator.name}</p>
                                                <a
                                                    href={`tel:${coordinator.phone}`}
                                                    className="text-sm text-gray-400 hover:text-primary transition-colors block mt-1"
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
