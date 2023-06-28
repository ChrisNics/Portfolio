import Card from './Card';
import data from '../../../data.json';

const Projects = () => {
  return (
    <section id="projects" className=" bg-neutral-900 text-white xl:p-20">
      <div className="container mx-auto px-10 py-5 md:py-10">
        <h1 className="title">Recent Projects</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {data.map((d, i) => (
            <Card index={i} title={d.title} image={d.heroImage} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
