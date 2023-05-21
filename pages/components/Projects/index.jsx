import Card from './Card';
import Link from 'next/link';

const Projects = () => {
  return (
    <section className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-10 py-5">
        <h1 className="title">Projects</h1>
        <div className="flex flex-col gap-y-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="mt-10">
          <h1 className="title">Other Projects</h1>
          <div>
            <ul>
              <Link href="/">
                <li className="transition-all duration-100 hover:translate-x-3.5 hover:text-blue-400">
                  Inventory Management App (Java | SQLite)
                </li>
                <li className="transition-all duration-100 hover:translate-x-3.5 hover:text-blue-400">
                  Inventory Management App (Java | SQLite)
                </li>
                <li className="transition-all duration-100 hover:translate-x-3.5 hover:text-blue-400">
                  Inventory Management App (Java | SQLite)
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
