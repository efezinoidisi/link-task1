import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
