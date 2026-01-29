import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, Sun, Wind, Home } from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Prevention: React.FC = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pb-24 space-y-6"
        >
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-500 mb-2">
                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                <span>Prevention</span>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-gray-900">Stay Pest-Free</h1>
                <p className="text-gray-600 mt-2">Follow these simple rules preventing future outbreaks.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Card className="flex flex-col items-center text-center p-4">
                    <div className="bg-orange-100 p-3 rounded-full mb-3">
                        <Sun className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-sm">Sunlight</h3>
                    <p className="text-xs text-gray-500 mt-1">Ensure adequate light exposure</p>
                </Card>
                <Card className="flex flex-col items-center text-center p-4">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                        <Wind className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-sm">Airflow</h3>
                    <p className="text-xs text-gray-500 mt-1">Good circulation reduces dampness</p>
                </Card>
            </div>

            <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 ml-1">Routine Care</h3>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2.5 rounded-lg shrink-0">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900">Neem Oil Schedule</h4>
                        <p className="text-sm text-gray-600 mt-1">Spray once every 7-10 days as a preventive shield.</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start space-x-4">
                    <div className="bg-rose-100 p-2.5 rounded-lg shrink-0">
                        <ShieldCheck className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900">Companion Plants</h4>
                        <p className="text-sm text-gray-600 mt-1">Grow Tulsi, Marigold, or Mint nearby. They naturally repel pests.</p>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 safe-bottom z-10">
                <div className="max-w-md mx-auto">
                    <Button
                        className="w-full"
                        onClick={() => navigate('/')}
                        icon={<Home className="w-4 h-4" />}
                        variant='secondary'
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default Prevention;
