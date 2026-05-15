import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = ['hero', 'about', 'skills', 'projects', 'contact'];

    const contactItems = [
        { icon: Mail, url: 'mailto:virenpatadiya2779@gmail.com', label: 'virenpatadiya2779@gmail.com' },
        { icon: FaGithub, url: 'https://github.com/VIREN2779/', label: 'GitHub'},
        { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/viren-patadiya-5029561a0/', label: 'LinkedIn'},
    ];

    return (
        <footer className="bg-slate-950 text-slate-100 pt-16 pb-10 relative overflow-hidden border-t border-slate-800">

            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold">VIREN <span className="text-blue-400">PATADIYA</span></h2>
                        <p className="text-slate-400 my-3">
                            Full Stack Developer with 2.5+ years of experience building
                            clean, scalable web apps. Crafting responsive frontends with
                            React.js & Next.js and robust backends with Node.js & Express —
                            always writing clean, testable code.
                        </p>
                        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 w-fit mb-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-400 text-sm font-medium">Open to Opportunities</span>
                        </div>
                        <p className="text-slate-500 text-xs">
                            📍 Ahmedabad, India · <span className="text-slate-400">Available for remote work</span>
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((id) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="h-1 w-3 bg-blue-500/60 rounded mr-2.5 group-hover:w-4 transition-all" />
                                        <span className="group-hover:translate-x-1 transition-transform capitalize">
                                            {id === 'hero' ? 'Home' : id}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-5 text-slate-100">Contact</h3>
                        <div className="space-y-5">
                            {contactItems.map(({ icon: Icon, url, label }) => (
                                <div key={url} className="flex items-center group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                                        <Icon className="h-5 w-5 text-slate-100" />
                                    </div>
                                    <a
                                        href={url}
                                        target={url.startsWith('mailto:') ? undefined : '_blank'}
                                        rel={url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                        className='text-slate-400 group-hover:text-blue-400 transition-colors duration-300'
                                    >
                                        {label}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="bg-slate-800/80 my-10" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm mb-6 md:mb-0">
                        &copy; {currentYear} VIREN PATADIYA. All rights reserved.
                    </p>

                    <Button
                        onClick={scrollToTop}
                        variant="outline"
                        size="icon"
                        className="bg-slate-800 border-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:scale-110 rounded-full transition-all duration-300 shadow-lg"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="h-5 w-5 text-white" />
                    </Button>
                </div>
            </div>
        </footer>
    );
};