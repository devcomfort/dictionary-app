// @ts-check

import React from "react";
import { useState } from "react";

import MeaningTable from "./MeaningTable";
import AudioControl from "./AudioControl";
import CollapsibleCard from "../CollapsibleCard";

import styles from "./index.module.css";
import RowResult from "./RowResult";

/**
 * @typedef {object} Props
 * @property {import("../../assets/Search").FreeDictionaryResult} result
 */

/** @type {React.FC<Props>} */
const SearchResult = function ({ result }) {
	const [collapsibleStates, setCollapsibleStates] = useState([]);

	if (result.title)
		return (
			<RowResult>
				<span>정보 없음</span>
				{`(${result.title})`}
			</RowResult>
		);

	if (!(result instanceof Array))
		return (
			<RowResult>
				<span>알 수 없는 자료형</span>
			</RowResult>
		);

	if (result.length === 0)
		return (
			<RowResult>
				<span>결과 없음</span>
			</RowResult>
		);

	return (
		<table className="result-table">
			<RowResult>
				<span>결과 번호</span>
				<span>단어</span>
				<span>발음 기호 IPA</span>
				<span>음성</span>
			</RowResult>

			{/* 결과 정보 */}
			{result.map((d, i) => {
				const { meanings, phonetics, word } = d;

				return (
					<div>
						<RowResult>
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
						</RowResult>
						<CollapsibleCard isActive={false}>
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
