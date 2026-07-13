import MyImage from "../../assets/MyImage2.png";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-50 text-slate-900 py-24 md:py-32 overflow-hidden">
      {/* Background Gradients - Adjusted for light mode */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/20 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-400/20 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-teal-600 font-semibold tracking-wider uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            Available for Freelance & Full-time
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600">Abdullah</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl text-slate-700 font-semibold">
            Full-Stack Web Developer
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I build fast, responsive, and user-focused web applications using
            <span className="text-teal-600 font-semibold"> React, Node.js, and modern web technologies</span>.
            Passionate about writing clean code, crafting intuitive designs, and transforming complex ideas into digital realities.
          </p>

          <div className="flex justify-center md:justify-start pt-2 gap-4">
            <a href="#contact">
              <Button variant="primary">
                Let’s Work Together
              </Button>
            </a>
            <a href="#projects">
              <Button variant="secondary">
                View Work
              </Button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center relative">
          <div className="relative group">
            {/* Double ring frame */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-slate-200 via-teal-300/50 to-indigo-300/50 shadow-xl transition-transform duration-500 hover:-translate-y-2">
              <div className="bg-white p-2 rounded-full">
                <img
                  src={MyImage}
                  alt="Abdullah - Web Developer"
                  className="h-60 w-60 sm:h-72 sm:w-72 rounded-full object-cover shadow-inner transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
