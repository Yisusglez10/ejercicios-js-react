import Header from "./components/Header";
import ValidatePin from "./components/ValidatePin";
import PersistentBugger from "./components/PersistentBugger";
import FindMissingLetter from "./components/FindMissingLetter";
import ArrayDiff from "./components/ArrayDiff";

function App() {
  return (
    <main className="min-h-screen w-full bg-zinc-900 text-zinc-100 px-4 py-8 flex justify-center pt-28">
      <div className="w-full max-w-6xl">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ValidatePin />
          <PersistentBugger />
          <FindMissingLetter />
          <ArrayDiff />
        </div>
      </div>
    </main>
  );
}

export default App;
