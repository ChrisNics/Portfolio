import {
  IconBrandFacebookFilled,
  IconBrandLinkedin,
  IconBrandGithubFilled
} from '@tabler/icons-react';
import { ThemeIcon } from '@mantine/core';
import Link from 'next/link';

const AbsoluteSocialMedia = () => {
  const socialMedia = [
    {
      icon: <IconBrandFacebookFilled size="1.2rem" />,
      link: 'https://www.facebook.com/BLGKingdom'
    },
    {
      icon: <IconBrandLinkedin size="1.2rem" />,
      link: 'https://www.linkedin.com/in/nicolas-christian-994a25276/'
    },
    {
      icon: <IconBrandGithubFilled size="1.2rem" />,
      link: 'https://github.com/ChrisNics'
    }
  ];

  return (
    <div className="absolute right-0 top-[40%] h-48 w-12">
      <div className="flex flex-col gap-y-3">
        {socialMedia.map((s) => (
          <Link href={s.link} key={s.link} target="_blank">
            <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
              {s.icon}
            </ThemeIcon>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AbsoluteSocialMedia;
