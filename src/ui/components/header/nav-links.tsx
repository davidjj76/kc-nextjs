import NavLink from './nav-link';

export default function NavLinks({
  links,
}: {
  links: Array<{ href: string; children: React.ReactNode }>;
}) {
  return (
    <ul className="sm:flex gap-x-12">
      {links.map(link => (
        <li
          key={link.href}
          className="max-sm:-mx-3 max-sm:rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 max-sm:hover:bg-gray-800 sm:text-sm sm:leading-6 sm:p-0"
        >
          <NavLink href={link.href}>{link.children}</NavLink>
        </li>
      ))}
    </ul>
  );
}
