import React, { useState } from 'react';
import { Camera, ScanLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [isDragging, setIsDragging] = useState(false);



    return (
        <div className="space-y-8 mt-4">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">
                    Heal Your <span className="text-primary">Plants</span>
                </h1>
                <p className="text-gray-600">
                    Upload a photo of your plant to instantly identify pests and get expert solutions.
                </p>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="plant-upload"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            const url = URL.createObjectURL(file);
                            navigate('/analysis', { state: { image: url } });
                        }
                    }}
                />
                <Card
                    className={`border-2 border-dashed transition-colors cursor-pointer flex flex-col items-center justify-center py-16 space-y-4 group
            ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50 hover:bg-white/80'}`}
                    onClick={() => document.getElementById('plant-upload')?.click()}
                    // Implement drag handlers to satisfy used variable and UX
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        const file = e.dataTransfer.files?.[0];
                        if (file) {
                            const url = URL.createObjectURL(file);
                            navigate('/analysis', { state: { image: url } });
                        }
                    }}
                >
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="relative bg-white p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Camera className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-accent text-white p-1.5 rounded-full shadow-sm">
                            <ScanLine className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="text-center space-y-1">
                        <h3 className="font-semibold text-gray-900">Take a photo</h3>
                        <p className="text-sm text-gray-500">or upload from gallery</p>
                    </div>
                </Card>
            </motion.div>

            <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 ml-1">Recent Diagnoses</h3>
                <div className="grid grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                        <div key={i} className="aspect-square bg-white rounded-2xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow cursor-default">
                            <img
                                src={`https://images.unsplash.com/photo-1596386461350-326ea75b3b64?auto=format&fit=crop&q=80&w=400`}
                                alt="Plant"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                                <span className="text-white text-xs font-medium">Healthy Rose</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
