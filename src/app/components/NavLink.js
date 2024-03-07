import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-xl font-medium bg-gradient-to-r from-blue-500 to-blue-500/50 via-black bg-[200%,100%] bg-[-100%]   transition-all duration-300 ease-in-out before:content-[''] before:bg-[#54b3d6];
  before:block before:absolute bottom-[-3px] left-0 -0 h-[3px] hover:bg-[0] hover:before:w-full"
      style={{
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
/**
 * Class hover text line bottom
 * className="text-xl font-medium after:block
  after:content-[''] after:border-b-[3px] after:border-solid hover:text-blue-400 after:border-blue-400  after:scale-x-0 after:transition-transform after:duration-200 after:ease-in-out hover:after:scale-x-100" 
*/
