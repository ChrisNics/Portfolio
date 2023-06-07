import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

const links = [
  {
    title: 'Projects',
    link: '#projects'
  },
  {
    title: 'About',
    link: '#about'
  },
  {
    title: 'Find Me',
    link: '#find-me'
  }
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const MobileNavigation = () => {
    return (
      <div className="absolute top-0 z-20 w-full bg-neutral-800 py-5 lg:hidden">
        <div className="mt-16 flex flex-col items-center justify-center text-lg text-white">
          <ul className="flex flex-col gap-y-3">
            {links.map((link) => (
              <Link key={link.link} href={link.link} onClick={toggle} scroll={false}>
                <li className="hover:text-orange-600 hover:transition-all hover:duration-1000">
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <header className="relative h-16 bg-transparent">
      {opened && <MobileNavigation />}
      <div className="flex justify-between p-5">
        <h2 className="z-30 text-white">PORTFOLIO</h2>

        <ul className="mr-10 hidden gap-x-10  text-white lg:flex">
          {links.map((link) => (
            <Link key={link.link} href={link.link} onClick={toggle} scroll={false}>
              <li className="hover:text-orange-600 hover:transition-all hover:duration-1000">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>

        <Burger
          opened={opened}
          onClick={toggle}
          size="xs"
          color="white"
          className="z-30 lg:hidden"
        />
      </div>
    </header>
  );
};

export default Header;
