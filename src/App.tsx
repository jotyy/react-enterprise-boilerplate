import reactLogo from "./assets/react.svg";

function App() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center space-y-6">
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-20 w-20 animate-bounce" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">React Enterprise Template</h1>
      <p className="text-base text-slate-400">Click on the Vite and React logos to learn more</p>
    </main>
  );
}

export default App;
