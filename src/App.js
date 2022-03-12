import "./App.css";
import Header from "./Components/Header.js";
import RatingList from "./Components/RatingList.js";
import ReviewsList from "./Components/ReviewsList.js";

function App() {
	return (
		<div className="App">
			<img className="bg-pattern-top-mobile" src={"images/bg-pattern-top-mobile.svg"} alt="" />

			<Header />
			<RatingList />
			<ReviewsList />
		</div>
	);
}

export default App;
