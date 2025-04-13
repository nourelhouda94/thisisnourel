import Image from "next/image";

const projects = [
  {
    title: "Bookme",
    subtitle: "Service Booking Web Application",
    role: "UI/UX Designer & Frontend Developer",
    tools: "Figma, React.js, TailwindCSS",
    description:
      "Designed and built a responsive web app to simplify booking services with trainers and professionals. Focused on mobile-first UX, intuitive navigation, and real-time reservation management. Delivered both client-facing interfaces and a back-office dashboard for providers.",
    image: "/images/bookme.png",
  },
  {
    title: "Nostradamus",
    subtitle: "Data Intelligence Dashboard",
    role: "UI/UX Designer",
    tools: "Figma",
    description:
      "Created a dark-mode dashboard to visualize corporate sentiment using rich data filters and charts. Intuitive, component-based layout with advanced filtering.",
    image: "/images/nostradamus.png",
  },
  {
    title: "RxFarma",
    subtitle: "Healthcare Branding & Website",
    role: "UI/UX Designer",
    tools: "Figma, Illustrator, Photoshop",
    description:
      "Redesigned the brand and website to improve trust and accessibility in the pharmaceutical space. Clean healthcare-focused UI and optimized mobile experience.",
    image: "/images/rxfarma.png",
  },
  {
    title: "MeaningfulVision",
    subtitle: "Analytics Web Platform",
    role: "UI/UX Designer",
    tools: "Figma",
    description:
      "Redesigned a web-based analytics dashboard for retail insights, with a strong focus on visual clarity and ease of navigation across complex datasets. Simplified multi-filter tables, added data view toggles, and built responsive dashboards to help users monitor trends across locations and timeframes.",
    image: "/images/mv.png",
  },
  {
    title: "Reading Glasses Direct",
    subtitle: "E-commerce Web Redesign",
    role: "UI/UX Designer",
    tools: "Figma, WordPress (WooCommerce)",
    description:
      "Rebuilt the full e-commerce flow with senior-friendly UX, product discoverability, and cleaner navigation using WooCommerce.",
    image: "/images/rgd.png",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="projects">
      <p className="text-sm text-gray-500 font-jakarta font-semibold uppercase text-center">
        Projects
      </p>
      <div className="mb-12 mt-3">
        <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-center">
          Selected works
        </h2>
        <p className="text-gray-700 font-jakarta text-base text-center max-w-2xl mx-auto mt-2">
          These are the projects where I shaped the user experience, built real
          features, and helped teams ship with confidence, combining design
          thinking with frontend execution.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col items-center md:items-center md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-10`}
          >
            {/* Image */}
            <div className="w-full md:w-2/3">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/3 font-jakarta space-y-2 text-left">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-lg font-semibold text-gray-900">
                {project.subtitle}
              </p>
              <p className="text-base text-gray-600">
                <strong>Role:</strong> {project.role} <br />
                <strong>Tools:</strong> {project.tools}
              </p>
              <p className="text-base text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
