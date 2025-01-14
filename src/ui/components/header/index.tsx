import clsx from 'clsx';
import HomeLink from './home-link';
import NavLinks from './nav-links';
import * as MobileMenu from './mobile-menu';

const links = (
  <NavLinks
    links={[
      { href: '/courses', children: 'Courses' },
      { href: '/courses/new', children: 'New' },
    ]}
  />
);

export default function Header({ className }: { className?: string }) {
  return (
    <header className="bg-gray-900">
      <MobileMenu.Provider>
        <nav
          className={clsx('flex items-center justify-between', className)}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <HomeLink />
          </div>
          <div className="flex sm:hidden">
            <MobileMenu.OpenButton />
          </div>
          <div className="hidden sm:flex">{links}</div>
        </nav>
        <MobileMenu.Dialog>
          <div className="flex items-center justify-between">
            <HomeLink />
            <MobileMenu.CloseButton />
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">{links}</div>
            </div>
          </div>
        </MobileMenu.Dialog>
      </MobileMenu.Provider>
    </header>
  );
}
