import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import { Home, Car, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Imóveis", href: "/imoveis", icon: Home },
        { name: "Veículos", href: "/veiculos", icon: Car },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-black tracking-tighter text-[#0086ff]">
                            MAGALU <span className="text-[#ffb100]">CONSÓRCIO</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "text-sm font-bold transition-colors hover:text-primary flex items-center gap-2",
                                location.pathname === item.href
                                    ? "text-[#0086ff]"
                                    : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="magalu">Falar com Consultor</Button>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                                "text-lg font-bold p-2 flex items-center gap-3",
                                location.pathname === item.href
                                    ? "text-[#0086ff] bg-blue-50 rounded"
                                    : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="magalu" className="w-full">Falar com Consultor</Button>
                </div>
            )}
        </header>
    );
}
