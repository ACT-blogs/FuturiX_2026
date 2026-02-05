import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="heading-lg gradient-text mb-8">About Futurix_2026</h1>
                    <div className="glass p-8 rounded-2xl text-left space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            Futurix 2K26 is a National Level Technical Symposium organized by Arjun College of Technology.
                            It brings together the brightest minds from across the country to compete, innovate, and showcase their technical prowess.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            With a wide array of technical and non-technical events, Futurix provides a platform for students
                            to demonstrate their skills in coding, robotics, circuit design, and more.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <h3 className="text-2xl font-bold text-primary mb-2">Innovation</h3>
                                <p className="text-sm text-gray-400">Pushing boundaries of technology</p>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <h3 className="text-2xl font-bold text-secondary mb-2">Excellence</h3>
                                <p className="text-sm text-gray-400">Pursuing highest standards</p>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <h3 className="text-2xl font-bold text-primary mb-2">Creativity</h3>
                                <p className="text-sm text-gray-400">Thinking outside the box</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
