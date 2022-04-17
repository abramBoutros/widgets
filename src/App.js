import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
	{
		title: "What is React?",
		content: "React is a front end javascript framework",
	},
	{
		title: "Why use React??",
		content: "To get into software industry",
	},
	{
		title: "How do you use React?",
		content: "By Creating components",
	},
];

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
	// const showAccordion = () => {
	// 	if (window.location.pathname === "/") {
	// 		return <Accordion items={items} />;
	// 	}
	// };
	// const showList = () => {
	// 	if (window.location.pathname === "/list") {
	// 		return <Search />;
	// 	}
	// };
	// const showTranslate = () => {
	// 	if (window.location.pathname === "/translate") {
	// 		return <Translate />;
	// 	}
	// };
	// const showDropdown = () => {
	// 	if (window.location.pathname === "/dropdown") {
	// 		return (
	// 			<Dropdown
	// 				selected={selected}
	// 				onSelectedChange={setSelected}
	// 				options={options}
	// 				needed={true}
	// 				label="Select a Color"
	// 			/>
	// 		);
	// 	}
	// };

	return (
		<>
			<Header />
			<div className="ui container">
				<Route path="/">
					<Accordion items={items} />
				</Route>
				<Route path="/list">
					<Search />;
				</Route>
				<Route path="/translate">
					<Translate />
				</Route>
				<Route path="/dropdown">
					<Dropdown
						selected={selected}
						onSelectedChange={setSelected}
						options={options}
						needed={true}
						label="Select a Color"
					/>
				</Route>
			</div>
		</>
	);
};

export default App;
