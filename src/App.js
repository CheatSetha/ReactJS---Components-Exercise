
import './App.css';
import BannerSlice from './components/BannerSlice';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

import NavBar from './components/NavBar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
 
      <NavBar />
      <BannerSlice />
     
      <main>
        <Product />
        <Feedback />
      </main>
     
      <Footer />
   

    </div>
  );
}

export default App;
