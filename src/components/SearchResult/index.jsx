// @ts-check

import React from "react";
import { useState } from "react";

import MeaningTable from "./MeaningTable";
import AudioControl from "./AudioControl";
import CollapsibleCard from "../CollapsibleCard";

import styles from "./index.module.css";

/**
 * @typedef {object} Props
 * @property {import("../../assets/Search").FreeDictionaryResult} result
 */

/** @type {React.FC<Props>} */
const SearchResult = function ({ result }) {
	if (result.title) {
		return (
			<>
				<p>
					정보 없음
					<br />
					{`(${result.title})`}
				</p>
			</>
		);
	}

	if (!(result instanceof Array))
		return (
			<>
				<p>알 수 없는 자료형</p>
			</>
		);

	if (result.length === 0)
		return (
			<>
				<p>결과 없음</p>
			</>
		);

	return (
		<table className="result-table">
			<div className={`grid ${styles["grid-color"]}`}>
				<span>결과 번호</span>
				<span>단어</span>
				<span>발음 기호 IPA</span>
				<span>음성</span>
			</div>

			{/* 결과 정보 */}
			{result.map((d, i) => {
				const { meanings, phonetics, word } = d;

				/** @template {boolean} collapsible 활성 상태 */
				const [isActive, setIsActive] = useState(false);

				return (
					<div>
						<div
							className={`grid ${styles["grid-color"]}`}
							onClick={(e) => setIsActive(!isActive)}
						>
							<span>{i + 1}</span>
							<span>{word}</span>
							<span
								style={{
									display: "flex",
									flexDirection: "column",
									margin: "auto",
								}}
							>
								{phonetics.map((p, i, arr) => (
									<span>{p.text}</span>
								))}
							</span>
							<span
								style={{
									display: "flex",
									flexDirection: "column",
									margin: "auto",
								}}
							>
								{phonetics.length === 0 ? (
									<span>데이터 없음</span>
								) : (
									phonetics.map((_p) => {
										const { audio } = _p;
										return audio ? (
											<AudioControl url={audio} />
										) : (
											<span>데이터 없음</span>
										);
									})
								)}
							</span>
						</div>
						<CollapsibleCard isActive={isActive}>
							<table>
								<MeaningTable meanings={meanings}></MeaningTable>
							</table>
						</CollapsibleCard>
					</div>
				);
			})}
		</table>
	);
};

export default SearchResult;
