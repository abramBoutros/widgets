import React, { useState } from "react";
// import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
// import Search from "./components/Search";

// const items = [
// 	{
// 		title: "What is React?",
// 		content: "React is a front end javascript framework",
// 	},
// 	{
// 		title: "Why use React??",
// 		content: "To get into software industry",
// 	},
// 	{
// 		title: "How do you use React?",
// 		content: "By Creating components",
// 	},
// ];

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: "green",
	},
	{
		label: "A Shade of Blue",
		value: "blue",
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<>
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			<Dropdown
				selected={selected}
				onSelectedChange={setSelected}
				options={options}
			/>
		</>
	);
};

export default App;
