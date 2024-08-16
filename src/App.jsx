import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ProductDetail from "./components/ProductDetail"
import Cart from "./components/Cart"
import SearchResults from "./components/SearchResults"
import Wishlist from "./components/Wishlist"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <CartProvider >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/products/category/:category' element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App