import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Tasks from "./pages/Tasks"
import Nav from "./components/Nav"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
	return (
		<main className="min-h-screen bg-slate-100 text-slate-900">
			<Nav />

			<section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
					<Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
				</Routes>
			</section>
		</main>
	)
}

export default App