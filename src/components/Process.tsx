import { ClipboardList, Search, FileCheck } from 'lucide-react';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: ClipboardList,
        title: "1. Input Needs",
        description: "Complete a simple questionnaire about your lifestyle, budget, and driving habits."
    },
    {
        icon: Search,
        title: "2. Expert Analysis",
        description: "Our experts analyze the market to find the best 3-5 vehicles that match your criteria, not dealership quotas."
    },
    {
        icon: FileCheck,
        title: "3. Final Report",
        description: "Receive a comprehensive report with pros, cons, and reliable buying advice."
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-slate-600">Streamlined for your convenience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <Card className="h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-8xl leading-none select-none transition-transform group-hover:scale-110 duration-500">
                                    {index + 1}
                                </div>
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-brand/10 text-brand shadow-sm">
                                    <step.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
