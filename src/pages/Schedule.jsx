import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Schedule = () => {
    const schedule = [
        {
            day: 'Day 1 - March 15, 2026',
            date: 'Friday',
            sessions: [
                {
                    time: '08:00 AM - 09:00 AM',
                    title: 'Registration & Check-in',
                    location: 'Main Lobby',
                    type: 'general',
                },
                {
                    time: '09:00 AM - 10:00 AM',
                    title: 'Inaugural Ceremony',
                    location: 'Main Auditorium',
                    type: 'keynote',
                },
                {
                    time: '10:00 AM - 10:30 AM',
                    title: 'Keynote Speech',
                    location: 'Main Auditorium',
                    description: 'Future of AI and Innovation - Industry Expert',
                    type: 'keynote',
                },
                {
                    time: '10:30 AM - 11:00 AM',
                    title: 'Networking Break',
                    location: 'Cafeteria',
                    type: 'break',
                },
                {
                    time: '11:00 AM - 01:00 PM',
                    title: 'Technical Events - Session 1',
                    location: 'Various Labs',
                    description: 'Code Rush, Web Weaver, Cyber Hunt, Circuit Master, CAD Wars',
                    type: 'event',
                },
                {
                    time: '01:00 PM - 02:00 PM',
                    title: 'Lunch Break',
                    location: 'Cafeteria',
                    type: 'break',
                },
                {
                    time: '02:00 PM - 04:00 PM',
                    title: 'Technical Events - Session 2',
                    location: 'Various Labs',
                    description: 'AI Challenge, Database Derby, Robo Race, Power Grid Challenge',
                    type: 'event',
                },
                {
                    time: '04:00 PM - 04:30 PM',
                    title: 'Tea Break',
                    location: 'Cafeteria',
                    type: 'break',
                },
                {
                    time: '04:30 PM - 06:30 PM',
                    title: 'Workshop Session 1',
                    location: 'Workshop Halls',
                    description: '3D Printing & Renewable Energy Workshops',
                    type: 'workshop',
                },
            ],
        },
        {
            day: 'Day 2 - March 16, 2026',
            date: 'Saturday',
            sessions: [
                {
                    time: '08:30 AM - 09:00 AM',
                    title: 'Morning Registration',
                    location: 'Main Lobby',
                    type: 'general',
                },
                {
                    time: '09:00 AM - 11:00 AM',
                    title: 'Non-Technical Events',
                    location: 'Various Venues',
                    description: 'Tech Quiz, IT Treasure Hunt, Paper Presentations, Urban Planning',
                    type: 'event',
                },
                {
                    time: '11:00 AM - 11:30 AM',
                    title: 'Coffee Break',
                    location: 'Cafeteria',
                    type: 'break',
                },
                {
                    time: '11:30 AM - 01:30 PM',
                    title: 'Workshop Session 2',
                    location: 'Workshop Halls',
                    description: 'Modern Surveying Workshop',
                    type: 'workshop',
                },
                {
                    time: '01:30 PM - 02:30 PM',
                    title: 'Lunch Break',
                    location: 'Cafeteria',
                    type: 'break',
                },
                {
                    time: '02:30 PM - 04:30 PM',
                    title: 'Finals & Competitions',
                    location: 'Various Labs',
                    description: 'Final rounds of major technical events',
                    type: 'event',
                },
                {
                    time: '04:30 PM - 05:00 PM',
                    title: 'Expo & Project Showcase',
                    location: 'Exhibition Hall',
                    type: 'expo',
                },
                {
                    time: '05:00 PM - 06:30 PM',
                    title: 'Prize Distribution & Closing Ceremony',
                    location: 'Main Auditorium',
                    type: 'keynote',
                },
            ],
        },
    ];

    const typeColors = {
        general: 'border-gray-500 bg-gray-500/10',
        keynote: 'border-primary bg-primary/10',
        event: 'border-secondary bg-secondary/10',
        workshop: 'border-green-500 bg-green-500/10',
        break: 'border-yellow-500 bg-yellow-500/10',
        expo: 'border-purple-500 bg-purple-500/10',
    };

    const typeLabels = {
        general: 'General',
        keynote: 'Keynote',
        event: 'Competition',
        workshop: 'Workshop',
        break: 'Break',
        expo: 'Exhibition',
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="heading-lg gradient-text mb-6">Event Schedule</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Two days packed with competitions, workshops, and networking opportunities
                    </p>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        {Object.entries(typeLabels).map(([key, label]) => (
                            <div key={key} className="flex items-center space-x-2">
                                <div className={`w-3 h-3 rounded-full ${typeColors[key]} border-2`} />
                                <span className="text-gray-400">{label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Schedule Timeline */}
                <div className="space-y-12">
                    {schedule.map((day, dayIndex) => (
                        <motion.div
                            key={day.day}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
                        >
                            {/* Day Header */}
                            <div className="glass p-6 rounded-2xl mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-1">{day.day}</h2>
                                        <p className="text-gray-400">{day.date}</p>
                                    </div>
                                    <Calendar className="w-12 h-12 text-primary" />
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

                                {/* Sessions */}
                                <div className="space-y-6">
                                    {day.sessions.map((session, sessionIndex) => (
                                        <motion.div
                                            key={sessionIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: sessionIndex * 0.05 }}
                                            className="relative pl-20"
                                        >
                                            {/* Timeline Dot */}
                                            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-dark border-2 border-primary flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            </div>

                                            {/* Session Card */}
                                            <div className={`card border-l-4 ${typeColors[session.type]}`}>
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                                    <div>
                                                        <div className="flex items-center space-x-2 mb-2">
                                                            <Clock className="w-4 h-4 text-primary" />
                                                            <span className="text-sm font-semibold text-primary">
                                                                {session.time}
                                                            </span>
                                                            <span className="badge text-xs px-2 py-0.5">
                                                                {typeLabels[session.type]}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white">
                                                            {session.title}
                                                        </h3>
                                                    </div>
                                                    <div className="flex items-center space-x-2 mt-2 md:mt-0 text-gray-400 text-sm">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{session.location}</span>
                                                    </div>
                                                </div>
                                                {session.description && (
                                                    <p className="text-gray-400 text-sm mt-2">
                                                        {session.description}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Important Notes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 glass p-8 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Important Notes</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Please arrive at least 30 minutes before your scheduled event</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Carry your college ID and registration confirmation at all times</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Specific event timings and venues will be updated on the day of the event</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Workshop registrations are on a first-come, first-served basis</span>
                        </li>
                    </ul>
                </motion.div>
            </section>
        </div>
    );
};

export default Schedule;
