import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from 'react';

export default function Skills() {
    const [isVisible] = useState(true);

    return (
        <section id="skills" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="absolute top-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col items-center justify-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">Skills & Expertise</h2>
                        <div className="w-24 h-1.5 bg-primary rounded-full"></div>
                        <p className="text-gray-600 mt-4 text-center max-w-2xl">
                            My technical proficiency and professional capabilities that I bring to every project
                        </p>
                    </div>

                    <div className="gap-8 mt-12">
                        <div
                            className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <Card className="py-0 pb-5 overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className='bg-gradient-to-br from-blue-500/20 to-blue-400/5 h-3'></div>
                                <CardHeader className="">
                                    <div className="flex items-center space-x-4">
                                        <div className='p-3 rounded-xl bg-blue-500/10'>
                                            <Code className="text-tech-react h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-navy-dark">Frontend Development</h3>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-2">
                                    <ul className="space-y-2.5">
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-2.5"></div>
                                            <span className="text-gray-700">React</span>
                                            <span className="text-gray-700">JavaScript/TypeScript</span>
                                            <span className="text-gray-700">HTML5/CSS3</span>
                                            <span className="text-gray-700">Tailwind CSS</span>
                                            <span className="text-gray-700">Responsive Design</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}