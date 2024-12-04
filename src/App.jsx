import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import CategoryProvider from "./provider/CategoryProvider";

export default function App() {
  return (
    <CategoryProvider>
      <Header />
      <Hero />
      <Shop />
      <Footer />
    </CategoryProvider>
  );
}
