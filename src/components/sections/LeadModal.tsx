import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LeadModal({ isOpen, onClose }: LeadModalProps) {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        quota: ""
    });

    // REPLACE THIS URL WITH YOUR ACTUAL WEBHOOK URL
    const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/zlExglQVuCGZpf4tyW9E/webhook-trigger/f73b3669-42ee-4128-85c7-b593d5ef4f86";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);

        try {
            if (WEBHOOK_URL) {
                await fetch(WEBHOOK_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                        submittedAt: new Date().toISOString(),
                        source: "Landing Page Consorcio"
                    }),
                });
            }
        } catch (error) {
            console.error("Erro ao enviar dados para o webhook:", error);
        } finally {
            // Always redirect to Thank You page, even if webhook fails (graceful degradation)
            setTimeout(() => {
                onClose();
                navigate("/obrigado");
                setStep(1);
            }, 1000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-slate-500" />
                        </button>

                        {step === 1 ? (
                            <div className="p-8 md:p-12 space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                                        Simulação Personalizada
                                    </h3>
                                    <p className="text-slate-500">
                                        Preencha os dados abaixo e Messias Pires entrará em contato com a melhor estratégia para você.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Seu Nome</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Ex: João Silva"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0086ff] transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Seu Telefone / WhatsApp</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="(00) 00000-0000"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0086ff] transition-all"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Valor da Cota de Interesse</label>
                                        <select
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0086ff] transition-all bg-white"
                                            value={formData.quota}
                                            onChange={(e) => setFormData({ ...formData, quota: e.target.value })}
                                        >
                                            <option value="">Selecione o valor...</option>
                                            <option value="120">Até R$ 120 mil</option>
                                            <option value="220">Até R$ 220 mil</option>
                                            <option value="350">Até R$ 350 mil</option>
                                            <option value="400">Mais de R$ 400 mil</option>
                                        </select>
                                    </div>

                                    <Button
                                        variant="magalu"
                                        size="xl"
                                        className="w-full text-lg shadow-xl shadow-blue-500/20"
                                        type="submit"
                                    >
                                        RECEBER MINHA SIMULAÇÃO
                                    </Button>
                                </form>
                            </div>
                        ) : (
                            <div className="p-8 md:p-12 text-center space-y-6">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-slate-900">Solicitação Enviada!</h3>
                                    <p className="text-slate-500">
                                        Messias Pires recebeu seus dados e entrará em contato em breve via WhatsApp.
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
