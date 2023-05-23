import Card from './Card';
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="projects" className=" bg-neutral-900 text-white">
      <div className="container mx-auto px-10 py-5 md:py-10">
        <h1 className="title">Projects</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center justify-center gap-y-3 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            <h6 className="transition-all duration-100 hover:translate-x-3.5 hover:text-orange-600">
              Inventory Management App (Java | SQLite)
            </h6>
            <h6 className="transition-all duration-100 hover:translate-x-3.5 hover:text-blue-400">
              Inventory Management App (Java | SQLite)
            </h6>
            <h6 className="transition-all duration-100 hover:translate-x-3.5 hover:text-blue-400">
              Inventory Management App (Java | SQLite)
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
