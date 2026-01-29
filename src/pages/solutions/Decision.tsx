import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, AlertOctagon } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Decision: React.FC = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<'save' | 'remove' | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pb-24 space-y-6"
        >
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-500 mb-2">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                <span>Assess Viability</span>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-gray-900">Save or Remove?</h1>
                <p className="text-gray-600 mt-2">Evaluate if the plant can recover or if it poses a risk to others.</p>
            </div>

            <div className="space-y-4">
                {/* Save Option */}
                <Card
                    className={`cursor-pointer transition-all ${selected === 'save' ? 'ring-2 ring-primary border-primary' : 'hover:bg-white/60'}`}
                    onClick={() => setSelected('save')}
                >
                    <div className="flex items-start space-x-3 mb-3">
                        <div className="bg-green-100 p-2 rounded-full">
                            <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">It Can Be Saved</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 ml-2">
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span>Roots are strong and healthy (white/firm)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span>&gt; 50% leaves are still healthy</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span>Stem is not black or rotten</span>
                        </li>
                    </ul>
                </Card>

                {/* Remove Option */}
                <Card
                    className={`cursor-pointer transition-all ${selected === 'remove' ? 'ring-2 ring-red-500 border-red-500' : 'hover:bg-white/60'}`}
                    onClick={() => setSelected('remove')}
                >
                    <div className="flex items-start space-x-3 mb-3">
                        <div className="bg-red-100 p-2 rounded-full">
                            <X className="w-5 h-5 text-red-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Remove It</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 ml-2">
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                            <span>Entire plant looks weak/collapsed</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                            <span>Roots smell rotten or mushy</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                            <span>Pests are covering almost everything</span>
                        </li>
                    </ul>
                </Card>
            </div>

            {selected && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start space-x-3"
                >
                    <AlertOctagon className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <div className="text-sm text-blue-800">
                        {selected === 'save'
                            ? "Great! Prune the damaged parts and apply treatment. Ensure good sunlight."
                            : "It's best to discard this plant to protect the rest of your garden from infection."}
                    </div>
                </motion.div>
            )}

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 safe-bottom z-10">
                <div className="max-w-md mx-auto">
                    <Button
                        className="w-full"
                        onClick={() => navigate('/solution/step-3')}
                        icon={<ArrowRight className="w-4 h-4" />}
                    >
                        Next: Future Prevention
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default Decision;
