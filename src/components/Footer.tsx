import { Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-navy-dark text-white pt-16 pb-8 relative overflow-hidden animate-fadeIn">
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold">VIREN <span className="text-primary">PATADIYA</span></h2>
                        <p className="text-gray-400 mt-3 mb-6">
                            Full Stack Developer specializing in modern web technologies and responsive design solutions.
                        </p>
                        <div className="flex space-x-4 mt-3">
                            <a
                                href="https://github.com/VIREN2779/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 shadow-md"
                                aria-label="GitHub"
                            >
                                Github
                            </a>
                            <a
                                href="https://www.linkedin.com/in/viren-patadiya-5029561a0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 shadow-md"
                                aria-label="LinkedIn"
                            >
                                Linkedin
                            </a>
                        </div>

                        <div className="flex flex-col max-w-fit">
                            <h3 className="text-xl font-semibold mb-5 text-white">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#hero" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                                        <span className="h-1.5 w-3 bg-primary/60 rounded mr-2.5 group-hover:w-4 transition-all"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                                        <span className="h-1.5 w-3 bg-primary/60 rounded mr-2.5 group-hover:w-4 transition-all"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                                        <span className="h-1.5 w-3 bg-primary/60 rounded mr-2.5 group-hover:w-4 transition-all"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">Skills</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                                        <span className="h-1.5 w-3 bg-primary/60 rounded mr-2.5 group-hover:w-4 transition-all"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                                        <span className="h-1.5 w-3 bg-primary/60 rounded mr-2.5 group-hover:w-4 transition-all"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold mb-5 text-white">Contact</h3>
                            <div className="space-y-5">
                                <div className="flex items-center group">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-md">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <a href="mailto:virenpatadiya2779@gmail.com" className="text-gray-400 group-hover:text-primary transition-colors duration-300 break-all">
                                        virenpatadiya2779@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center group">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-md">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <a href="tel:+911234567890" className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                                        +91 1234567890
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};