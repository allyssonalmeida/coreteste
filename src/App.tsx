import { Fragment } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Shelf from './components/Shelf';

import './global.scss';

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <main>
        <Shelf />
      </main>
    </Fragment>
  );
}

export default App;
