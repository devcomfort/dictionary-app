import React from "react";
import List from "./List";

import styles from "./Table.module.css";

/**
 * @typedef {object} Props
 * @property {import("../../assets/Search").FreeDictionaryMeaning[]} meanings
 */

/** @type {React.FC<Props>} */
const MeaningTable = function ({ meanings }) {
	return (
		<>
			{meanings.map((_meaning) => {
				const { definitions, partOfSpeech, antonyms, synonyms } = _meaning;
				const examples = definitions
					.filter((d) => d.example)
					.map((d) => d.example);
				return (
					<>
						{/* 단어 분류 */}
						<tr>
							<th>단어 분류</th>
							<th>{partOfSpeech}</th>
						</tr>
						{/* 단어 정의 */}
						{definitions.length > 0 ? (
							<tr>
								<th rowSpan={definitions.length}>단어 정의</th>
								<td>{definitions[0].definition}</td>
							</tr>
						) : null}
						{definitions.slice(1).length > 0
							? definitions.slice(1).map((d) => {
									const { definition } = d;
									return (
										<tr>
											<td>{definition}</td>
										</tr>
									);
							  })
							: null}
						{/* 반의어 */}
						{antonyms.length > 0 ? (
							<tr>
								<th>반의어</th>
								<td className={styles.list}>
									{antonyms.map((a) => (
										<span>{a}</span>
									))}
								</td>
							</tr>
						) : null}
						{/* 동의어 */}
						{synonyms.length > 0 ? (
							<tr>
								<th>동의어</th>
								<td className={styles.list}>
									{synonyms.map((s) => (
										<span>{s}</span>
									))}
								</td>
							</tr>
						) : null}
						{/* 예시 */}
						{examples.length > 0 ? (
							<tr>
								<th>예시</th>
								<td>
									{examples.map((e, i) => (
										<List>
											{i + 1}. {e}
										</List>
									))}
								</td>
							</tr>
						) : null}
					</>
				);
			})}
		</>
	);
};

export default MeaningTable;
