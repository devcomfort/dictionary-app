// @ts-check

import React from "react";
// @ts-ignore (Searchbar.module.css는 실존한다!)
import styles from "./Searchbar.module.css";

/**
 * @typedef {object} Props
 * @property {string} keyword 검색어 상태
 * @property {React.Dispatch<React.SetStateAction<string>>} setSearchKeyword 검색어 지점 함수
 * @property {boolean} isSearching 현재 검색 상태
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsSearching 검색 상태 지정 함수
 */

/** @type {import("react").FC<Props>} */
export default ({ keyword, setSearchKeyword, isSearching, setIsSearching }) => {
	return (
		<form
			className={styles.Searchbar}
			action="#"
			onSubmit={(e) => {
				e.preventDefault();
				// 검색 상태 전환: 검색 중
				setIsSearching(true);
			}}
		>
			<input
				type="text"
				placeholder="검색어를 입력해주세요"
				disabled={isSearching}
				value={keyword}
				onChange={(e) => {
					setSearchKeyword(
						/** @type {string} */
						e.target.value
					);
				}}
			/>
			<input type="submit" value="검색" disabled={isSearching} />
		</form>
	);
};
