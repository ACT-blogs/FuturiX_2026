import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaMicrophone, FaLaptopCode, FaCoffee, FaTrophy, FaLightbulb } from 'react-icons/fa';

const Schedule = () => {
    const schedule = [
        {
            day: 'February 21, 2026',
            date: 'Friday',
            sessions: [
                {
                    time: '08:00 AM - 09:00 AM',
                    title: 'Registration & Check-in',
                    location: 'Main Lobby',
                    type: 'general',
                    icon: FaCalendarAlt
                },
                {
                    time: '09:00 AM - 10:00 AM',
                    title: 'Inaugural Ceremony',
                    location: 'Main Auditorium',
                    type: 'keynote',
                    icon: FaMicrophone
                },
                {
                    time: '10:00 AM - 10:30 AM',
                    title: 'Keynote Speech',
                    location: 'Main Auditorium',
                    description: 'Future of AI and Innovation - Industry Expert',
                    type: 'keynote',
                    icon: FaLightbulb
                },
                {
                    time: '10:30 AM - 11:00 AM',
                    title: 'Networking Break',
                    location: 'Cafeteria',
                    type: 'break',
                    icon: FaCoffee
                },
                {
                    time: '11:00 AM - 01:00 PM',
                    title: 'Technical Events - Session 1',
                    location: 'Various Labs',
                    description: 'Data Science Challenge, Code Sprint, Web Dev Challenge, FinTech Innovation',
                    type: 'event',
                    icon: FaLaptopCode
                },
                {
                    time: '01:00 PM - 02:00 PM',
                    title: 'Lunch Break',
                    location: 'Food Court',
                    type: 'break',
                    icon: FaCoffee
                },
                {
                    time: '02:00 PM - 04:00 PM',
                    title: 'Technical Events - Session 2',
                    location: 'Various Labs',
                    description: 'Deep Learning Challenge, Big Data Analytics, Cybersecurity CTF, Business Analytics',
                    type: 'event',
                    icon: FaLaptopCode
                },
                {
                    time: '04:00 PM - 04:30 PM',
                    title: 'Tea Break',
                    location: 'Cafeteria',
                    type: 'break',
                    icon: FaCoffee
                },
                {
                    time: '04:30 PM - 05:30 PM',
                    title: 'Non-Technical Events & Finals',
                    location: 'Various Venues',
                    description: 'Tech Quiz, AI Ethics Debate, Case Studies, Startup Pitch',
                    type: 'event',
                    icon: FaTrophy
                },
                {
                    time: '05:30 PM - 06:00 PM',
                    title: 'Expo & Project Showcase',
                    location: 'Exhibition Hall',
                    type: 'expo',
                    icon: FaLightbulb
                },
                {
                    time: '06:00 PM - 07:00 PM',
                    title: 'Prize Distribution & Closing Ceremony',
                    location: 'Main Auditorium',
                    type: 'keynote',
                    icon: FaTrophy
                }
            ],
        },
    ];

    const typeColors = {
        general: 'border-gray-500 bg-gray-500/10 text-gray-400',
        keynote: 'border-primary bg-primary/10 text-primary',
        event: 'border-secondary bg-secondary/10 text-secondary',
        break: 'border-yellow-500 bg-yellow-500/10 text-yellow-500',
        expo: 'border-purple-500 bg-purple-500/10 text-purple-500',
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="heading-lg gradient-text mb-6">Event Schedule</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        A full day packed with competitions, networking, and innovation on <span className="text-primary font-bold">February 21, 2026</span>
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {schedule.map((day, dayIndex) => (
                        <div key={dayIndex} className="relative">
                            {/* Central Line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 md:-translate-x-1/2" />

                            <div className="space-y-12">
                                {day.sessions.map((session, index) => {
                                    const Icon = session.icon;
                                    const isLeft = index % 2 === 0;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className={`relative flex items-center md:justify-between ${isLeft ? 'md:flex-row-reverse' : ''
                                                }`}
                                        >
                                            {/* Content Card */}
                                            <div className="ml-12 md:ml-0 md:w-[45%]">
                                                <div className={`glass p-6 rounded-2xl border-l-4 ${typeColors[session.type]} hover:bg-white/5 transition-colors duration-300`}>
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className={`flex items-center space-x-2 text-sm font-semibold ${typeColors[session.type].split(' ')[2]}`}>
                                                            <FaClock className="w-4 h-4" />
                                                            <span>{session.time}</span>
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white mb-2">{session.title}</h3>
                                                    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                                                        <FaMapMarkerAlt className="w-4 h-4" />
                                                        <span>{session.location}</span>
                                                    </div>
                                                    {session.description && (
                                                        <p className="text-gray-400 text-sm border-t border-white/5 pt-2 mt-2">
                                                            {session.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Center Dot */}
                                            <div className="absolute left-4 md:left-1/2 p-1 bg-dark rounded-full border-2 border-primary z-10 md:-translate-x-1/2 transform -translate-x-1/2 mt-1.5 md:mt-0">
                                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                            </div>

                                            {/* Spacer for opposite side */}
                                            <div className="hidden md:block md:w-[45%]" />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Notes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 max-w-4xl mx-auto glass p-8 rounded-2xl border border-white/10"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <FaLightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                        Important Notes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Please arrive at least 30 minutes before your scheduled event',
                            'Carry your college ID and registration confirmation',
                            'Specific event timings and venues will be updated on the day',
                            'Lunch will be provided for all registered participants'
                        ].map((note, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                                <span className="text-secondary mt-1">•</span>
                                <span className="text-gray-300">{note}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Schedule;
