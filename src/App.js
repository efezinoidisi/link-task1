import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/ErrorPage";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";

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
