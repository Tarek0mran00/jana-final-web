import { Link as ScrollLink } from 'react-scroll';

const NavLink = ({ href, title }) => {
  return (
    <ScrollLink
      to={href.substring(1)} // Remove the '#' from href
      smooth={true}
      duration={500}
      offset={-70} // Adjust this if you have a fixed header
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
