import SocialMedia from './SocialMedia';
import {
  IconBrandGithubFilled,
  IconBrandFacebookFilled,
  IconBrandTwitter
} from '@tabler/icons-react';
import GetInTouch from './GetInTouch';

const Footer = () => {
  return (
    <footer id="find-me" className="bg-neutral-800">
      <div className="container mx-auto p-10">
        <h3 className="mb-5 text-white">Find me on:</h3>
        <div className="flex flex-col gap-y-5">
          <SocialMedia icon={<IconBrandGithubFilled />} title="@chrisnics" />
          <SocialMedia icon={<IconBrandFacebookFilled />} title="@smeb" />
          <SocialMedia icon={<IconBrandTwitter />} title="@smebber" />
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
