import { Metadata } from "next";
import Header from "@/ui/components/header";

export const metadata: Metadata = {
  title: "Courses",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header className="mx-auto max-w-7xl p-6 lg:px-8" />
      <main>
        <div className="mx-auto max-w-7xl flex-1 p-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
