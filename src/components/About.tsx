import { ShieldCheck, Clock, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
    {
        icon: ShieldCheck,
        title: "Unbiased Advocacy",
        desc: "We work for you, not the dealership. No commission-based incentives."
    },
    {
        icon: Award,
        title: "Expert Knowledge",
        desc: "Decades of automotive industry experience applied to your specific needs."
    },
    {
        icon: Clock,
        title: "Time Efficiency",
        desc: "Save hours of research and negotiation time. We do the legwork."
    },
    {
        icon: Target,
        title: "Tailored Results",
        desc: "No generic lists. Every recommendation is hand-picked for your lifestyle."
    }
];

export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-white text-center">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
                    >
                        Why Choose CMA?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto"
                    >
                        Buying a car shouldn't be a battle. We believe in transparency, expertise, and putting the buyer first.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="text-left"
                        >
                            <div className="mb-4 inline-flex p-3 rounded-full bg-[#003579] text-white shadow-lg">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-left relative overflow-hidden"
                >
                    {/* Background Texture/Accent */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 max-w-4xl">
                        <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                            "At Car Match Advisor, our mission is to convert overwhelmed car buyers into confident owners. We strip away the dealership stress, the hours of endless research, and the uncertainty of commission-driven sales. We provide you with clear, data-backed choices so you can make the second-biggest purchase of your life with absolute peace of mind."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center font-bold text-white">
                                IB
                            </div>
                            <div>
                                <div className="font-bold">Isaac Buckley</div>
                                <div className="text-sm text-slate-400">Founder, Head Consultant</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
