import { useState } from "react";
import FreeDictionary from "./components/FreeDictionary";
import "./App.css";

import "../node_modules/papercss/dist/paper.min.css";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
	const [keyword, setKeyword] = useState("Apple");

	return (
		<div className="App">
			<h1>Simple Dictionary!</h1>
			<h3>A simple demo for new version of dictionary</h3>
			<form
				action=""
				id="search-bar"
				className="search-bar"
				onSubmit={(e) => {
					e.preventDefault();
					const _formData = new FormData(e.target as HTMLFormElement);
					const _keyword = _formData.get("search-keyword") as string | null;

					_keyword !== null && setKeyword(_keyword);
				}}
			>
				<input
					type="text"
					className="search-keyword"
					name="search-keyword"
					id="search-keyword"
					placeholder="Type the word want to know... (e.g. Apple)"
				/>

				<button type="submit">Search</button>
			</form>
			<br />

			<FreeDictionary keyword={keyword}></FreeDictionary>
		</div>
	);
}

export default App;
