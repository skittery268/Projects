import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";

const App = () => {
    return (
		<>
			<Nav />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/wishlist" element={<p>Wishlist Page</p>} />
					<Route path="/products/:categori" element={<Products />} />
					<Route path="/product/:id" element={<Product />} />
				</Routes>
			</main>

			<Footer />
		</>
	)
}

export default App;