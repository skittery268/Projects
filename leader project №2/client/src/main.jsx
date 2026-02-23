import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { AuthProvider } from './context/Auth.context.jsx'
import "./index.css";
import { ProductsProvider } from './context/Products.context.jsx'
import { CategoriesProvider } from './context/Categories.context.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WhishListProvider } from './context/WhishList.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <CartProvider>
            <WhishListProvider>
              <App />
            </WhishListProvider>
          </CartProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </AuthProvider>
  </BrowserRouter>
)
