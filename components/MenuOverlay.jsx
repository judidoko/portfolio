// import NavLink from "./NavLink";

import Link from "next/link";

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <ul className="flex flex-col bg-white dark:bg-dark py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            onClick={() => setNavbarOpen(false)}
            href={link.path}
            className="block py-2 pl-3 pr-4 text-dark hover:text-cyan-950 hover:border-b-2 hover:border-cyan-500 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 dark:hover:text-white"
          >
            {link.title}
          </Link>
        </li>
      ))}

      {/* {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
          />
        </li>
      ))} */}
    </ul>
  );
};

export default MenuOverlay;
