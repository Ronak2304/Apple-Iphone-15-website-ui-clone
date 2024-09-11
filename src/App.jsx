import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";

function App() {
  return (
    <div>
      <main>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
      </main>
    </div>
  );
}

export default App;
