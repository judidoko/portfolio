import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-dark hover:text-cyan-950 hover:border-b-2 hover:border-cyan-500 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 dark:hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
