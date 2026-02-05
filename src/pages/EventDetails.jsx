import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Trophy, CheckCircle2, AlertCircle, Phone, ExternalLink } from 'lucide-react';
import { getEventById, getDepartmentById, getCategoryById } from '../data/eventsData';

const EventDetails = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const event = getEventById(eventId);

    if (!event) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center glass p-12 rounded-2xl max-w-md mx-4">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Event Not Found</h2>
                    <Link to="/events" className="btn-primary mt-6 inline-block">Back to Events</Link>
                </div>
            </div>
        );
    }

    const department = getDepartmentById(event.department);
    const category = getCategoryById(event.category);

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass p-8 rounded-2xl"
                        >
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/10">
                                    {department?.name}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category?.id === 'technical' ? 'bg-primary/20 text-primary border border-primary/20' : 'bg-secondary/20 text-secondary border border-secondary/20'}`}>
                                    {category?.name}
                                </span>
                            </div>
                            <h1 className="heading-md text-white mb-4">{event.name}</h1>
                            <p className="text-lg text-gray-300 leading-relaxed">{event.description}</p>
                        </motion.div>

                        <div className="glass p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <CheckCircle2 className="w-6 h-6 text-primary mr-2" />
                                Rules & Regulations
                            </h2>
                            <ul className="space-y-3">
                                {event.rules.map((rule, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {event.requirements && (
                            <div className="glass p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <AlertCircle className="w-6 h-6 text-secondary mr-2" />
                                    Requirements
                                </h2>
                                <ul className="space-y-3">
                                    {event.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start space-x-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Users className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-400">Team Size</p>
                                        <p className="text-white font-semibold">{event.teamSize}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Trophy className="w-5 h-5 text-yellow-500" />
                                    <div>
                                        <p className="text-sm text-gray-400">Prize Pool</p>
                                        <p className="text-white font-semibold">{event.prizePool}</p>
                                    </div>
                                </div>
                                <div className="border-t border-white/10 pt-4 mt-6">
                                    <p className="text-sm text-gray-400 mb-1">Eligibility</p>
                                    <p className="text-white font-medium">{event.eligibility}</p>
                                </div>
                                <Link to="/register" className="btn-primary w-full text-center block mt-6 group">
                                    Register Now
                                    <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {event.coordinators && event.coordinators.length > 0 && (
                            <div className="glass p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">Coordinators</h3>
                                <div className="space-y-3">
                                    {event.coordinators.map((c, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                            <div>
                                                <p className="text-white font-medium">{c.name}</p>
                                                <a href={`tel:${c.phone}`} className="text-sm text-primary hover:underline">{c.phone}</a>
                                            </div>
                                            <Phone className="w-4 h-4 text-gray-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
