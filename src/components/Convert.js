import React, { useState, useEffect } from "react";
import axios from "axios";

function Convert({ lang, text }) {
	const [translated, setTranslated] = useState("");
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedText(text);
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	}, [text]);

	useEffect(() => {
		const doTranslation = async () => {
			const res = await axios.post(
				"https://translation.googleapis.com/language/translate/v2",
				{},
				{
					params: {
						q: debouncedText,
						target: lang.value,
						key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
					},
				}
			);
			setTranslated(res.data?.data?.translations[0]?.translatedText);
		};
		doTranslation();
	}, [lang, debouncedText]);
	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
}

export default Convert;
