const skills = [
    "🖊️ UI/UX Design",
    "🖥️ Frontend Development",
    "📅 Agile Methodology",
    "📅 Project Planning",
    "🌐 Remote Team Leadership",
    "📊 CMS",
    "🖊️ Wireframes & Prototypes",
    "🧠 UX Thinking",
  ];
  
  const experience = [
    {
      year: "2024",
      title: "UI/UX Designer & PM",
      company: "Active Webdezign",
      location: "Remotely",
    },
    {
      year: "2023",
      title: "UI/UX Designer",
      company: "Bookme",
      location: "Remotely",
    },
    {
      year: "2021 – 2022",
      title: "Scrum Master – Web Developer",
      company: "Grupo Avalon",
      location: "Remotely",
    },
    {
      year: "2020",
      title: "IT Manager",
      company: "Dada Anbar",
      location: "Tangier – Morocco",
    },
    {
      year: "2018 – 2020",
      title: "Fullstack Developer",
      company: "Fagor Electronica",
      location: "Remotely",
    },
  ];
  
  export default function About() {
    return (
      <section className="py-20 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-12" id="about">
        {/* Left: Philosophy + Skills */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold">
            Intentional design. Agile thinking.
          </h2>
          <p className="text-gray-700 font-jakarta text-sm md:text-base">
            With over 6 years of digital experience, I bring designs to life — and help teams deliver them.
          </p>
          <p className="text-gray-700 font-jakarta text-sm md:text-base">
            I specialize in UI/UX Design and Frontend Development, blending strategy and usability with clean,
            scalable code. Thanks to my background in Scrum and Web Project Management, I also bring a deep
            understanding of team dynamics, timelines, and getting things done right.
          </p>
  
          <div className="flex flex-wrap gap-3 pt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-gray-300 px-3 py-1 rounded-full text-xs font-jakarta text-gray-800 bg-gray-100 hover:bg-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
  
        {/* Right: Experience Timeline */}
        <div className="md:w-1/3 max-h-[300px] overflow-y-auto scrollable">
          <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-6">My Experience</h3>
          <div className="relative border-l border-gray-300 pl-6 space-y-10">
            {experience.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[10px] top-1 w-2 h-4 bg-accent rounded-full border-2 border-white" />
                <div className="text-sm md:text-base">
                  <div className="text-gray-900 font-semibold">{item.year}</div>
                  <div className="text-gray-800">{item.title}</div>
                  <div className="text-gray-500 italic text-sm">
                    {item.company} | {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  