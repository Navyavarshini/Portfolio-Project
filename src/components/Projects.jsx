import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 lg:px-16 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Real-world projects showcasing my full-stack development and machine learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl"
            >
              <div className="mb-5">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition duration-300"
              >
                View GitHub Repo
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;