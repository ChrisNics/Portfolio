import { IconArrowAutofitRight, IconBrandGithubFilled } from '@tabler/icons-react';
import Gallery from '@/components/Project/Gallery';
import Button from '@/components/Project/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { Tooltip } from '@mantine/core';
import Link from 'next/link';
import data from '../../data.json';
import slugify from 'slugify';
import { useRouter } from 'next/router';

const Project = ({ currentProject }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative min-h-screen bg-black text-white">
      <Link href="/">
        <Tooltip label="Back to Homepage" color="orange" position="left" withArrow>
          <div className="fixed bottom-5 right-5 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-400 p-3 shadow-md">
            <IconArrowLeft />
          </div>
        </Tooltip>
      </Link>

      <div className="container mx-auto text-center">
        <div
          className="px-5 py-12"
          style={{
            background: `linear-gradient(100deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5970763305322129) 100%), url(${currentProject.heroImage}) center/cover no-repeat`
          }}>
          <div className="flex flex-col items-center justify-center gap-y-10 ">
            <div>
              <h1>{currentProject.title}</h1>
              <h6>{currentProject.technologies}</h6>
            </div>

            <div className="flex flex-col gap-y-3">
              <Button
                href={currentProject.websiteUrl}
                title="Visit Website"
                icon={<IconArrowAutofitRight />}
                className="flex items-center justify-center gap-x-2 rounded-xl bg-red-600 px-12 py-2 font-bold"
              />

              <Button
                href={currentProject.codeUrl}
                title="View Code"
                icon={<IconBrandGithubFilled />}
                className="flex items-center justify-center gap-x-2 rounded-xl bg-white px-12 py-2 font-bold text-black"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-20 p-5">
          <p className="text-xs">{currentProject.descriptions}</p>
          <Gallery images={currentProject.images} />
        </div>
      </div>
    </section>
  );
};

export const getStaticPaths = async () => {
  const paths = data.map((d) => ({
    params: { project: slugify(d.title, { lower: true }) }
  }));

  return {
    paths,
    fallback: true // false or "blocking"
  };
};

export const getStaticProps = async ({ params }) => {
  const { project } = params;
  const slugifiedName = slugify(project, { lower: true });
  const currentProject = data.find((d) => slugify(d.title, { lower: true }) === slugifiedName);

  if (!currentProject) {
    return {
      redirect: {
        destination: '/'
      }
    };
  }

  return { props: { currentProject } };
};

export default Project;
