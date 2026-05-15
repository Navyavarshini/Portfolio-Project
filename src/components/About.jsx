import { portfolioData } from "../data/portfolioData";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 lg:px-16 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Side */}
        <div className="flex justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-600 p-1 shadow-xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center text-8xl">
              👩‍💻
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About Me
          </h2>

          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            {portfolioData.personal.about}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">
              <h3 className="text-cyan-400 font-semibold text-lg mb-2">
                Education
              </h3>
              <p className="text-slate-300">
                B.Tech CSE (AI & ML)
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Aditya College of Engineering and Technology
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-purple-400 transition duration-300">
              <h3 className="text-purple-400 font-semibold text-lg mb-2">
                Experience
              </h3>
              <p className="text-slate-300">
                Full Stack Developer Trainee
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Internship + Training Experience
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;