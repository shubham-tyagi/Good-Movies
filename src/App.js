import "./App.css";
import { useState } from "react";

function App() {
	const movies = {
		comedy: [
			{
				Name: "Dhamaal",
				Rating: 8.4,
			},
			{
				Name: "Dhol",
				Rating: 8.4,
			},
		],
		thriller: [
			{
				Name: "Brooklyn Nine-Nine",
				Rating: 8.4,
			},
			{
				Name: "Brooklyn Nine-Nine",
				Rating: 8.4,
			},
		],
		crime: [
			{
				Name: "Brooklyn Nine-Nine",
				Rating: 8.4,
			},
			{
				Name: "Brooklyn Nine-Nine",
				Rating: 8.4,
			},
		],
	};

	let genres = Object.keys(movies);
	const [selectedGenre, setGenre] = useState("comedy");
	function onBtnClickHandler(genre) {
		// genre = event.target.innerHTML;
		// console.log("henre = ", genre);
		setGenre(genre);
	}

	return (
		<div className="App">
			<h1>hello</h1>
			{genres.map((genre) => {
				return (
					<button
						onClick={() => {
							onBtnClickHandler(genre);
						}}
						className="btn-genre"
					>
						{genre}
					</button>
				);
			})}

			<ul className="list">
				{movies[selectedGenre].map((movie) => {
					return (
						<li class="list-item">
							<span className="movie-name">{movie.Name}</span>
							<span className="movie-rating">{movie.Rating}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
