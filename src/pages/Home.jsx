import Education from '../components/Education.jsx';
import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 md:px-10">
      <Hero />
      <Education />
      <Skills />
    </main>
  );
}