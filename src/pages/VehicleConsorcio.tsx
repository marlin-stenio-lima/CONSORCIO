import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Car, Bike, Truck, Sparkles, Zap, Timer, CheckCircle } from "lucide-react";

export function VehicleConsorcio() {
    const categories = [
        { icon: Car, name: "Carros" },
        { icon: Bike, name: "Motos" },
        { icon: Truck, name: "Pesados" },
    ];

    const features = [
        {
            title: "Sem Juros e Zero Taxa",
            description: "Planos mais acessíveis que financiamento, sem taxas de adesão.",
            icon: Zap
        },
        {
            title: "Flexibilidade Total",
            description: "Escolha entre 0km ou seminovo, nacional ou importado.",
            icon: Sparkles
        },
        {
            title: "Seu usado como Lance",
            description: "Use seu veículo atual para antecipar sua carta de crédito.",
            icon: Timer
        }
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Carro Luxo"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#ffb100] text-slate-900 px-4 py-1 rounded-full font-bold text-sm">
                            <Zap className="w-4 h-4" /> NOVO LANÇAMENTO 2026
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight">
                            O Seu Novo Carro <br />
                            Pelo <span className="text-[#0086ff]">Melhor Caminho</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            No Consórcio Magalu você alcança o tão desejado veículo 0km ou seminovo sem pagar juros abusivos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="xl" variant="magalu">
                                SIMULE SEU VEÍCULO
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 bg-white border-b">
                <div className="container px-4">
                    <div className="flex justify-center gap-4 md:gap-12">
                        {categories.map((cat, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#0086ff] group-hover:text-white transition-all shadow-sm">
                                    <cat.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-600 group-hover:text-white" />
                                </div>
                                <span className="font-bold text-slate-900">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 text-center">
                    <h2 className="text-4xl font-black uppercase mb-16">
                        A Experiência Completa do seu <span className="text-[#0086ff]">Sonho</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <Card key={i} className="border-none shadow-lg hover:shadow-2xl transition-all">
                                <CardContent className="pt-8 space-y-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                        <feature.icon className="w-6 h-6 text-[#0086ff]" />
                                    </div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Offroad"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black uppercase leading-tight">
                                Liberdade para escolher <br /> o que <span className="text-[#0086ff]">você quiser</span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "SUVs e Caminhonetes",
                                    "Carros Híbridos e Elétricos",
                                    "Motos de Alta Cilindrada",
                                    "Jet Ski e Lanchas"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-[#0086ff] w-5 h-5" />
                                        <span className="font-medium text-lg">{text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-muted-foreground">
                                Com o crédito em mãos, você tem o poder de negociação de quem paga à vista.
                                Conquiste descontos e escolha a melhor oferta do mercado.
                            </p>
                            <Button size="lg" variant="magalu">
                                COMEÇAR AGORA
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ/CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container px-4 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black uppercase">
                            Pronto para acelerar sua <span className="text-[#ffb100]">Conquista</span>?
                        </h2>
                        <p className="text-xl text-gray-400">
                            Junte-se a milhares de brasileiros que já realizaram o sonho do carro novo com o Consórcio Magalu.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="xl" className="bg-[#ffb100] text-slate-900 font-bold hover:bg-[#e6a000]">
                                QUERO SIMULAR AGORA
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
