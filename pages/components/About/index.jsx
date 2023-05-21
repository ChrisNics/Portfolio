import { Prism } from '@mantine/prism';

const demoCode = `const myInfo = {
    name: 'Christian Nicolas',
    university: 'University of Caloocan City',
    course: 'Bachelor of Science in Information System',
    internship: {
      company: 'Volenday',
      duration: 'four months',
      position: 'Software Developer',
    },
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
      'Node.js',
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'Mantine',
      'Zustand',
      'Redux',
      'Java',
      'SQLite',
      'VB.NET',
      'Pug',
    ],
    databases: ['MongoDB', 'Firebase', 'SQLite'],
  };
  
  console.log('My name is ' + myInfo.name + ', studying at ' + myInfo.university + ' with a course of ' + myInfo.course + '.');
  console.log('I have an Internship Experience as a ' + myInfo.internship.position + ' in ' + myInfo.internship.company + ' for the span of ' + myInfo.internship.duration + '.');
  console.log('My Skills include: ' + myInfo.skills.join(', ') + '.');
  console.log('I also have experience in databases such as ' + myInfo.databases.join(', ') + '.');`;

const About = () => {
  return (
    <section className="min-h-screen bg-black">
      <div className="container mx-auto px-10 py-5">
        <h1 className="title">About Me</h1>
        <div>
          <Prism colorScheme="dark" language="js">
            {demoCode}
          </Prism>
        </div>
      </div>
    </section>
  );
};

export default About;
