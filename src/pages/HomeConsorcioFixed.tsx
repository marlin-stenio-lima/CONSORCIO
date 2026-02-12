import { motion } from "framer-motion";
import { useState } from "react";
import {
    Home,
    ShieldCheck,
    Clock,
    TrendingDown,
    TrendingUp,
    ArrowRight,
    ChevronDown,
    Play,
    PiggyBank,
    Users,
    BarChart3,
    Wallet
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { LeadModal } from "../components/sections/LeadModal";

// Animation Variants
const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export function HomeConsorcio() {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const openLeadModal = () => setIsLeadModalOpen(true);

    const benefits = [
        {
            icon: Home,
            title: "Compre o que quiser",
            description: "Casa, apartamento, terreno, construção ou reforma. Você decide onde e como morar.",
        },
        {
            icon: Clock,
            title: "Planejamento Inteligente",
            description: "Ideal para quem quer se programar para 2026 sem sufocar o orçamento familiar hoje.",
        },
        {
            icon: TrendingDown,
            title: "Mensalidades Previsíveis",
            description: "Fuja da instabilidade. Saiba exatamente quanto vai pagar do início ao fim.",
        },
        {
            icon: ShieldCheck,
            title: "Garantia Magalu",
            description: "Segurança de uma das maiores empresas do Brasil (Luiza Administradora de Consórcios).",
        },
    ];

    const steps = [
        {
            title: "A Consultoria",
            desc: "Você fala comigo (Messias). Entendemos seu orçamento e definimos o valor do crédito ideal."
        },
        {
            title: "A Adesão Digital",
            desc: "Fechamos o contrato de forma 100% segura e online. Sem filas de banco."
        },
        {
            title: "As Assembleias Mensais",
            desc: "Você participa todo mês concorrendo por sorteio e pode ofertar lances para antecipar sua vez."
        },
        {
            title: "A Conquista",
            desc: "Carta de crédito na mão! Você compra seu imóvel com poder de pagamento à vista."
        }
    ];

    const faqs = [
        {
            q: "Consórcio demora muito?",
            a: "O tempo vai passar de qualquer jeito. Você prefere chegar em 2026 com as chaves da sua casa ou apenas com recibos de aluguel? Além disso, com minha consultoria de lances, trabalhamos para acelerar esse processo."
        },
        {
            q: "É seguro fazer com a Magalu?",
            a: "Sim! O Consórcio Magalu é fiscalizado pelo Banco Central e tem décadas de tradição e entrega."
        },
        {
            q: "Preciso ter o nome limpo agora?",
            a: "Para aderir ao consórcio, a análise é flexível. A análise de crédito rigorosa ocorre apenas na liberação da carta (contemplação), te dando tempo para se organizar."
        }
    ];

    return (
        <div className="flex flex-col w-full bg-slate-100 selection:bg-[#0086ff]/20">
            <LeadModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />

            {/* 1. HERO SECTION - ENHANCED */}
            <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white/80 to-transparent z-10" />
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                            alt="Casa Moderna"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <div className="container relative z-20 px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="max-w-4xl space-y-10"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-5 py-2 bg-white/80 backdrop-blur-md text-[#0086ff] rounded-full font-bold text-sm tracking-wide border border-[#0086ff]/20 shadow-sm hover:shadow-md transition-all cursor-default">
                            <ShieldCheck className="w-5 h-5" />
                            CONSULTORIA ESPECIALIZADA MAGALU
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black leading-[1.1] text-slate-900 tracking-tight">
                            Sua Casa Própria <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0086ff] to-[#0060b9]">Sem Entrada e Sem Juros?</span> <br />
                            Com a Segurança Magalu é Possível.
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
                            Esqueça a burocracia e os juros altos. Com apenas <span className="font-bold text-[#0086ff]">R$ 380,00 mensais</span>, você inicia o projeto da sua casa própria com acompanhamento total do consultor Messias Pires.
                        </motion.p>

                        <motion.div variants={fadeIn} className="space-y-8 pt-4">
                            <Button
                                onClick={openLeadModal}
                                size="xl"
                                className="bg-[#f48c25] hover:bg-[#e07b1d] text-white text-xl px-12 py-8 rounded-full shadow-[0_20px_50px_-12px_rgba(244,140,37,0.5)] font-black tracking-tight w-full sm:w-auto transition-all hover:scale-105 active:scale-95"
                            >
                                QUERO UMA SIMULAÇÃO GRÁTIS
                            </Button>

                            <div className="flex items-center gap-3 text-slate-500 font-bold bg-white/50 backdrop-blur-sm p-4 rounded-2xl w-fit">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((s) => <span key={s}>⭐</span>)}
                                </div>
                                <span className="text-sm md:text-base">+500 famílias contempladas</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CONSCIOUSNESS BLOCK - UNIFIED & PERSUASIVE */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <Card className="bg-white border-none shadow-2xl shadow-blue-900/5 rounded-[2.5rem] overflow-hidden">
                            <CardContent className="p-8 md:p-12 text-center space-y-10">
                                <div className="space-y-6 max-w-3xl mx-auto relative">
                                    <div className="inline-flex items-center gap-2 text-green-600 font-black tracking-wider uppercase text-sm bg-green-50 px-4 py-2 rounded-full mt-4 animate-pulse">
                                        <TrendingUp className="w-4 h-4" />
                                        Planos a partir de R$ 380/mês
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                                        O Consórcio é a <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0086ff] to-cyan-500">Melhor Opção Para Você!</span>
                                    </h2>
                                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                        Pare de pagar o preço de dois imóveis para ter um. Com o Consórcio Magalu, você troca os juros abusivos do banco por poder de negociação à vista.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                    {[
                                        {
                                            icon: "🚫",
                                            title: "Zero Entrada",
                                            desc: "Inicie seu projeto imobiliário hoje mesmo sem precisar ter um valor alto guardado."
                                        },
                                        {
                                            icon: "💲",
                                            title: "Mensalidade Acessível",
                                            desc: "Invista no seu futuro com parcelas a partir de R$ 380,00. É menos que um aluguel para ter o que é seu."
                                        },
                                        {
                                            icon: "🏠",
                                            title: "Compra Inteligente",
                                            desc: "Use o crédito para comprar, construir ou reformar. Liberdade total com o selo de garantia Magalu."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                            <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* 3. VIDEO SECTION - ENHANCED */}
            <section className="py-32 bg-slate-900 text-white relative">
                <div className="container px-6 relative z-10">
                    <div className="text-center mb-16 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black">
                            A Estratégia dos <span className="text-[#ffb100]">Vencedores</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
                            Muitos acham que consórcio é apenas sorte, mas existe matemática e ferramentas para acelerar sua conquista. Eu vou te ensinar como usar todas elas a seu favor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                        {[
                            { icon: Wallet, t: "Lance Embutido", d: "Use parte da própria carta para dar o lance, sem tirar dinheiro do bolso." },
                            { icon: PiggyBank, t: "Uso de FGTS", d: "Utilize seu saldo para ofertar lances ou quitar, acelerando sua entrega." },
                            { icon: Users, t: "Análise de Grupos", d: "Entramos apenas em grupos saudáveis com histórico de muitas contemplações." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors text-left"
                            >
                                <div className="w-12 h-12 bg-[#0086ff] rounded-xl flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.t}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-[#0086ff]/20 border-[8px] border-white/5 relative group"
                    >
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:opacity-0 transition-opacity pointer-events-none z-10">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                <Play className="w-10 h-10 text-white fill-current translate-x-1" />
                            </div>
                        </div>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/mcAjaKVu4Oo"
                            title="A Estratégia do Messias"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </motion.div>

                    <div className="mt-20 text-center">
                        <Button
                            onClick={openLeadModal}
                            size="lg"
                            className="bg-[#0086ff] hover:bg-[#0076e0] text-white px-10 h-20 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/50"
                        >
                            QUERO CONHECER A ESTRATÉGIA <ArrowRight className="ml-3 w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* 4. BENEFITS GRID - ENHANCED */}
            <section className="py-32 bg-slate-50">
                <div className="container px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-20">
                        Liberdade Total para Escolher seu <span className="text-[#0086ff] decoration-wavy underline decoration-[#ffb100]">Futuro</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[2rem] bg-white group">
                                    <CardContent className="p-8 space-y-6">
                                        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#0086ff] transition-colors duration-500">
                                            <b.icon className="w-10 h-10 text-[#0086ff] group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900">{b.title}</h3>
                                        <p className="text-slate-500 leading-relaxed font-medium">{b.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button
                            onClick={openLeadModal}
                            className="bg-slate-900 text-white hover:bg-slate-800 px-10 py-6 rounded-2xl font-bold shadow-xl shadow-slate-200 transition-all hover:scale-105 active:scale-95"
                        >
                            QUERO APROVEITAR ESSAS VANTAGENS
                        </Button>
                    </div>
                </div>
            </section>

            {/* 5. WHO IS MESSIAS PIRES - ENHANCED */}
            <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
                <div className="container px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#0086ff] to-[#ffb100] rounded-[3rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 aspect-[4/5] lg:aspect-[3/4]">
                                <img
                                    src="/images/messias-pires.jpg"
                                    alt="Messias Pires"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <p className="font-black text-white text-3xl">Messias Pires</p>
                                    <p className="text-[#ffb100] font-bold tracking-wide uppercase text-sm mt-2">Gestor de Consórcio</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#0086ff] to-[#00509a] rounded-lg font-black text-sm uppercase tracking-widest shadow-lg shadow-blue-900/50">
                                Estrategista em Consórcios
                            </div>

                            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                                Messias Pires: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb100] to-orange-600">Seu Estrategista na Magalu</span>
                            </h2>

                            <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                                <p className="font-bold text-xl text-white">Consórcio não é sorte. É estratégia.</p>
                                <p>Meu trabalho vai muito além de vender a cota. Eu atuo como seu estrategista pessoal:</p>
                                <ul className="space-y-4 mt-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-[#0086ff]/20 p-2 rounded-lg text-[#0086ff]"><ShieldCheck className="w-5 h-5" /></div>
                                        <span>Analiso a saúde financeira dos grupos;</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-[#0086ff]/20 p-2 rounded-lg text-[#0086ff]"><BarChart3 className="w-5 h-5" /></div>
                                        <span>Identifico as melhores médias de lance;</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-[#0086ff]/20 p-2 rounded-lg text-[#0086ff]"><TrendingUp className="w-5 h-5" /></div>
                                        <span>Desenho o plano para você pegar as chaves o mais rápido possível.</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HOW IT WORKS - ENHANCED */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container px-6">
                    <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-24">
                        Seu Caminho até as Chaves em <span className="bg-[#0086ff] text-white px-4 rounded-xl transform -rotate-1 inline-block">4 Passos</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative cursor-default">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-14 left-0 w-full h-[3px] bg-slate-100 z-0">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "linear" }}
                                className="h-full bg-blue-100"
                            />
                        </div>

                        {steps.map((step, i) => (
                            <div key={i} className="relative z-10 space-y-8 text-center lg:text-left group">
                                <div className="w-20 h-20 bg-white border-4 border-[#0086ff] text-[#0086ff] rounded-full flex items-center justify-center text-3xl font-black mx-auto lg:mx-0 shadow-xl shadow-blue-100 group-hover:scale-110 transition-transform bg-white">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Button
                            onClick={openLeadModal}
                            variant="outline"
                            size="lg"
                            className="border-2 border-[#0086ff] text-[#0086ff] hover:bg-blue-50 px-10 h-16 rounded-2xl font-black text-lg"
                        >
                            INICIAR MEU PLANEJAMENTO
                        </Button>
                    </div>
                </div>
            </section>

            {/* 7. FAQ SECTION - ENHANCED (Darker Background) */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container max-w-4xl px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-20">
                        <span className="text-[#0086ff] select-none">???</span> <br />
                        Dúvidas Comuns
                    </h2>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`border rounded-[2rem] overflow-hidden transition-all duration-300 ${activeFaq === i ? 'border-[#0086ff] bg-white/5 shadow-lg' : 'border-white/10 hover:border-white/30 bg-white/5'}`}
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full p-8 text-left flex justify-between items-center group cursor-pointer leading-tight"
                                >
                                    <span className={`text-xl font-bold transition-colors ${activeFaq === i ? 'text-[#0086ff]' : 'text-white'}`}>{faq.q}</span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-[#0086ff] text-white rotate-180' : 'bg-white/10 text-slate-300 group-hover:bg-white/20'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 pb-8 text-lg text-slate-300 font-medium leading-relaxed border-t border-white/5 pt-6">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-400 mb-6 font-medium">Ainda tem dúvidas?</p>
                        <Button
                            onClick={openLeadModal}
                            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold shadow-xl transition-all hover:scale-105"
                        >
                            FALAR COM O ESPECIALISTA
                        </Button>
                    </div>
                </div>
            </section>

            {/* 8. FOOTER DISCLAIMER (Minimal) */}
            <footer className="py-12 bg-white border-t border-slate-100">
                <div className="container px-6 text-center space-y-4 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-6" />
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">Representante Autorizado</p>
                    <p className="text-sm text-slate-500 font-medium">
                        Consórcio Magalu &bull; Luiza Administradora de Consórcios Ltda <br />
                        CNPJ: 60.250.776/0001-91
                    </p>
                </div>
            </footer>
        </div>
    );
}
