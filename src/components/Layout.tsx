import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 text-gray-800">
            <nav className="sticky top-0 z-50 glass-panel border-b border-white/20 px-4 py-3">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Leaf className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-bold text-lg text-gray-900">Plant Care</span>
                    </Link>

                    <div className="text-xs font-medium text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                        Beta
                    </div>
                </div>
            </nav>

            <main className="max-w-md mx-auto p-4 pb-20 animate-fade-in">
                {children}
            </main>
        </div>
    );
};

export default Layout;
