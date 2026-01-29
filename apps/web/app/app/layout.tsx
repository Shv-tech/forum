import { Sidebar } from "../../components/layout/Sidebar";
import { TopNav } from "../../components/layout/TopNav";
import { Footer } from "../../components/layout/Footer";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopNav />

        <main className="flex-1 px-12 py-10">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
