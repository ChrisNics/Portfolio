import { ThemeIcon } from '@mantine/core';
import Link from 'next/link';

const SocialMedia = ({ icon, title, href }) => {
  return (
    <Link href={href} target="_blank">
      <div className="flex items-center gap-x-3">
        <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
          {icon}
        </ThemeIcon>
        <p className="text-orange-400">{title}</p>
      </div>
    </Link>
  );
};

export default SocialMedia;
