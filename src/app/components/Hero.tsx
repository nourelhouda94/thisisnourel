import Image from "next/image";

export default function Hero() {
    return (
        <section className="md:py-40 py-24 max-w-7xl mx-auto md:flex items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left px-4">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight">
                    Designing interfaces that make sense, and building them right.
                </h1>
                <p className="mt-6 text-base md:text-lg text-gray-600 font-jakarta">
                    I’m Nourelhouda, a UI/UX Designer and Frontend Developer focused on clean experiences and clear code.
                    With a background in Scrum and Web PM, I bridge the gap between users, teams, and execution.
                </p>
                <div className="mt-8 flex md:justify-start justify-center gap-4">
                    <a
                        href="#projects"
                        className="bg-accent hover:bg-amber-300 text-white font-jakarta px-5 py-2 rounded-full text-sm transition"
                    >
                        View project
                    </a>
                    <a
                        href="#contact"
                        className="border border-gray-300 font-jakarta px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
            <div className="md:w-1/3 px-4 my-12 md:my-0">
                <Image src="/images/Hero.png" alt="thisisnourel" width={600} height={400} />
            </div>
        </section>
    );
}
