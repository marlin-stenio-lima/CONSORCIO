import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t py-12">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <span className="text-xl font-black text-[#0086ff]">
                            MAGALU <span className="text-[#ffb100]">CONSÓRCIO</span>
                        </span>
                        <p className="text-muted-foreground max-w-sm">
                            Uma empresa do grupo Magazine Luiza. Luiza Administradora de Consórcios Ltda. CNPJ: 60.250.776/0001-91
                        </p>
                        <div className="flex gap-4">
                            <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                            <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                            <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold">Atendimento</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0800 940 3400</li>
                            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> atendimento@consorciomagalu.com.br</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold">Links Úteis</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:underline">Perguntas Frequentes</a></li>
                            <li><a href="#" className="hover:underline">Como Funciona</a></li>
                            <li><a href="#" className="hover:underline">Trabalhe Conosco</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 text-center text-xs text-muted-foreground">
                    © 2026 Consórcio Magalu. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
