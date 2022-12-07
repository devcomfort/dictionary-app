// @ts-check

import React from "react";
import { useState } from "react";

import MeaningTable from "./MeaningTable";
import AudioControl from "./AudioControl";
import CollapsibleCard from "../CollapsibleCard";
import List from "./List";
import Rows from "./Rows";

import TableCSS from "./Table.module.css";

/**
 * @typedef {object} Props
 * @property {import("../../assets/Search").FreeDictionaryResult} result
 */

/** @type {React.FC<Props>} */
const SearchResult = function ({ result }) {
	if (result.title)
		return (
			<Rows>
				<span>정보 없음</span>
				{`(${result.title})`}
			</Rows>
		);

	if (!(result instanceof Array))
		return (
			<Rows>
				<span>알 수 없는 자료형</span>
			</Rows>
		);

	if (result.length === 0)
		return (
			<Rows>
				<span>결과 없음</span>
			</Rows>
		);

	/** @template {boolean[]} */
	const [resultCollapsedStates, setResultCollapsedStates] = useState(
		new Array(result.length).fill(false)
	);

	return (
		<table className="result-table">
			<Rows>
				<span>결과 번호</span>
				<span>단어</span>
				<span>발음 기호 IPA</span>
				<span>음성</span>
			</Rows>

			{/* 결과 정보 */}
			{result.map((d, i) => {
				const { meanings, phonetics, word } = d;

				return (
					<div
						onClick={(e) => {
							e.stopPropagation();
							setResultCollapsedStates(
								resultCollapsedStates.map((v, _i) => (_i === i ? !v : v))
							);
						}}
					>
						<Rows>
							<span>{i + 1}</span>
							<span>{word}</span>
							<List>
								{phonetics.map((p) => (
									<span>{p.text}</span>
								))}
							</List>
							<List>
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
							</List>
						</Rows>
						<CollapsibleCard isActive={resultCollapsedStates[i]}>
							<table className={TableCSS.table}>
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
