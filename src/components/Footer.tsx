export function Footer() {
    const handleScrollTo = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
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
    };

    return (
        <footer className="bg-slate-900 text-white pt-32 pb-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold tracking-tighter mb-6">CarMatchAdvisor.</h3>
                    <p className="text-slate-400 max-w-sm">
                        Independent, unbiased car buying advice. We work for you, not the dealerships.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-white">Company</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><a href="#about" onClick={(e) => handleScrollTo('about', e)} className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
                        <li><a href="#process" onClick={(e) => handleScrollTo('process', e)} className="hover:text-white transition-colors cursor-pointer">How It Works</a></li>
                        <li><a href="#pricing" onClick={(e) => handleScrollTo('pricing', e)} className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-white">Support</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><a href="mailto:hello@carmatchadvisor.com" className="hover:text-white transition-colors">hello@carmatchadvisor.com</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Watermark */}
            <div className="absolute bottom-[-5vw] left-0 w-full text-center pointer-events-none opacity-5">
                <span className="text-[15vw] font-black tracking-tighter leading-none text-white whitespace-nowrap">
                    ADVISOR
                </span>
            </div>
        </footer>
    );
}
