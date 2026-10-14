
import MainLayout from "./layouts/MainLayout"
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials/Testimonials";
import Faq from "./components/Faq/Faq";
import NavigationCards from "./components/NavegationCards/NavigationCards";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <MainLayout>
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Faq />
      <NavigationCards />
      <Footer />
    </MainLayout>
  );
}

export default App;
