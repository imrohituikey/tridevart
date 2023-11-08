import { useState } from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <main className="px-20">
        <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
