import { Burger } from '@mantine/core';

const Header = () => {
  return (
    <header className="h-16 bg-transparent">
      <div className="flex justify-between p-5">
        <h2 className="text-white">Logo</h2>
        <Burger opened={false} size="xs" color="white" />
      </div>
    </header>
  );
};

export default Header;
