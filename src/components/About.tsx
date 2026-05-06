
import { User, MapPin, GraduationCap, Clock, School } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const el = sectionRef.current; // capture ref value
        if (el) {
            observer.observe(el);
        }

        return () => {
            if (el) {
                observer.unobserve(el);
            }
        };
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col items-center justify-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">About Me</h2>
                        <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                        <p className="text-gray-600 mt-4 text-center max-w-2xl">
                            Full-stack developer passionate about creating elegant, efficient, and user-friendly web applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                        {/* Left column - About me text */}
                        <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

                                <h3 className="text-2xl font-bold text-navy-dark mb-4 flex items-center">
                                    <User className="mr-3 text-primary" size={24} />
                                    Who am I?
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        I'm{" "}
                                        <span className="font-bold">Viren Patadiya</span>, a{" "}
                                        <span className="font-bold">Software Developer</span>{" "}
                                        with 2.5+ years of experience crafting clean, user-friendly web applications — from pixel-perfect frontends to robust backends.
                                    </p>

                                    <p className="text-gray-700 leading-relaxed mt-4">
                                        On the frontend, I build responsive interfaces with{" "}
                                        <mark className="bg-purple-100 text-purple-800 rounded px-1.5 py-0.5 font-medium not-italic">React.js & Next.js</mark>,{" "}
                                        <mark className="bg-purple-100 text-purple-800 rounded px-1.5 py-0.5 font-medium not-italic">TypeScript</mark>, and{" "}
                                        <mark className="bg-purple-100 text-purple-800 rounded px-1.5 py-0.5 font-medium not-italic">Tailwind CSS</mark> —
                                        on the backend, I design scalable{" "}
                                        <mark className="bg-teal-100 text-teal-800 rounded px-1.5 py-0.5 font-medium not-italic">RESTful APIs</mark> with{" "}
                                        <mark className="bg-teal-100 text-teal-800 rounded px-1.5 py-0.5 font-medium not-italic">Node.js & Express</mark>,
                                        secured with <mark className="bg-teal-100 text-teal-800 rounded px-1.5 py-0.5 font-medium not-italic">JWT/OAuth</mark>, backed by{" "}
                                        <mark className="bg-teal-100 text-teal-800 rounded px-1.5 py-0.5 font-medium not-italic">MongoDB, MySQL & SQLite</mark>.
                                    </p>

                                    <p className="text-gray-700 leading-relaxed mt-4">
                                        I focus on writing{" "}
                                        <mark className="bg-orange-100 text-orange-800 rounded px-1.5 py-0.5 font-medium not-italic">clean, testable code</mark>,
                                        use{" "}
                                        <mark className="bg-orange-100 text-orange-800 rounded px-1.5 py-0.5 font-medium not-italic">GitHub & Postman</mark>{" "}
                                        for version control and API testing, and handle deployment and performance with{" "}
                                        <mark className="bg-orange-100 text-orange-800 rounded px-1.5 py-0.5 font-medium not-italic">Cloudflare</mark> — always looking to learn and grow.
                                    </p>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-6">
                                        <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full">
                                            <MapPin size={18} className="text-primary" />
                                            <span className="text-gray-700">Ahmedabad, Gujarat, India</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full">
                                            <Clock size={18} className="text-primary" />
                                            <span className="text-gray-700">Full-time Availability</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <Badge variant="secondary" style={{ backgroundColor: '#61dafb20', color: '#61dafb', borderColor: '#61dafb30' }}>React</Badge>
                                        <Badge variant="secondary" style={{ backgroundColor: '#68a06320', color: '#68a063', borderColor: '#68a06330' }}>Node.js</Badge>
                                        <Badge variant="secondary" style={{ backgroundColor: '#f7df1e20', color: '#b5a800', borderColor: '#f7df1e30' }}>JavaScript</Badge>
                                        <Badge variant="secondary" style={{ backgroundColor: '#3178c620', color: '#3178c6', borderColor: '#3178c630' }}>TypeScript</Badge>
                                        <Badge variant="secondary" style={{ backgroundColor: '#06b6d420', color: '#06b6d4', borderColor: '#06b6d430' }}>Tailwind</Badge>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Education & Experience */}
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden relative">
                                <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-600/5 rounded-full"></div>
                                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-600/5 rounded-full"></div>

                                <div className="p-8 relative z-10">
                                    <h3 className="text-2xl font-bold text-navy-dark mb-6 flex items-center border-b border-gray-100 pb-4">
                                        <GraduationCap className="mr-3 text-primary" size={24} />
                                        Education & Experience
                                    </h3>

                                    <div className="space-y-8">
                                        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-blue-600 before:rounded-full before:z-10 before:ring-4 before:ring-primary/20 timeline-item">
                                            <div className="absolute left-[7px] top-5 bottom-0 w-0.5 h-[calc(100%-24px)] bg-blue-600/30"></div>
                                            <h4 className="text-lg font-semibold text-navy-dark flex items-center">
                                                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                                                BTech in Computer Engineering
                                            </h4>
                                            <p className="text-gray-700 mt-1">Silver Oak College of Eng & Tech</p>
                                            <p className="text-sm text-gray-500 mt-1">2019 - 2023 • CGPA: 7.4/10</p>
                                        </div>

                                        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-blue-600 before:rounded-full before:z-10 before:ring-4 before:ring-primary/20 timeline-item">
                                            <div className="absolute left-[7px] top-5 bottom-0 w-0.5 h-[calc(100%-24px)] bg-blue-600/30"></div>
                                            <h4 className="text-lg font-semibold text-navy-dark flex items-center">
                                                <School className="mr-2 h-5 w-5 text-primary" />
                                                Higher Secondary (HSC)
                                            </h4>
                                            <p className="text-gray-700 mt-1">Navrang High School</p>
                                            <p className="text-sm text-gray-500 mt-1">2018-2019 • 61%</p>
                                        </div>

                                        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-blue-600 before:rounded-full before:z-10 before:ring-4 before:ring-primary/20 timeline-item">
                                            <h4 className="text-lg font-semibold text-navy-dark flex items-center">
                                                <School className="mr-2 h-5 w-5 text-primary" />
                                                Secondary School (SSC)
                                            </h4>
                                            <p className="text-gray-700 mt-1">Solaris Public School</p>
                                            <p className="text-sm text-gray-500 mt-1">2016-2017 • 67.5%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};