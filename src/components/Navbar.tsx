
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, FolderOpen, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
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
            setIsScrolled(window.scrollY > 10);

            const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
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
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Avatar className="hidden md:flex h-11 w-11 border-2 border-primary shadow-md hover:scale-105 transition-transform">
                        <AvatarImage src="/profile-pic.jpg" alt="VIREN PATADIYA" className="object-cover" />
                        <AvatarFallback className="bg-primary text-white font-bold">VP</AvatarFallback>
                    </Avatar>
                    <button
                        onClick={() => scrollToSection('hero')}
                        className={`text-xl md:text-2xl font-bold transition-colors hover:text-primary ${isScrolled ? 'text-navy-dark' : 'text-white'
                            }`}
                    >
                        VIREN <span className="text-primary">PATADIYA</span>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map(({ id, name, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={`navbar-item ${activeSection === id ? 'active' : ''} ${!isScrolled ? 'text-white hover:bg-white/20' : ''
                                }`}
                        >
                            <Icon size={16} className={activeSection === id ? 'text-primary' : 'opacity-80'} />
                            <span>{name}</span>
                        </button>
                    ))}
                    <Button
                        variant={isScrolled ? "outline" : "default"}
                        className={`ml-3 font-medium transition-all duration-300 ${isScrolled
                            ? 'border-primary text-primary hover:bg-primary hover:text-white'
                            : 'bg-primary text-white hover:bg-primary/90'
                            }`}
                        onClick={() => scrollToSection('contact')}
                    >
                        Let's Connect
                    </Button>
                </nav>

                <button
                    className={`md:hidden h-10 w-10 flex items-center justify-center rounded-md transition-colors ${isScrolled ? 'text-navy-dark hover:bg-muted' : 'text-white bg-black/30 hover:bg-black/40'
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="py-4">
                        <div className="flex items-center gap-3 px-6 pb-3 mb-4 border-b border-gray-100">
                            <Avatar className="h-9 w-9 border-2 border-primary">
                                <AvatarImage src="/profile-pic.jpg" alt="VIREN PATADIYA" className="object-cover" />
                                <AvatarFallback className="bg-primary text-white font-bold">VP</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold text-navy-dark">
                                VIREN <span className="text-primary">PATADIYA</span>
                            </span>
                        </div>
                        <nav className="flex flex-col px-4">
                            {navItems.map(({ id, name, icon: Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollToSection(id)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-md border-l-2 transition-all ${activeSection === id
                                        ? 'text-primary font-medium bg-primary/10 border-primary'
                                        : 'text-navy-dark hover:bg-muted border-transparent'
                                        }`}
                                >
                                    <Icon size={18} className={activeSection === id ? 'text-primary' : 'opacity-80'} />
                                    <span>{name}</span>
                                </button>
                            ))}
                            <div className="mt-4 px-2">
                                <Button
                                    className="w-full font-medium bg-primary text-white hover:bg-primary/90"
                                    onClick={() => scrollToSection('contact')}
                                >
                                    Let's Connect
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};