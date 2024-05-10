import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Services from "./Components/Services";

function App() {
  return (
  <>
      <Navbar />
      <Intro/>
      <About/>
      <Services/>
      <Product/>
      <Contact/>
   <Footer/>
    {/* <div className="bg-black w-full h-screen">
    </div> */}
  </>
  );
}

export default App;
