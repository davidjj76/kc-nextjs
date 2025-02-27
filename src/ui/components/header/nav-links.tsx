import NavLink from "./nav-link";

export default function NavLinks({
  links,
}: {
  links: Array<{ href: string; children: React.ReactNode }>;
}) {
  return (
    <ul className="gap-x-12 sm:flex">
      {links.map((link) => (
        <li
          key={link.href}
          className="px-3 py-2 text-base leading-7 font-semibold text-gray-100 max-sm:-mx-3 max-sm:rounded-lg max-sm:hover:bg-gray-800 sm:p-0 sm:text-sm sm:leading-6"
        >
          <NavLink href={link.href}>{link.children}</NavLink>
        </li>
      ))}
    </ul>
  );
}
