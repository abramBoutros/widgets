import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
	{
		label: "ِAfrikaans",
		value: "af",
	},
	{
		label: "Arabic",
		value: "ar",
	},
	{
		label: "Hindi",
		value: "hi",
	},
	{
		label: "French",
		value: "fr",
	},
];

function Translate() {
	const [lang, setLang] = useState(options[0]);
	const [text, setText] = useState("");
	return (
		<div className="ui container ">
		<h1>Not working as API KEY is not available for deployment usage</h1>
			<div className="ui form ">
			
				<div className="field">
					<label htmlFor="">Enter Text</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</div>
			<Dropdown
				options={options}
				selected={lang}
				onSelectedChange={setLang}
				needed={false}
				label="Select a Language"
			/>
			<hr />
			<h3 className="ui header">Output</h3>
			<Convert lang={lang} text={text} />
		</div>
	);
}

export default Translate;
