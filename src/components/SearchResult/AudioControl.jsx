/**
 * @typedef {object} Props
 * @property {string} url 오디오 URL

 */

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PlayIcon from "../../assets/play.svg";
import StopIcon from "../../assets/stop.svg";

/** @type {React.FC<Props>} */
const AudioControl = function ({ url }) {
	const audio = new Audio(url);

	/** @template {boolean} */
	const [isPlaying, setIsPlaying] = useState(false);

	audio.onplaying = (e) => {
		setIsPlaying(true);
	};

	audio.onpause = (e) => {
		audio.currentTime = 0;
		setIsPlaying(false);
	};

	return (
		<div
			onClick={(e) => {
				e.stopPropagation();
				audio.paused ? audio.play() : audio.pause();
			}}
		>
			<img
				src={isPlaying ? StopIcon : PlayIcon}
				alt={isPlaying ? "정지" : "재생"}
			/>
			<span>{new URL(url).pathname.split("/").at(-1) || ""}</span>
		</div>
	);
};

export default AudioControl;
