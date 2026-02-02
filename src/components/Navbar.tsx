import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false);

        if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    const navLinks = [
        { name: 'How It Works', id: 'process' },
        { name: 'Pricing', id: 'pricing' },
        { name: 'Reviews', id: 'reviews' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <>
            <nav className={clsx(
                'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
                isScrolled ? 'py-4 bg-slate-100 backdrop-blur-xl border-b border-slate-200/50' : 'py-6 bg-[#e1e5f4]'
            )}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <button
                        onClick={handleScrollTo('top')}
                        className="hover:opacity-80 transition-opacity"
                    >
                        <img
                            src="src/CMA-Logo.png"
                            alt="Car Match Advisor Logo"
                            className="h-10 w-auto"
                        />
                    </button>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={handleScrollTo(link.id)}
                                className="text-sm font-medium text-slate-600 hover:text-brand transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                        <Button variant="primary" className="px-6 py-2 text-sm" onClick={handleScrollTo('pricing')}>
                            Start Now
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-30 bg-white pt-32 px-6 pb-12 flex flex-col md:hidden"
                    >
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                onClick={handleScrollTo(link.id)}
                                className="text-4xl font-bold text-slate-900 mb-6 text-left"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.4 } }}
                            className="mt-auto"
                        >
                            <Button className="w-full" onClick={handleScrollTo('pricing')}>
                                Start Your Match
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
