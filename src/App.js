import Header from './components/Header';
import 'swiper/swiper-bundle.min.css';
import './App.css';
import Slider from './components/Slider';
import Products from './components/Products';
import BestSeller from './components/BestSeller';
import Footer from './components/Footer';
import { BasketProvider } from './contexts/BasketContext';
function App() {
  return (
    <BasketProvider>
      <div className='container'>
        <Header />
        <Slider />
        <Products />
        <BestSeller />
        <Footer />
      </div>
    </BasketProvider>
  );
}

export default App;
