import Hero from "@/components/hero";
import GridContainer from "@/components/grid";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white flex-col items-center justify-between sm:20 lg:p-28">
      <Hero />
      <GridContainer />
    </main>
  );
}
