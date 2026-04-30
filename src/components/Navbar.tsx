
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, FolderOpen, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { name: "Home", id: "hero", icon: Home },
        { name: "About", id: "about", icon: User },
        { name: "Skills", id: "skills", icon: Code },
        { name: "Projects", id: "projects", icon: FolderOpen },
        { name: "Contact", id: "contact", icon: Mail },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 120 && rect.bottom >= 120;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            setActiveSection(id);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 h-22 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11 border-2 border-blue-500 shadow-md">
                        <AvatarImage src="/profile-pic.jpg" alt="VIREN PATADIYA" />
                        <AvatarFallback className="bg-blue-600 text-white font-bold">VP</AvatarFallback>
                    </Avatar>

                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-2xl font-bold text-white"
                    >
                        VIREN <span className="text-blue-500">PATADIYA</span>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    {navItems.map(({ id, name, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === id
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <Icon size={16} className="text-white" />
                            <span>{name}</span>
                        </button>
                    ))}

                    <Button
                        className="ml-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 h-11"
                        onClick={() => scrollToSection("contact")}
                    >
                        Let's Connect
                    </Button>
                </nav>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white bg-white/10 hover:bg-white/20 p-2 rounded-lg transition"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen
                        ? "max-h-125 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-5 pt-2 bg-slate-900/95 border-t border-white/10">
                    <div className="flex flex-col gap-2">
                        {navItems.map(({ id, name, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeSection === id
                                        ? "bg-blue-600 text-white"
                                        : "text-white/80 hover:bg-white/10"
                                    }`}
                            >
                                <Icon size={18} className="text-white" />
                                <span>{name}</span>
                            </button>
                        ))}

                        <Button
                            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11"
                            onClick={() => scrollToSection("contact")}
                        >
                            Let's Connect
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};