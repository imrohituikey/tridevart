import { useState } from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Header />
        <main className="sm:px-20">
        <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
