import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaCalendarAlt, FaStar, FaUsers, FaArrowRight, FaCode, FaMicrochip, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="min-h-screen relative flex items-center justify-center pt-20">
                {/* Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />

                <div className="section-container text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 inline-block"
                    >
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                            February 21, 2026
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="heading-xl gradient-text mb-6"
                    >
                        FUTURIX 2K26
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        A National Level Technical Symposium organized by <br />
                        <span className="text-white font-semibold">Arjun College of Technology</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/register" className="btn-primary w-full sm:w-auto group">
                            <span>Register Now</span>
                            <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/events" className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-semibold transition-all w-full sm:w-auto flex items-center justify-center group">
                            <span>Explore Events</span>
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-primary rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Highlights */}
            <section className="py-20 bg-black/20">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: FaCalendarAlt, label: '1 Day', sub: 'Non-stop Action' },
                            { icon: FaCode, label: '15+ Events', sub: 'Tech & Non-Tech' },
                            { icon: FaUsers, label: '1000+', sub: 'Expected Participants' },
                            { icon: FaTrophy, label: 'Exciting', sub: 'Cash Prizes' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl text-center hover:bg-white/5 transition-colors group"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-1">{stat.label}</h3>
                                <p className="text-gray-400">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments Preview */}
            <section className="py-20">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-4">Our Departments</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Events organized by the leading departments of technology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: 'aids', name: 'AI & Data Science', icon: FaMicrochip, color: 'from-blue-500 to-cyan-500' },
                            { id: 'aiml', name: 'AI & Machine Learning', icon: FaCode, color: 'from-purple-500 to-pink-500' },
                            { id: 'cs', name: 'Computer Science', icon: FaLaptopCode, color: 'from-green-500 to-emerald-500' },
                            { id: 'csbs', name: 'CS & Business Systems', icon: FaChartLine, color: 'from-orange-500 to-red-500' },
                        ].map((dept, index) => (
                            <Link key={dept.id} to={`/events?dept=${dept.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                    <div className="absolute inset-0 backdrop-blur-3xl" />

                                    <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center text-center glass border border-white/10 group-hover:border-white/20">
                                        <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <dept.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                                        <span className="text-sm text-gray-400 group-hover:text-white transition-colors flex items-center">
                                            View Events <FaArrowRight className="ml-2 w-3 h-3" />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
