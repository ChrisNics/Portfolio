import Link from 'next/link';
const Button = ({ title, icon, href, ...otherProps }) => {
  return (
    <Link href={href} target="_blank" className="duration-100 hover:translate-x-2">
      <button {...otherProps}>
        <h3 className="text-xs uppercase">{title}</h3>
        {icon}
      </button>
    </Link>
  );
};

export default Button;
