import Link from "next/link";

export type NavbarItemProps = {
  label: string;
  path: string;
};

export default function NavbarItem({ label, path }: NavbarItemProps) {
  return (
    <Link href={path}>
      <p className="px-4 py-3 hover:font-semibold">{label}</p>
    </Link>
  );
}
