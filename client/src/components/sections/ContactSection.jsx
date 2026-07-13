import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative bg-slate-50 text-slate-900 py-24 px-6 overflow-hidden border-t border-slate-200">
      <div className="max-w-3xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600">
            Let's Talk
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <Card className="p-8 md:p-10 space-y-6" hoverEffect={false}>
          <form onSubmit={sendMessage} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold tracking-wide text-slate-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-white border border-slate-300 text-slate-900 placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all duration-300 shadow-sm text-sm md:text-base"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold tracking-wide text-slate-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white border border-slate-300 text-slate-900 placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all duration-300 shadow-sm text-sm md:text-base"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold tracking-wide text-slate-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                rows={5}
                className="w-full bg-white border border-slate-300 text-slate-900 placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all duration-300 shadow-sm resize-none text-sm md:text-base"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button variant="primary" type="submit" className="w-full py-3.5">
                Send Message
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
