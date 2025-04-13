'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skills = [
  { name: "Adobe Creative Suite", level: 75 },
  { name: "UX Design", level: 80 },
  { name: "Web Development", level: 85 },
  { name: "Figma", level: 95 },
  { name: "UI Design", level: 90 },
  { name: "Agile Methodology", level: 85 },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section className="bg-gray-50 py-20 px-4" id="skills" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-500 font-jakarta font-semibold uppercase">Skills</p>
        <h2 className="text-2xl md:text-3xl font-playfair font-bold mt-2 mb-6">
          Why Choose Me
        </h2>
        <p className="text-gray-700 text-sm md:text-base font-jakarta max-w-2xl mx-auto">
          Design is more than just aesthetics; it&rsquo;s about understanding people, solving problems,
          and enhancing experiences. As a UI/UX designer, I am dedicated to creating seamless
          interactions that delight users and drive meaningful results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-4xl mx-auto font-jakarta">
        {skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2 text-sm font-semibold text-gray-700">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <motion.div
                className="bg-accent h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: inView ? `${skill.level}%` : 0 }}
                transition={{ duration: 1 + i * 0.15, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
