export default function Contact() {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto text-center" id="contact">
      <h2 className="text-2xl md:text-3xl font-playfair font-bold">
        Let&rsquo;s work together
      </h2>
      <p className="text-gray-700 text-base font-jakarta mt-4 max-w-2/3 mx-auto">
        Whether you have a project in mind, a question, or just want to say hello — I&rsquo;m always happy to connect. Drop me a message!
      </p>

      <div className="mt-8">
        <a
          href="mailto:nourelhouda.el@gmail.com"
          className="inline-block px-6 py-3 bg-black text-white text-sm font-jakarta rounded-full hover:bg-gray-800 transition"
        >
          Send me an email
        </a>
      </div>

      {/* Optional socials */}
      <div className="mt-6 flex justify-center gap-4 text-gray-500 text-xl">
        <a href="https://www.linkedin.com/in/nourelhouda-el" target="_blank" rel="noreferrer" className="hover:text-black transition">LinkedIn</a>
        <a href="https://github.com/nourelhouda94" target="_blank" rel="noreferrer" className="hover:text-black transition">GitHub</a>
      </div>
    </section>
  )
}
