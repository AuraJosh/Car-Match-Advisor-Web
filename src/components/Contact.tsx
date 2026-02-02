import { Button } from './ui/Button';

export function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to find your perfect car?</h2>
                <p className="text-xl text-slate-400 mb-12">
                    Start the process today. Tell us a bit about what you're looking for.
                </p>

                <form className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 text-left space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input type="text" className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none transition-all text-white placeholder:text-slate-500" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none transition-all text-white placeholder:text-slate-500" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Budget Range</label>
                        <select className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none transition-all text-slate-300">
                            <option>Under £10k</option>
                            <option>£10k - £20k</option>
                            <option>£20k - £35k</option>
                            <option>£35k - £50k</option>
                            <option>£50k+</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">What are your main needs?</label>
                        <textarea className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none transition-all min-h-[120px] text-white placeholder:text-slate-500" placeholder="Family SUV, efficient commuter, fun weekend car, etc..."></textarea>
                    </div>

                    <Button className="w-full">Get Started</Button>
                </form>
            </div>
        </section>
    );
}
