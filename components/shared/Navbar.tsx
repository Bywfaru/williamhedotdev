import Link from "next/link";

type NavbarMenuItemProps = {
  menuItem: {
    label: string;
    destination: string;
  };
};

type NavbarProps = {
  menuItems: NavbarMenuItemProps["menuItem"][];
};

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({ menuItem }) => {
  const { destination, label } = menuItem;

  return <Link href={destination}>{label}</Link>;
};

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  return (
    <nav>
      {menuItems.map((menuItem, index) => (
        <NavbarMenuItem key={index} menuItem={menuItem} />
      ))}
    </nav>
  );
};

export default Navbar;
