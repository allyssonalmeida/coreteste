import { Fragment } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import Shelf from './components/Shelf';
import { CartStorage } from './context/CartContext';

import './global.scss';

function App() {
  return (
    <Fragment>
      <CartStorage>
        <Header />
        <Banner />
        <main>
          <Shelf />
          <Newsletter />
        </main>
        <Footer />
      </CartStorage>
    </Fragment>
  );
}

export default App;
