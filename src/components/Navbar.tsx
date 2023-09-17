import NavbarItem, { NavbarItemProps } from "./NavbarItem";

const NavbarItems: NavbarItemProps[] = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "SKILLS",
    path: "#skills",
  },
  {
    label: "PROJECTS",
    path: "#projects",
  },
];

const Navbar = () => {
  return (
    <div className="flex border border-b border-gray-300 sticky top-0 z-[99] bg-white">
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex">
          {NavbarItems.map(({ label, path }, index) => (
            <NavbarItem key={index} label={label} path={path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
