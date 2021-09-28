import "./App.css";
import { useState } from "react";

function App() {
	const movies = {
		comedy: [
			{
				Name: "Welcome",
				Description:
					"Welcome is a series of Indian comedy films, produced by Firoz Nadiadwala and directed by Anees Bazmee",
				Rating: "8.4/10",
			},
			{
				Name: "Dhamaal",
				Description:
					"Dhamaal is a series of Indian comedy films directed and co-produced by Indra Kumar. It stars Ritesh",
				Rating: "8/10",
			},
			{
				Name: "Housefull",
				Description:
					"Housefull is an Indian comedy film series. The first two films Housefull and Housefull 2 were directed by Sajid Khan.",
				Rating: "7.5/10",
			},
		],
		thriller: [
			{
				Name: "Andadhun",
				Description:
					"Akash, a piano player pretending to be visually-impaired, unwittingly becomes entangled in a number of problems as he witnesses the murder of a former film actor.",
				Rating: "8.3/10",
			},
			{
				Name: "Drishyam",
				Description:
					"When the disappearance of a policewoman's son threatens to ruin Vijay's family, he leaves no stone unturned in order to shield his family.",
				Rating: "8.1/10",
			},
			{
				Name: "Detective Byomkesh",
				Description:
					"Byomkesh, fresh out of college, agrees to investigate the disappearance of Bhuvan, a chemist.",
				Rating: "7.5/10",
			},
		],
		crime: [
			{
				Name: "fast and furious 8",
				Description:
					"Dom encounters a mysterious woman, Cipher, who gets him involved in the world of terrorism. ",
				Rating: "8.5/10",
			},
			{
				Name: "Wolf of wall street",
				Description:
					"Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash.",
				Rating: "8/10",
			},
			{
				Name: "Talvar",
				Description:
					"A hardened investigator deals with conflicting perspectives involving a brutal double murder. ",
				Rating: "7.5/10",
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
							<span className="movie-description">{movie.Description}</span>
							<span className="movie-rating">{movie.Rating}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
