import {
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandGithubFilled
} from '@tabler/icons-react';
import { ThemeIcon } from '@mantine/core';
import Link from 'next/link';

const AbsoluteSocialMedia = () => {
  const socialMedia = [
    {
      icon: <IconBrandFacebookFilled size="1.2rem" />,
      link: '/facebook'
    },
    {
      icon: <IconBrandTwitterFilled size="1.2rem" />,
      link: '/twitter'
    },
    {
      icon: <IconBrandGithubFilled size="1.2rem" />,
      link: '/github'
    }
  ];

  return (
    <div className="absolute h-48 w-12 right-0 top-[200px]">
      <div className="flex flex-col gap-y-3">
        {socialMedia.map((s) => (
          <Link href={s.link}>
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
