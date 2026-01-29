import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight, SprayCan } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const ImmediateAction: React.FC = () => {
    const navigate = useNavigate();

    const solutions = [
        {
            title: "Water Spray",
            description: "Use a strong water spray to remove pests from the leaves physically.",
            icon: <Droplets className="w-5 h-5 text-blue-500" />,
            bgClass: "bg-blue-50"
        },
        {
            title: "Mild Soap Solution",
            description: "Mix 1 litre water with 1 tsp liquid soap. Spray gently on affected areas.",
            icon: <SprayCan className="w-5 h-5 text-purple-500" />,
            bgClass: "bg-purple-50"
        },
        {
            title: "Neem Oil (Best)",
            description: "Mix 1 litre water with 3-5ml neem oil. Highly effective organic control.",
            icon: <LeafIcon className="w-5 h-5 text-emerald-500" />,
            bgClass: "bg-emerald-50",
            recommended: true
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pb-24 space-y-6"
        >
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-500 mb-2">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                <span>Immediate Action</span>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-gray-900">Stop the Damage</h1>
                <p className="text-gray-600 mt-2">Choose one of the following methods to control the pests immediately.</p>
            </div>

            <div className="space-y-4">
                {solutions.map((item, idx) => (
                    <Card key={idx} className={`relative overflow-hidden ${item.recommended ? 'border-2 border-emerald-500 ring-4 ring-emerald-500/10' : ''}`}>
                        {item.recommended && (
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                                Recommended
                            </div>
                        )}
                        <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg ${item.bgClass}`}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 safe-bottom z-10">
                <div className="max-w-md mx-auto">
                    <Button
                        className="w-full"
                        onClick={() => navigate('/solution/step-2')}
                        icon={<ArrowRight className="w-4 h-4" />}
                    >
                        Check Plant Viability
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

const LeafIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);

export default ImmediateAction;
