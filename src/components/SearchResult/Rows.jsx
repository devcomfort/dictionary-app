// @ts-check
import React from "react";
import styles from "./index.module.css";

/**
 * @typedef {object} Props
 * @property {React.ReactNode} children
 * @property {React.CSSProperties} [style]
 */

/**
 * 테이블 '열' 컴포넌트
 * @type {React.FC<Props>}
 */
const Columns = function ({ children, style }) {
	return (
		<div className={`grid ${styles["grid-color"]}`} style={style}>
			{children}
		</div>
	);
};

export default Columns;
