import reactLogo from "@/assets/react.svg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Icons } from "@/components/icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center space-y-6">
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-20 w-20 animate-bounce" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">React Enterprise Template</h1>
      <Button onClick={() => setCount((prev) => prev + 1)}>Clicked {count} times</Button>

      <p className="text-base text-slate-400">Click on the Vite and React logos to learn more</p>

      <div className="flex flex-row items-center justify-center space-x-4">
        <a
          href="https://github.com/jotyy"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 transition hover:opacity-80"
        >
          <Icons.github className="h-4 w-4" />
        </a>
        <a
          href="https://twitter.com/jotyy3"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 transition hover:opacity-80"
        >
          <Icons.twitter className="h-4 w-4" />
        </a>
      </div>
    </main>
  );
}

export default App;
