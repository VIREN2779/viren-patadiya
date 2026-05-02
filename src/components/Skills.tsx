import { Shield, Code, Database, Server, Globe, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from 'react';

export default function Skills() {
    const [isVisible] = useState(true);

    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Code className="text-tech-react h-8 w-8" />,
            color: "from-blue-500/20 to-blue-400/5",
            iconBg: "bg-blue-500/10",
            skills: [
                "HTML5", "CSS3", "Bootstrap", "Tailwind CSS",
                "Material UI", "Ant Design",
                "JavaScript (ES6+)", "TypeScript",
                "React.js", "Next.js", "Vite.js",
                "Redux", "Context API",
                "Responsive Design", "Cross-Browser Compatibility"
            ]
        },
        {
            title: "Backend Development",
            icon: <Server className="text-primary h-8 w-8" />,
            color: "from-indigo-500/20 to-indigo-400/5",
            iconBg: "bg-indigo-500/10",
            skills: [
                "Node.js", "Express.js",
                "RESTful APIs", "API Integration",
                "Authentication", "Authorization",
                "JWT", "OAuth",
                "Server-Side Development"
            ]
        },
        {
            title: "Database Management",
            icon: <Database className="text-tech-node h-8 w-8" />,
            color: "from-green-500/20 to-green-400/5",
            iconBg: "bg-green-500/10",
            skills: [
                "MongoDB", "MySQL", "SQLite",
                "Database Design",
                "Data Modeling"
            ]
        },
        {
            title: "Development Tools",
            icon: <Terminal className="text-tech-js h-8 w-8" />,
            color: "from-yellow-500/20 to-yellow-400/5",
            iconBg: "bg-yellow-500/10",
            skills: [
                "Git", "GitHub",
                "VS Code",
                "Jira", "Slack", "Microsoft Teams",
                "Postman",
                "Chrome DevTools",
                "Debugging"
            ]
        },
        {
            title: "Deployment & Cloud",
            icon: <Globe className="text-navy h-8 w-8" />,
            color: "from-sky-500/20 to-sky-400/5",
            iconBg: "bg-sky-500/10",
            skills: [
                "Cloudflare",
                "Vercel", "Netlify", "Render",
                "CI/CD Basics",
                "Domain & Hosting Management"
            ]
        },
        {
            title: "Professional Skills",
            icon: <Shield className="text-tech-cyber h-8 w-8" />,
            color: "from-purple-500/20 to-purple-400/5",
            iconBg: "bg-purple-500/10",
            skills: [
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Project Management",
                "Time Management"
            ]
        }
    ];

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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <Card className="py-0 pb-5 overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className={`bg-gradient-to-br ${category.color} h-3`}></div>
                                    <CardHeader className="">
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-xl ${category.iconBg}`}>
                                                {category.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-navy-dark">{category.title}</h3>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-2">
                                        <ul className="space-y-2.5 flex flex-wrap gap-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <li key={skillIndex} className="flex items-center">
                                                    <span className="text-gray-700 text-md font-medium px-3 py-1 rounded-full border transition-transform hover:bg-black hover:text-white hover:scale-105">{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}