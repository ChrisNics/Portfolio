import { Loader } from '@mantine/core';

const Button = ({ loading, title, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      disabled={loading}
      className="hover:outline-3 flex items-center justify-center rounded-lg bg-orange-600 p-3 text-white transition-all duration-100 hover:bg-transparent hover:outline hover:outline-offset-2 hover:outline-orange-600">
      <div className="flex gap-x-3">
        {title} {loading && <Loader color="orange" variant="bars" size="xs" />}
      </div>
    </button>
  );
};

export default Button;
