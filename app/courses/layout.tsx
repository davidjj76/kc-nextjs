import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center h-20 px-6 bg-header-bg text-header-text">
        <a href="/">
          <Image
            src="/Keepcoding.webp"
            width={202}
            height={48}
            alt="Keepcoding tech school"
          />
        </a>
        <h2>Courses</h2>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
