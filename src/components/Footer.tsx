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
                    </div>
                </div>
            </div>
        </footer>
    );
};