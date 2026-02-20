import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { AuthProvider } from './context/Auth.context.jsx'
import "./index.css";
import { ProductsProvider } from './context/Products.context.jsx'
import { CategoriesProvider } from './context/Categories.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoriesProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </CategoriesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
