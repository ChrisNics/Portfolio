import { ThemeIcon } from '@mantine/core';

const SocialMedia = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-x-3">
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        {icon}
      </ThemeIcon>
      <p className="text-orange-400">{title}</p>
    </div>
  );
};

export default SocialMedia;
