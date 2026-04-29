import { ArrowDown, GitCompare, Link2, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const words = [
    "React.js Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
];

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    const [wordIndex, setWordIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (isPaused) {
            timeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, 1500);
        } else if (!isDeleting) {
            if (typedText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setTypedText(currentWord.slice(0, typedText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setIsPaused(true);
                }, 0);
            }
        } else {
            if (typedText.length > 0) {
                timeout = setTimeout(() => {
                    setTypedText(currentWord.slice(0, typedText.length - 1));
                }, 50);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }, 0);
            }
        }

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, isPaused, wordIndex]);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden py-8 lg:py-16 xl:py-20 2xl:py-24 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-fixed">

            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-0"></div>

            <div className="container mx-auto px-4 z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    <div
                        className={`flex flex-col items-center transition-all duration-700 ${isLoaded
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                            }`}
                    >
                        <div className="relative mb-6">
                            <Avatar className="h-32 w-32 border-4 border-primary/80 shadow-2xl">
                                <AvatarImage
                                    src="/profile-pic.jpg"
                                    alt="Viren Patadiya"
                                />
                                <AvatarFallback className="bg-primary text-white text-2xl font-bold">
                                    VP
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-3">
                            Hi, I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                                VIREN PATADIYA
                            </span>
                        </h1>

                        <div className="flex justify-center items-center gap-2 min-h-[40px]">
                            <span className="text-white font-semibold text-xl md:text-2xl">
                                {typedText}
                                <span className={`ml-1 inline-block w-1.5 h-6 bg-primary rounded-sm ${isPaused ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}
                                ></span>
                            </span>
                        </div>
                        <div className="w-24 sm:w-28 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mb-3 sm:mb-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-full blur-sm opacity-70"></div>
                        </div>
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-4 sm:mb-6 animate-fade-in px-4 text-center leading-relaxed" style={{ animationDelay: '0.2s' }}>
                            Passionate about building modern, scalable web applications and delivering seamless user experiences.
                        </p>
                        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <a href="https://github.com/VIREN2779" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-primary/80 transition-all duration-300 shadow-lg text-white touch-manipulation">
                                <GitCompare size={18} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/in/viren-patadiya-5029561a0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 shadow-lg text-white touch-manipulation">
                                <Link2 size={18} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="mailto:virenpatadiya2779@gmail.com" aria-label="Email" className="group p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300 shadow-lg text-white touch-manipulation">
                                <Mail size={18} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
                        <Button
                            variant="default"
                            size="lg"
                            className="bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/30 relative group overflow-hidden font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto touch-manipulation"
                            onClick={scrollToProjects}
                        >
                            <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700"></span>
                            <span className="relative z-10">View My Work</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-white/30 text-slate-50 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg relative group overflow-hidden font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto touch-manipulation"
                        >
                            <span className="absolute inset-0 w-full h-full bg-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700"></span>
                            <span className="relative z-10">Contact Me</span>
                        </Button>
                    </div>

                    <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 mx-auto flex justify-center">
                        <button
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white/5 backdrop-blur-sm hover:bg-primary/80 p-2.5 sm:p-3 rounded-full text-white shadow-lg transition-all duration-500 hover:scale-110 relative group touch-manipulation"
                            aria-label="Scroll down"
                        >
                            <div className="absolute inset-0 bg-primary/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <ArrowDown size={20} className="sm:w-6 sm:h-6 relative z-10 animate-bounce" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};