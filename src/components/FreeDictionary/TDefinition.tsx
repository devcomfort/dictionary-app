import { Definition } from "./index";
export default function ({
	partOfSpeech,
	definitions,
}: {
	partOfSpeech: string;
	definitions: Definition[];
}) {
	return (
		<>
			<td>{partOfSpeech}</td>
			<td>
				<ol>
					{definitions.map((w) => {
						return <li>{w.definition}</li>;
					})}
				</ol>
			</td>
		</>
	);
}
