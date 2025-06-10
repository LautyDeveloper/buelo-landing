import "./App.css";
import AboutUs from "./views/about-us/about-us";
import Hero from "./views/Hero/hero.jsx";
import "./css/vars.css";
import Testimonials from "./views/testimonials/testimonials.jsx";
import Separator from "./views/separator/separator.jsx";
import Footer from "./views/footer/footer.jsx";
import FAQs from "./views/FAQs/faqs.jsx";

function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Testimonials />
      <Separator />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
