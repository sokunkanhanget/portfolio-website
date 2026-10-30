const education = [
  {
    institution: 'Cambodia Academy of Digital Technology / IDT',
    program: 'Bachelor of in Computer Science - Software Engineering',
    period: '2024 – 2028',
    accent: 'border-l-[#c85d3a]',
  },
  {
    institution: 'Harpswell Foundation',
    program: 'Class of 2028',
    accent: 'border-l-[#725d4b]',
  },
];

export default function Education() {
  return (
    <section
      aria-labelledby="education-title"
      className="scroll-mt-20 border-b border-[#dfc9a8] py-6 sm:py-7"
      id="education"
    >
      <h2
        className="mb-5 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
        id="education-title"
      >
        Education
      </h2>

      <div className="grid gap-3.5">
        {education.map((item) => (
          <article
            className={`min-h-[90px] rounded-r-xl border-l-[5px] bg-[#fffaf1] px-6 py-5 sm:px-8 ${item.accent}`}
            key={item.institution}
          >
            <h3 className="text-base font-semibold sm:text-lg">
              {item.institution}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#bd5434]">
              {item.program}
            </p>
            {item.period && (
              <p className="mt-1.5 text-sm text-[#725d4b]">{item.period}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
