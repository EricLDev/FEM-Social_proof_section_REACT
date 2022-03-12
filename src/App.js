import "./App.css";
import Header from "./Components/Header.js";
import RatingList from "./Components/RatingList.js";
import ReviewsList from "./Components/ReviewsList.js";

function App() {
	return (
		<div className="App">
			<Header />
			<RatingList />
			<ReviewsList />
		</div>
	);
}

export default App;
