export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center h-20 px-6 border-solid border-b-2 bg-sky-400">
        <h1 className="text-white font-semibold text-xl">Hello, Keepcoders!</h1>
      </header>
      <main className="flex-1 text-gray-800 p-6">
        <p className="mb-2">Welcome to the Keepcoding React Advanced Module</p>
        <p>
          Let&#39;s start with <strong>Next.js</strong>
        </p>
      </main>
    </div>
  );
}
