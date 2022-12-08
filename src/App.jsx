// @ts-check

import React, { useState } from "react";
import { useEffect } from "react";

// PicoCSS
import "./assets/pico.min.css";

import { FreeDictionary } from "./assets/Search";

import Searchbar from "./components/Searchbar";
import SearchResult from "./components/SearchResult";

function App() {
	/**
	 * 검색어 상태 값
	 * @template {string} 검색어 상태 자료형 지정
	 */
	const [keyword, setKeyword] = useState("");
	/**
	 * 검색 중 상태 값 ("검색 중인가?"를 기준으로 여러 이벤트를 입히기 위한 상태값)
	 * @template {boolean} 검색 중 상태 값
	 */
	const [isSearching, setIsSearching] = useState(false);

	/**
	 * 검색 결과 저장
	 * @template {import("./assets/Search").FreeDictionaryResult[]} 검색 결과
	 */
	const [result, setResult] = useState([]);

	/** 검색 상태에 대한 옵저버 */
	useEffect(() => {
		if (!keyword) {
			if (isSearching) {
				setResult([]);
			}

			setIsSearching(false);
			return;
		}

		if (isSearching) {
			const _k = keyword.split(",").map((k) => k.trim());

			Promise.all(
				_k.map((k) => FreeDictionary(k).then((_result) => _result._json()))
			)
				.then((_results) => {
					setResult(_results);
					console.log(_results);
				})
				.then(() => setIsSearching(false));
		}
	}, [isSearching]);

	/** 결과 상태 변경 옵저버 */
	useEffect(() => {
		console.log(result);
	}, [result]);

	return (
		<div className="App container">
			<h1>Dictionary.js</h1>
			<Searchbar
				isSearching={isSearching}
				keyword={keyword}
				setSearchKeyword={setKeyword}
				setIsSearching={setIsSearching}
			></Searchbar>
			<table className="result-table">
				{result.length > 0 ? (
					result.map((r) => {
						return <SearchResult result={r}></SearchResult>;
					})
				) : (
					<SearchResult result={[]}></SearchResult>
				)}
			</table>
		</div>
	);
}

export default App;
