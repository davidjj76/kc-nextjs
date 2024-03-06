'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link
            href="/courses"
            className={clsx('mr-4 underline-offset-4', {
              underline: pathname === '/courses',
            })}
          >
            Catalog
          </Link>
        </li>
        <li>
          <Link
            href="/courses/new"
            className={clsx('underline-offset-4', {
              underline: pathname === '/courses/new',
            })}
          >
            New
          </Link>
        </li>
      </ul>
    </nav>
  );
}
