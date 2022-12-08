// @ts-check

import React, { useState } from "react";
// @ts-ignore (Searchbar.module.css는 실존한다!)
import styles from "./Searchbar.module.css";

import CollapsibleCard from "./CollapsibleCard";

/**
 * @typedef {object} Props
 * @property {string} keyword 검색어 상태
 * @property {React.Dispatch<React.SetStateAction<string>>} setSearchKeyword 검색어 지점 함수
 * @property {boolean} isSearching 현재 검색 상태
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsSearching 검색 상태 지정 함수
 */

/** @type {import("react").FC<Props>} */
export default ({ keyword, setSearchKeyword, isSearching, setIsSearching }) => {
	/** @template {boolean} 클리어 버튼 활성 여부 */
	const [isClearButtonActivate, setIsClearButtonActivate] = useState(false);

	/** @type {React.MouseEventHandler<HTMLInputElement>} */
	const onClear = (e) => {
		e.preventDefault(); // 이벤트 실행 방지
		e.stopPropagation(); // 이벤트 전파 방지
		setSearchKeyword("");
	};

	/** @type {React.MouseEventHandler<HTMLInputElement>} */
	const onClearAll = (e) => {
		onClear(e);
		setIsSearching(true);
	};

	return (
		<div
			onMouseEnter={(e) => {
				e.stopPropagation();
				e.preventDefault();
				setIsClearButtonActivate(true);
			}}
			onMouseLeave={(e) => {
				e.stopPropagation();
				e.preventDefault();
				setIsClearButtonActivate(false);
			}}
		>
			<form
				style={{
					// PicoCSS 내용에 덮어씌우기
					marginBottom: 0,
				}}
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
					placeholder="검색어를 입력해주세요 (',' 구분자를 사용해 여러개의 검색어를 입력할 수 있습니다)"
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
			<CollapsibleCard isActive={isClearButtonActivate}>
				<div className="grid">
					<input
						type="button"
						value="Clear"
						onClick={onClear}
						disabled={!keyword}
					/>
					<input type="button" value="Clear Results" onClick={onClearAll} />
				</div>
			</CollapsibleCard>
		</div>
	);
};
