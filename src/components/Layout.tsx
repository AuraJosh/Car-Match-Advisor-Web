import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="relative min-h-screen w-full bg-white text-slate-900 selection:bg-[#003579] selection:text-white">
            {/* Noise Texture Overlay */}
            <div className="noise-bg"></div>

            <Navbar />

            <main className="relative z-10">
                {children}
            </main>

            <Footer />
        </div>
    );
}
