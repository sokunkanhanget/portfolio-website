import profileImage from '../assets/profile.png';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid flex-1 items-center gap-10 border-b border-[#dfc9a8] py-12 md:grid-cols-[minmax(0,1.55fr)_minmax(260px,0.9fr)] md:gap-12 md:py-7 lg:gap-20"
      id="home"
    >
      <div className="max-w-2xl">
        <h1
          className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          id="hero-title"
        >
          Hello! I am Sokunkanha
        </h1>
        <p className="mt-4 text-lg font-medium leading-relaxed text-[#bd5434] sm:text-xl">
          Computer Science Student - Specializing in Software Engineering
        </p>
        <p className="mt-5 max-w-xl text-base leading-[1.5] text-[#35271f]">
          Welcome to my portfolio. Here, you can explore my academic journey,
          technical skills, projects, experiences, and achievements. I am
          passionate about developing practical technology solutions,
          continuously improving my skills, and collaborating with others to
          create tech solutions that make an impact on people&apos;s lives.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#4b3425] px-7 font-semibold text-[#fffaf1] transition-colors hover:bg-[#654832] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b3425]"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-[#614833] px-7 font-semibold text-[#35271f] transition-colors hover:bg-[#eddbbb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4b3425]"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      <img
        alt="Sokunkanha NGET"
        className="mx-auto aspect-[315/450] w-full max-w-[315px] object-cover object-center md:mx-0 md:justify-self-end"
        src={profileImage}
      />
    </section>
  );
}
