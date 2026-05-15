import { motion } from "motion/react";
import { Parallax } from "react-scroll-parallax";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-32 md:pt-36 px-6 md:px-10 lg:px-16 relative overflow-hidden"
    >
      {/* Background Glow */}
      <Parallax speed={-20}>
  <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
</Parallax>

<Parallax speed={15}>
  <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
</Parallax>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            {portfolioData.personal.displayName}
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mt-4">
            {portfolioData.personal.title}
          </h2>

          <p className="text-slate-400 mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
            {portfolioData.personal.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/Navya-Resume.pdf"
download
              className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-1 shadow-2xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-7xl sm:text-8xl">
              👩‍💻
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;