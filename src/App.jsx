import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Toppings from "./components/Toppings";
import Orders from "./components/Orders";
import Base from "./components/Base";

function App() {
	const [pizza, setPizza] = useState({ base: "", toppings: [] });

	const addBase = (base) => {
		setPizza({ ...pizza, base });
	};

	const addTopping = (topping) => {
		let newToppings = null;

		if(!pizza.toppings.includes(topping)) {
			newToppings = [...pizza.toppings, topping];
		}		
		else {
			newToppings = pizza.toppings.filter((t) => t !== topping);
		}

		setPizza({ ...pizza, toppings: newToppings });
	};

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
				<Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
				<Route path="/order" element={<Orders pizza={pizza} />} />
			</Routes>
		</>
	);
}

export default App;
