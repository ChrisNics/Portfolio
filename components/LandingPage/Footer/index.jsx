import SocialMedia from './SocialMedia';
import {
  IconBrandGithubFilled,
  IconBrandFacebookFilled,
  IconBrandLinkedin
} from '@tabler/icons-react';
import GetInTouch from './GetInTouch';

const socialMedia = [
  {
    icon: <IconBrandFacebookFilled size="1.2rem" />,
    link: 'https://www.facebook.com/BLGKingdom',
    title: '@BLGKingdom'
  },
  {
    icon: <IconBrandLinkedin size="1.2rem" />,
    link: 'https://www.linkedin.com/in/nicolas-christian-994a25276/',
    title: '@nicolas-christian-994a25276'
  },
  {
    icon: <IconBrandGithubFilled size="1.2rem" />,
    link: 'https://github.com/ChrisNics',
    title: '@ChrisNics'
  }
];

const Footer = () => {
  return (
    <footer id="find-me" className="bg-neutral-800">
      <div className="container mx-auto p-10">
        <h3 className="mb-5 text-white">Find me on:</h3>
        <div className="flex flex-col gap-y-5">
          {socialMedia.map((s) => (
            <SocialMedia icon={s.icon} title={s.title} href={s.link} key={s.link} />
          ))}
        </div>

        <div className="mt-10">
          <GetInTouch />
        </div>
      </div>

      <p className="p-3 text-center text-white">{`© ${new Date().getFullYear()} All Rights Reserved`}</p>
    </footer>
  );
};

export default Footer;
