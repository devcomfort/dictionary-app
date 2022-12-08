// @ts-check
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

import CollapsibleCardCSS from "./CollapsibleCard.module.css";

/**
 * @typedef {object} Props
 * @property {boolean} isActive
 * @property {React.ReactNode} children
 */

/** @type {React.FC<Props>} */
const CollapsibleCard = ({ isActive, children }) => {
	// ref hook 기본값 선언
	const ref = useRef(null);

	useEffect(() => {
		ref.current.style = isActive
			? `max-height: ${ref.current.scrollHeight}px`
			: `max-height: 0px`;
	}, [isActive]);

	return (
		<div
			className={`${CollapsibleCardCSS.card} ${
				isActive ? CollapsibleCardCSS.active : ""
			}`}
			// 내부 속성 수정을 위한 ref hook 데이터
			ref={ref}
			// collapsible widget 클릭으로 인한 외부 이벤트 실행 방지
			onClick={(e) => e.stopPropagation()}
		>
			{children}
		</div>
	);
};

export default CollapsibleCard;
