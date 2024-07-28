import GridContainer from "../components/grid";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-950 font-semibold text-3xl text-gray-100 flex-col items-center justify-between sm:p-16 lg:p-28">
      <h1>MEMES that show HTTP Response :)</h1>
      <GridContainer />
    </main>
  );
}
