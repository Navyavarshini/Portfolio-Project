import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";

function Skills() {
  const skillGroups = [
    { title: "Frontend", skills: portfolioData.skills.frontend },
    { title: "Backend", skills: portfolioData.skills.backend },
    { title: "Languages", skills: portfolioData.skills.languages },
    { title: "Database", skills: portfolioData.skills.database },
    { title: "Tools & Cloud", skills: portfolioData.skills.tools },
    { title: "AI / ML", skills: portfolioData.skills.ai },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-10 lg:px-16 bg-slate-950"
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
            Skills & Technologies
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable web applications
            and intelligent solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;