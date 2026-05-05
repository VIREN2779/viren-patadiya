import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { LoaderCircle, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submit, setSubmit] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
        if (!accessKey) {
            toast.error('Configuration error', {
                description: 'Email service is not configured.'
            });
            return;
        }

        setSubmit(true);

        try {
            const payload = {
                access_key: accessKey,
                subject: `Portfolio Contact: ${formData.subject}`,
                from_name: formData.name,
                name: formData.name,
                email: formData.email,
                message: formData.message,
            };

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const raw = await res.text();
            let data;
            try {
                data = JSON.parse(raw);
            } catch {
                console.error('Web3Forms response (not JSON):', raw.substring(0, 500));
                throw new Error('Invalid response from email service');
            }

            if (!res.ok || !data?.success) {
                const msg = data?.message || data?.error || 'Failed to send message';
                throw new Error(msg);
            }

            toast.success("Message sent!", {
                description: "Thanks for reaching out. I'll get back to you soon."
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Something went wrong", {
                description: error instanceof Error ? error.message : "Your message could not be sent. Please try again later.",
            });
        } finally {
            setSubmit(false);
        }
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

                <div className="grid max-w-4xl mt-5">
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

                                <Button
                                    type="submit"
                                    className="h-10 w-full bg-blue-600 text-white font-semibold shadow-md cursor-pointer"
                                    disabled={submit}
                                >
                                    {submit ? (
                                        <span className="flex items-center justify-center">
                                            <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

    );
}