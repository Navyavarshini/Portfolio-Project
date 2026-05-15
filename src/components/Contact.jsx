import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-10 lg:px-16 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let's Connect
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Interested in collaborating, internships, opportunities, or building something impactful together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition duration-300"
          >
            <FaEnvelope className="text-cyan-400 text-4xl mx-auto mb-5" />
            <h3 className="text-white text-xl font-semibold mb-3">Email</h3>
            <p className="text-slate-400 break-all">
              {portfolioData.personal.email}
            </p>
          </a>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition duration-300"
          >
            <FaGithub className="text-cyan-400 text-4xl mx-auto mb-5" />
            <h3 className="text-white text-xl font-semibold mb-3">GitHub</h3>
            <p className="text-slate-400">
              github.com/Navyavarshini
            </p>
          </a>

          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition duration-300"
          >
            <FaLinkedin className="text-cyan-400 text-4xl mx-auto mb-5" />
            <h3 className="text-white text-xl font-semibold mb-3">LinkedIn</h3>
            <p className="text-slate-400">
              linkedin.com/in/navyavarshini
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;