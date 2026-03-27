import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify"
import { AuthProvider } from './context/AuthContext.jsx'
import { TasksProvider } from './context/TasksContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <TasksProvider>
        <App />
        <ToastContainer position='bottom-right' />
      </TasksProvider>
    </AuthProvider>
  </BrowserRouter>,
)
