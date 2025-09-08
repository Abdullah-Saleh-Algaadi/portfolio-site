export default function AboutSection() {
  return (
    <section className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400">
          Who Am I?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I'm <span className="font-semibold">Abdullah AL-Gaadi</span>, a
          passionate web developer who loves turning ideas into
          <span className="text-teal-400">
            {" "}
            smooth, beautiful, and functional applications
          </span>
          . I specialize in React and Node.js, and I care deeply about clean
          code, user experience, and performance.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          I don’t just write code — I solve problems and build digital
          experiences that matter. When I’m not coding, you’ll find me learning
          new technologies, contributing to open-source, or enjoying a good cup
          of coffee.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed font-medium">
          Let’s build something amazing together.
        </p>
      </div>
    </section>
  );
}
