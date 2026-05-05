
export default function Contact() {
    return (
        <section id="contact" className="relative py-10 bg-linear-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">Get In Touch</h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-center max-w-2xl">
                        Feel free to reach out if you have any questions or want to discuss potential collaborations
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form className="grid grid-cols-1 gap-6">
                        <input
                            name="name"
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                        <input
                            name="subject"
                            placeholder="Subject"
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                        <textarea
                            name="message"
                            placeholder="Your message..." 
                            rows={5}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        />
                        <button
                            type="submit"
                            className="h-10 w-full bg-blue-600 text-white font-semibold rounded-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
}