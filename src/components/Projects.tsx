import { ExternalLink, Briefcase } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
        >
            <div className="absolute top-40 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">My Projects</h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-center max-w-2xl">
                        Showcasing my recent development work and creative solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

                    <Card className="py-0 overflow-hidden border-0 shadow-lg h-full flex flex-col">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2">
                                <Briefcase className="h-5 w-5 text-blue-500" />
                            </div>
                            <img
                                src="https://placehold.co/600x400/1a365d/FFFFFF/webp?text=E+Commerce"
                                alt="E-Commerce Website"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardContent className="p-6 grow">
                            <h3 className="text-xl font-semibold mb-3 text-navy-dark">E-Commerce Website</h3>
                            <p className="text-gray-600 mb-4">
                                Built a full-stack MERN e-commerce platform with user authentication, product show page and a complete checkout flow including Pay on Delivery. Developed an admin dashboard for efficient product management, order handling and real-time delivery status tracking. Deployed the frontend on Netlify and backend on Render ensuring scalable performance and seamless user experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="bg-gray-50 p-4 flex items-center justify-end">
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-1.5 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer"
                                onClick={() => window.open("https://dev-viren-e-commerce.netlify.app/", "_blank")}
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}