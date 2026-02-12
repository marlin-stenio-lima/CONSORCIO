import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export function ThankYou() {
    const navigate = useNavigate();

    useEffect(() => {
        // Track Lead event when user lands on Thank You page
        // @ts-ignore
        if (typeof window.fbq === 'function') {
            // @ts-ignore
            window.fbq('track', 'Lead');
        }
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 max-w-2xl w-full text-center space-y-10"
            >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                        Cadastro Recebido <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                            Com Sucesso!
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Obrigado por confiar no Consórcio Magalu. <br />
                        <span className="text-slate-900 font-bold">Messias Pires</span> já recebeu seus dados e entrará em contato em breve para apresentar a melhor estratégia para você.
                    </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <p className="text-blue-800 font-medium">
                        📱 Fique atento ao seu WhatsApp, o contato será feito por lá.
                    </p>
                </div>

                <div className="pt-4">
                    <Button
                        onClick={() => navigate("/")}
                        variant="outline"
                        size="xl"
                        className="w-full md:w-auto min-w-[200px]"
                    >
                        Voltar para o Início
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
