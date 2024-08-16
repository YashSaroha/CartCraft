import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import SearchResults from "./pages/SearchResults"
import Wishlist from "./pages/Wishlist"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ProtectedRoutes from "@/routes/ProtectedRoutes";
// import PublicRoutes from "@/routes/PublicRoutes";
// import { AuthProvider } from "@/context/Auth";

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