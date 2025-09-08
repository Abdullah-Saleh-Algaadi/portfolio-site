import MyImage from "../../assets/image1.png";

export default function HeroSection() {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-teal-400">Abdullah</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 font-medium mb-6">
            Full-Stack Web Developer
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I build fast, responsive, and user-friendly web applications using
            <span className="text-teal-400">
              {" "}
              React, Node.js, and modern web technologies
            </span>
            . Passionate about clean code, intuitive design, and turning ideas
            into digital reality.
          </p>
          <button
            // onClick={() => navigate("#contact")}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md transition duration-200 shadow-md hover:shadow-lg"
          >
            <a
              href={`#${"contact"}`}
              className="text-gray-300 hover:text-teal-400 transition duration-200"
            >
              Let’s Work Together
            </a>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={MyImage}
            alt="Abdullah - Web Developer"
            className="h-64 w-64 rounded-full object-cover ring-4 ring-teal-500 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
