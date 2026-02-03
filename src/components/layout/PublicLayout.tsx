import { Outlet } from 'react-router-dom';
import { RadiantBackground } from '@/components/layout/RadiantBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <RadiantBackground />
            <Navbar />
            <main className="flex-1 pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
