import { Card } from './ui/Card';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "First-time Buyer",
        content: "I was overwhelmed by all the choices. CMA narrowed it down to 3 perfect options. I bought the Mazda CX-5 they recommended and I love it.",
        rating: 5
    },
    {
        name: "Michael Ross",
        role: "Family SUV Hunt",
        content: "The breakdown of safety features was exactly what I needed. Saved me weeks of research. Worth every penny.",
        rating: 5
    },
    {
        name: "David Chen",
        role: "Commuter",
        content: "Unbiased advice is hard to find. These guys didn't push a specific brand, just what worked for my commute.",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section id="reviews" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Trusted by Drivers</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-slate-50 border-none shadow-lg">
                                <div className="flex gap-1 mb-4 text-brand">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="text-slate-700 italic mb-6">"{review.content}"</p>
                                <div>
                                    <div className="font-bold text-slate-900">{review.name}</div>
                                    <div className="text-sm text-slate-500">{review.role}</div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
