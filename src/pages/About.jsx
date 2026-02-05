import { motion } from 'framer-motion';
import { FaGraduationCap, FaHistory, FaBullseye, FaLightbulb } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="section-container mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="heading-lg gradient-text mb-6">About Futurix</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Futurix 2K26 is a national-level technical symposium that brings together the brightest minds
                        to showcase their skills, innovate, and compete in a dynamic environment.
                    </p>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="section-container mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: FaHistory,
                            title: 'Our Legacy',
                            description: 'With over a decade of excellence, Futurix has established itself as a premier technical symposium in the region.'
                        },
                        {
                            icon: FaBullseye,
                            title: 'Our Mission',
                            description: 'To foster innovation, technical expertise, and professional growth among engineering students through competition.'
                        },
                        {
                            icon: FaLightbulb,
                            title: 'Our Vision',
                            description: 'To create a platform where technology meets creativity, inspiring the next generation of engineers and innovators.'
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Institution Section */}
            <section className="section-container">
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                                <FaGraduationCap className="text-primary" />
                                <span className="text-sm font-semibold text-gray-300">Arjun College of Technology</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Excellence in Education & Innovation
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Arjun College of Technology is a premier institution dedicated to imparting quality technical education.
                                Our campus provides a conducive environment for learning, research, and holistic development.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-4xl font-bold text-primary mb-2">25+</h4>
                                    <p className="text-sm text-gray-400">Years of Excellence</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-secondary mb-2">50+</h4>
                                    <p className="text-sm text-gray-400">Industry Partners</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden glass border border-white/10 flex items-center justify-center bg-black/40">
                            {/* Placeholder for College Image - Using Icon for now */}
                            <FaGraduationCap className="w-32 h-32 text-gray-600/50" />
                            <p className="absolute bottom-4 text-gray-500 text-sm">Arjun College of Technology Campus</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
