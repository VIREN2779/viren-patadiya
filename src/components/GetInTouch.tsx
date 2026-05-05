import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="contact" className="relative py-10 bg-linear-to-b from-gray-50 to-white overflow-hidden">
            <div className="grid justify-center container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">Get In Touch</h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-center max-w-2xl">
                        Let's build something great together
                    </p>
                </div>

                <div className="grid max-w-3xl mt-5">
                    <Card className="border-0 shadow-lg">
                        <CardContent className="py-4 px-5 pt-0">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <Input
                                        id="name"
                            name="name"
                                        placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                                        className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                            name="email"
                            type="email"
                                        placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                                        className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                            name="subject"
                                        placeholder="How can I help you?"
                            value={formData.subject}
                            onChange={handleChange}
                                        className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                                        required
                        />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                            name="message"
                            placeholder="Your message..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                                        className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                                        required
                        />
                                </div>

                        <button
                            type="submit"
                            className="h-10 w-full bg-blue-600 text-white font-semibold rounded-md"
                        >
                            Send Message
                        </button>
                    </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

    );
}