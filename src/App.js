import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Footer from './Footer';
import Team from './Team';
import Faqs from './Faq';
import Product from './Product';


function App() {
  return (
    <>
        <Navbar />
        <Hero /> 
        <About />
        <Services />
        <Team />
        <Faqs />
        <Product />
        <Footer />
    </>
  );
}

export default App;
