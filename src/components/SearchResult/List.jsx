// @ts-check

import React from "react";
import styles from "./List.module.css";

/** @type {React.FC<React.PropsWithChildren>} */
const List = function ({ children }) {
	return <div className={styles.list}>{children}</div>;
};

export default List;
