import "./App.css";
import AboutUs from "./views/about-us/about-us";
import Hero from "./views/Hero/Hero";
import "./css/vars.css";
import Testimonials from "./views/testimonials/testimonials";
import Separator from "./views/separator/separator";

function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Testimonials />
      <Separator />
    </>
  );
}

export default App;
