import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-slate-600 mb-6">
                        Independent. Unbiased. Expert.
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                        Expert Car-Buying <br className="hidden md:block" />
                        <span className="text-slate-500">Advice Made Simple.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Pay once, get it done right. We provide professional, unbiased vehicle procurement advice to save you time and money.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                        Start Now
                    </Button>
                    <Button variant="secondary" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
                        How It Works
                    </Button>
                </motion.div>
            </div>

            {/* Decorative Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-multiply opacity-50"></div>
        </section>
    );
}
