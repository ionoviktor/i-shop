import './App.css';

import { Route, Routes } from 'react-router';
import { Header } from './components/header/header';
import { BestSellers } from './components/BestSellers/BestSellers';
import { Product } from './components/Product/Product';


function App() {
  return (
    <div className='appContainer'>
      <Header />
      <Routes>
        <Route path='/' element={<BestSellers />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App