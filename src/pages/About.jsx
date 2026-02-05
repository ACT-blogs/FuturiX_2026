import { motion } from 'framer-motion';
import { Target, Eye, Award, Lightbulb, Users2, Rocket } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Encouraging creative thinking and out-of-the-box solutions'
        },
        {
            icon: Users2,
            title: 'Collaboration',
            description: 'Fostering teamwork and knowledge sharing among participants'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Striving for the highest standards in all our events'
        },
        {
            icon: Rocket,
            title: 'Impact',
            description: 'Creating real-world solutions that make a difference'
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="heading-lg gradient-text mb-6">About Futurix 2K26</h1>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        A National-level Technical Symposium that brings together the brightest minds
                        to innovate, compete, and shape the future of technology
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass p-8 rounded-2xl">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                To create a platform where innovation thrives, where students from diverse
                                engineering backgrounds come together to showcase their talents, learn from
                                industry experts, and build solutions that address real-world challenges.
                                Futurix 2K26 aims to be the catalyst that transforms ideas into impactful innovations.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass p-8 rounded-2xl">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-secondary" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                To organize a world-class technical symposium that provides students with
                                opportunities to compete in cutting-edge technical challenges, attend enriching
                                workshops, network with industry professionals, and gain exposure to the latest
                                technological advancements. We strive to nurture the next generation of innovators
                                and problem-solvers.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What Makes Us Unique */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-md gradient-text mb-4">What Makes Futurix Unique?</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        We're not just another technical fest. Here's what sets us apart.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Diverse Event Portfolio',
                            description: 'From AI challenges to robotics, web development to circuit design - events spanning all engineering domains',
                            gradient: 'from-primary to-primary-600'
                        },
                        {
                            title: 'Industry Integration',
                            description: 'Real-world problem statements, industry mentors, and opportunities to connect with leading tech companies',
                            gradient: 'from-secondary to-secondary-600'
                        },
                        {
                            title: 'Hands-on Workshops',
                            description: 'Practical workshops on emerging technologies like 3D printing, renewable energy, and modern surveying',
                            gradient: 'from-primary to-secondary'
                        },
                        {
                            title: 'Substantial Prizes',
                            description: 'Attractive prize pools totaling ₹2,50,000+ across all events to reward excellence',
                            gradient: 'from-secondary to-primary'
                        },
                        {
                            title: 'Hybrid Format',
                            description: 'Perfect mix of technical competitions, non-technical events, and learning workshops',
                            gradient: 'from-primary to-primary-700'
                        },
                        {
                            title: 'Department Showcase',
                            description: 'Every department gets to shine with dedicated events highlighting their unique expertise',
                            gradient: 'from-secondary to-secondary-700'
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card group"
                        >
                            <div className={`w-full h-2 bg-gradient-to-r ${feature.gradient} rounded-t-xl mb-4 -mt-6 -mx-6`} />
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Core Values */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-md gradient-text mb-4">Our Core Values</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        The principles that guide everything we do at Futurix
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-6 rounded-xl text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 
                            rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <value.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                            <p className="text-gray-400 text-sm">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative glass p-12 rounded-2xl text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
                    <div className="relative z-10">
                        <h2 className="heading-md text-white mb-4">Join the Innovation Revolution</h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Be part of Futurix 2K26 and experience the future of technology, today
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/events" className="btn-primary">
                                Explore Events
                            </a>
                            <a href="/register" className="btn-secondary">
                                Register Now
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
