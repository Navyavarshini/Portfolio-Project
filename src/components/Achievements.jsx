import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";

function Achievements() {
  return (
    <section
      id="achievements"
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
            Achievements & Certifications
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Highlights from competitive programming, certifications, and academic accomplishments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl mb-4">🏆</div>

              <p className="text-slate-200 text-lg leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;