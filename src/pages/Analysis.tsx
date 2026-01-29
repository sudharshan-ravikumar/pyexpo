import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scan, AlertTriangle, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Analysis: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const image = location.state?.image || "https://images.unsplash.com/photo-1596386461350-326ea75b3b64?auto=format&fit=crop&q=80&w=400";
    const [status, setStatus] = useState<'scanning' | 'analyzing' | 'complete'>('scanning');

    useEffect(() => {
        // Simulate scanning process
        const scanTimer = setTimeout(() => setStatus('analyzing'), 2000);
        const completeTimer = setTimeout(() => setStatus('complete'), 4000);

        return () => {
            clearTimeout(scanTimer);
            clearTimeout(completeTimer);
        };
    }, []);

    if (status !== 'complete') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 text-center px-4">
                <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
                        <img src={image} alt="Scanning" className="w-full h-full object-cover opacity-50" />
                    </div>
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <Scan className="w-12 h-12 text-primary drop-shadow-md animate-pulse" />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {status === 'scanning' ? 'Scanning Image...' : 'Analyzing Health...'}
                    </h2>
                    <p className="text-gray-500">Checking for pests and diseases</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm">
                <div className="bg-white p-3 rounded-full shadow-sm">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Pest Attack Detected</h2>
                    <p className="text-red-600 font-medium">Severity: High</p>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 ml-1">Detected Issues</h3>
                <Card className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                        <img
                            src={image}
                            alt="Leaf damage"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">Leaf Damage</h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">Visible holes and yellowing pattern consistent with Aphids.</p>
                    </div>
                </Card>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 safe-bottom">
                <div className="max-w-md mx-auto">
                    <Button
                        className="w-full"
                        onClick={() => navigate('/solution/step-1')}
                        icon={<ArrowRight className="w-4 h-4" />}
                    >
                        Start Treatment Plan
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default Analysis;
