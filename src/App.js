import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/ErrorPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="*" element={<Error />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
