import { type ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Sidebar />
            <main className="main-content">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {children}
                </div>
            </main>
        </>
    );
}
