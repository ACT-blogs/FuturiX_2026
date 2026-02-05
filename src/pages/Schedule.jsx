import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Schedule = () => {
    const schedule = [
        {
            time: '08:30 AM',
            title: 'Registration & Check-in',
            location: 'Main Lobby',
            type: 'general',
            description: 'Verification of IDs and kit distribution'
        },
        {
            time: '09:30 AM',
            title: 'Inauguration',
            location: 'Auditorium',
            type: 'general',
            description: 'Opening ceremony and keynote address'
        },
        {
            time: '10:30 AM',
            title: 'Technical Events Start',
            location: 'Respective Venues',
            type: 'technical',
            description: 'Round 1 of all technical competitions'
        },
        {
            time: '01:00 PM',
            title: 'Lunch Break',
            location: 'Food Court',
            type: 'break',
        },
        {
            time: '02:00 PM',
            title: 'Final Rounds',
            location: 'Respective Venues',
            type: 'technical',
            description: 'Finals of Code Rush, Hackathons, and Presentations'
        },
        {
            time: '04:30 PM',
            title: 'Valedictory & Prize Distribution',
            location: 'Auditorium',
            type: 'general',
            description: 'Awarding winners and closing remarks'
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase border border-primary/30 rounded-full bg-primary/10">
                        February 21, 2026
                    </span>
                    <h1 className="heading-lg gradient-text mb-6">Event Schedule</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A packed day of innovation, competition, and celebration.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {schedule.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-12 md:gap-8">
                                <div className="hidden md:block md:col-span-3 text-right pt-1">
                                    <h3 className="text-xl font-bold text-primary">{item.time}</h3>
                                </div>

                                <div className="absolute left-0 top-0 bottom-0 md:relative md:col-span-1 md:flex md:justify-center">
                                    <div className="h-full w-px bg-white/10 absolute left-2 md:left-1/2 top-2"></div>
                                    <div className={`relative z-10 w-4 h-4 rounded-full border-2 ${item.type === 'break' ? 'border-gray-500 bg-gray-900' :
                                            item.type === 'technical' ? 'border-primary bg-primary' :
                                                'border-secondary bg-secondary'
                                        } mt-2`}></div>
                                </div>

                                <div className="md:col-span-8 pb-8">
                                    <div className="md:hidden mb-2">
                                        <h3 className="text-xl font-bold text-primary">{item.time}</h3>
                                    </div>
                                    <div className="glass p-6 rounded-xl hover:bg-white/10 transition-colors">
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <div className="flex items-center text-gray-400 text-sm mb-3">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {item.location}
                                        </div>
                                        {item.description && (
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Schedule;
