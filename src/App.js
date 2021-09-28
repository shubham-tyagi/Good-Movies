import "./App.css";
import { useState } from "react";

function App() {
	const movies = {
		comedy: [
			{
				Name: "Welcome",
				Rating: "8.4/10",
			},
			{
				Name: "Dhamaal",
				Rating: "8/10",
			},
		],
		thriller: [
			{
				Name: "Andadhun",
				Rating: "8.3/10",
			},
			{
				Name: "Drishyam",
				Rating: "8.1/10",
			},
			{
				Name: "Detective Byomkesh",
				Rating: "7.5/10",
			},
		],
		crime: [
			{
				Name: "fast and furious 8",
				Rating: "8.5/10",
			},
			{
				Name: "Wolf of wall street",
				Rating: "8/10",
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
			<h1>🎥 Good Movies</h1>
			<hr></hr>
			<p>Checkout my favourite movies , select a genre to get started</p>
			<div class="movie-genre">
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
			</div>

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
