import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" />
					<Route path="*" />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
