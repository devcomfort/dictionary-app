// @ts-check

/**
 * FreeDictionary API
 *
 * @typedef {object} FreeDictionaryPonentic FreeDictionary IPA 형식
 * @property {string} text 텍스트 IPA; 국제 발음 기호
 * @property {string} [audio] 음원 파일 주소
 * @property {FreeDictionaryLicense} license 라이선스 정보
 * @property {string} sourceUrl 음원 파일에 대한 출처
 *
 * @typedef {object} FreeDictionaryDefinition FreeDictionary 뜻 정의 형식
 * @property {string} definition 정의
 * @property {string[]} synonyms 동의어
 * @property {string[]} antonyms 반의어
 * @property {string} [example] 예시

 *
 * @typedef {object} FreeDictionaryMeaning FreeDictionary 단어 의미 형식
 * @property {string} partOfSpeech 말할 때 어디에 사용되는지 정보 (e.g. exclamation; 감탄, 의사 표현, 소통, ...)
 * @property {FreeDictionaryDefinition[]} definitions 단어 정의 목록 (partOfSpeech의 내용을 보다 상세하게)
 * @property {string[]} synonyms 동의어
 * @property {string[]} antonyms 반의어
 *
 * @typedef {object} FreeDictionaryLicense FreeDictionary 반환값 중 라이선스 형식
 * @property {string} name 라이선스 이름
 * @property {string} url 라이선스 내용 URL
 *
 * @typedef {object} FreeDictionaryReturn FreeDictionary 반환값 형식
 * @property {string} word 검색 단어
 * @property {string} phonetic IPA 국제 발음 기호
 * @property {FreeDictionaryPonentic[]} phonetics
 * @property {FreeDictionaryMeaning[]} meanings 단어 뜻 목록
 * @property {FreeDictionaryLicense} license 라이선스 정보
 * @property {string[]} sourceUrls Wikipedia 상의 정보
 *
 *
 * @typedef {object} FreeDictionaryError FreeDictionary 오류 반환형
 * @property {string} title 오류 제목 (간단히)
 * @property {string} message 오류 내용 (자세히)
 * @property {string} resolution 추천 해결책
 *
 * @typedef {FreeDictionaryReturn[]|FreeDictionaryError} FreeDictionaryResult FreeDictionary API Query 최종 반환값 형식
 */

/**
 * FreeDictonary 검색 함수
 * @param {string} keyword 검색어
 */
export const FreeDictionary = async (keyword) => {
	const _fetched = fetch(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
	);

	/** @type {() => Promise<FreeDictionaryResult>} */
	const _json = () => _fetched.then((res) => res.json());

	return {
		_fetched,
		_json,
	};
};
