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
    <div className="flex border border-b border-gray-200">
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
