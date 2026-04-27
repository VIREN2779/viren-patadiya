import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from 'react';
import { useTypingEffect } from '@/hooks/use-typing-effect';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const { text: typedText, isPaused } = useTypingEffect({
        words: [
            "React.js Developer",
            "Node.js Developer",
            "Full Stack Developer",
            "MERN stack Developer",
        ],
        typingSpeed: 100,
        deletingSpeed: 50,
        delayBetweenWords: 1500
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

 

    return (
        <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden py-8 lg:py-16 xl:py-20 2xl:py-24">

            <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-dark opacity-95 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 z-0"></div>

            <div className="absolute inset-0 opacity-5 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

            <div className="absolute inset-0 z-0">

                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-20 sm:w-28 md:w-36 h-20 sm:h-28 md:h-36 bg-gradient-to-tr from-primary/15 to-primary/5 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
                <div className="hidden sm:block absolute bottom-20 left-1/4 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full animate-float blur-sm" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-tl from-primary/15 to-primary/5 rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }}></div>
                <div className="hidden sm:block absolute bottom-1/4 right-1/5 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-bl from-primary/15 to-primary/5 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
                <div className="hidden md:block absolute top-1/2 left-1/3 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
                <div className="hidden md:block absolute bottom-1/3 right-1/4 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAgTSA2MCAxMCBMIDYwIDAgNTAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjA0MjgwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-5 sm:opacity-10"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10 text-center">
                <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
                    <div className={`flex flex-col items-center mb-4 sm:mb-6 md:mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="relative mb-4 sm:mb-6 md:mb-8">
                            <div className="absolute inset-0 rounded-full animate-spin-slow border-2 sm:border-3 md:border-4 border-primary/40 border-dashed"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-blue-400/60 rounded-full blur-lg sm:blur-xl opacity-40 animate-pulse-soft"></div>
                            <Avatar className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40 border-2 sm:border-3 md:border-4 border-primary/80 shadow-xl md:shadow-2xl relative">
                                <AvatarImage
                                    src="/profile-pic.jpg"
                                    alt="Parth Panchal"
                                    className="object-cover object-center h-full w-full"
                                />
                                <AvatarFallback className="bg-primary text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">PP</AvatarFallback>
                            </Avatar>
                        </div>
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 animate-fade-in text-center px-2">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary">VIREN PATADIYA</span>
                        </h1>
                        <div className="flex justify-center items-center gap-2 mb-3 sm:mb-4 min-h-[32px] sm:min-h-[36px] md:min-h-[40px] px-2">
                            <span className="text-primary font-semibold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide animate-fade-in text-center" style={{ animationDelay: '0.1s' }}>
                                {typedText}
                                <span className={`ml-1 inline-block w-1.5 sm:w-2 h-5 sm:h-6 md:h-7 align-middle bg-primary rounded-sm ${isPaused ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}></span>
                            </span>
                        </div>
                        <div className="w-24 sm:w-28 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mb-3 sm:mb-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-full blur-sm opacity-70"></div>
                        </div>
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-4 sm:mb-6 animate-fade-in px-4 text-center leading-relaxed" style={{ animationDelay: '0.2s' }}>
                            Passionate about building modern, scalable web applications and delivering seamless user experiences.
                        </p>
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

export default Hero;