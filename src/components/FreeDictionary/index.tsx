import React from "react";
import Skeleton from "react-loading-skeleton";
import { useAsync } from "react-async";
import TDefinition from "./TDefinition";

export interface Phonetic {
	/** IPA 국제 음성 기호 */
	text: string;
	/** 음성 정보 */
	audio: string;
}

export interface Definition {
	definition: string;
	example: string;
	synonyms: any[];
	antonyms: any[];
}

export interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
}

export interface FreeDictionaryResult {
	word: string;
	phonetic: string;
	phonetics: Phonetic[];
	origin: string;
	meanings: Meaning[];
}

/** FreeDictionary API에서 데이터 가져오는 함수 */
const FreeDictionary = async ({ keyword }: { keyword: string }) => {
	const _fetch = await fetch(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
	);

	if (!_fetch.ok) throw new Error(`Error: status code (${_fetch.status})`);

	return await _fetch.json();
};

const FreeDictionaryComponent = function ({ keyword }: { keyword: string }) {
	// 아래 내용은 제네릭이 아니라 별도의 타입으로 처리되어 있어 오류가 발생함.
	// 다만 제네릭으로 인한 오류 표기를 수정하기 위해 코드 수정 후 PR 하는 것은 귀찮으니
	// 그냥 무시.
	// @ts-ignore
	const {
		data,
		error,
		isLoading,
	}: {
		data: FreeDictionaryResult[];
		error: any;
		isLoading: any;
		// @ts-ignore
	} = useAsync({
		promiseFn: FreeDictionary,
		keyword,
		watch: keyword,
	});

	return (
		<div className="result">
			<table>
				<thead>
					<tr>
						<th colSpan={3}>
							<span className="dict-title">FreeDictionary</span>
						</th>
					</tr>
					<tr>
						<th>Word</th>
						<th>Type</th>
						<th>Definition</th>
					</tr>
				</thead>
				<tbody>
					{isLoading || error ? (
						<tr>
							<td colSpan={3}>
								<Skeleton />
							</td>
						</tr>
					) : (
						<>
							<tr>
								<td rowSpan={data[0].meanings.length}>{data[0].word}</td>
								<TDefinition
									partOfSpeech={data[0].meanings[0].partOfSpeech}
									definitions={data[0].meanings[0].definitions}
								></TDefinition>
							</tr>
							{data[0].meanings.splice(1).map((w) => {
								return (
									<tr>
										<TDefinition
											partOfSpeech={w.partOfSpeech}
											definitions={w.definitions}
										></TDefinition>
									</tr>
								);
							})}
						</>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default React.memo(FreeDictionaryComponent);
