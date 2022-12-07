// @ts-check
import React from "react";
import styles from "./index.module.css";

/**
 * @typedef {object} Props
 * @property {import("../../assets/Search").FreeDictionaryResult} result
 */

/**
 * 테이블 '열' 컴포넌트
 * @type {React.FC<React.PropsWithChildren>}
 */
const Columns = function ({ children }) {
	return <div className={`grid ${styles["grid-color"]}`}>{children}</div>;
};

export default Columns;
