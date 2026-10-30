const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'C', 'C++', 'C#', 'SQL'],
    style: 'bg-[#4b3425] text-[#fffaf1]',
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'Next.js',
      'Flutter',
      'Dart',
    ],
    style: 'border border-2 border-[#614833] text-[#35271f]',
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Leadership', 'Teamwork', 'Time Management'],
    style: 'bg-[#efd2b3] text-[#bd5434]',
  },
];

export default function Skills() {
  return (
    <section
      aria-labelledby="skills-title"
      className="scroll-mt-20 border-b border-[#dfc9a8] py-6 sm:py-7"
      id="skills"
    >
      <h2
        className="mb-6 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
        id="skills-title"
      >
        Skills
      </h2>

      <div className="grid gap-5">
        {skillGroups.map((group) => (
          <div className="grid gap-2" key={group.title}>
            <h3 className="text-sm font-semibold sm:text-base">{group.title}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  className={`inline-flex min-h-[34px] min-w-[120px] items-center justify-center rounded-full px-5 py-1 text-center text-xs font-medium sm:min-w-[120px] sm:text-sm ${group.style}`}
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
