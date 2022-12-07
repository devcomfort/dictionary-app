// @ts-check
import React from "react";

import CollapsibleCardCSS from "./CollapsibleCard.module.css";

/**
 * @typedef {object} Props
 * @property {boolean} isActive
 * @property {React.ReactNode} children
 */

/** @type {React.FC<Props>} */
const CollapsibleCard = ({ isActive, children }) => {
	return (
		<div
			className={`${CollapsibleCardCSS.card} ${
				isActive ? CollapsibleCardCSS.active : ""
			}`}
		>
			{children}
		</div>
	);
};

export default CollapsibleCard;
