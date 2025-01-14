import { ResolvingMetadata } from 'next';
import { getPageTitle } from '@/lib/metadata';
import Header from '@/ui/components/header';

export const generateMetadata = async (
  _props: unknown,
  parent: ResolvingMetadata,
) => {
  const parentTitle = (await parent).title?.absolute;
  return {
    title: getPageTitle({ parentTitle, title: 'Courses' }),
  };
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header className="mx-auto max-w-7xl p-6 lg:px-8" />
      <main>
        <div className="mx-auto max-w-7xl flex-1 p-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
