import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Pricing() {
    const [extraCar, setExtraCar] = useState(false);

    const plans = [
        {
            name: 'Standard',
            price: 19.99,
            description: 'Perfect for those who need a focused shortlist.',
            features: [
                '3-Car Personalized Shortlist',
                'Pros & Cons Analysis',
                'Ownership Cost Estimates',
                'Email Report Delivery'
            ],
            extraCarPrice: 6.60,
            highlight: false
        },
        {
            name: 'Premium',
            price: 49.99,
            description: 'Comprehensive support from start to finish.',
            features: [
                '5-Car Personalized Shortlist',
                'In-depth Safety & Reliability Data',
                '3 Days of Follow-up Support',
                'Direct Expert Phone Consultation',
                'Dealership Negotiation Tips'
            ],
            extraCarPrice: 9.99,
            highlight: true
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-4">
                        Simple, Transparent Pricing.
                    </h2>
                    <p className="text-lg text-slate-600">
                        No hidden fees. Just expert advice.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
                    {plans.map((plan, index) => {
                        const finalPrice = extraCar ? (plan.price + plan.extraCarPrice).toFixed(2) : plan.price.toFixed(2);

                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full lg:w-1/2 flex"
                            >
                                <Card className={clsx(
                                    "h-full relative transition-all duration-300 bg-stone-100",
                                    plan.highlight ? "border-brand ring-2 ring-brand/20 shadow-2xl" : ""
                                )}>
                                    {plan.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#003579] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg z-20 relative whitespace-nowrap">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                        <p className="text-slate-500 text-sm h-10">{plan.description}</p>
                                    </div>

                                    <div className="mb-8 p-6 bg-white border border-stone-200 rounded-xl">
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-5xl font-extrabold text-slate-900">£{finalPrice}</span>
                                            <span className="text-slate-500">/one-time</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id={`extra-${plan.name}`}
                                                checked={extraCar}
                                                onChange={(e) => setExtraCar(e.target.checked)}
                                                className="w-5 h-5 rounded border-slate-300 text-brand focus:ring-brand"
                                            />
                                            <label htmlFor={`extra-${plan.name}`} className="text-sm font-medium text-slate-700 cursor-pointer select-none">
                                                Add Extra Car Verification (+£{plan.extraCarPrice.toFixed(2)})
                                            </label>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600">
                                                <Check className="text-brand shrink-0" size={20} />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button variant={plan.highlight ? 'primary' : 'secondary'} className="w-full mt-auto">
                                        Choose {plan.name}
                                    </Button>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
