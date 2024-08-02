/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Toppings = ({ addTopping, pizza }) => {
	const toppings = [
		"Pepperoni",
		"Bacon",
		"Sausage",
		"Peppers",
		"Cheese",
		"Olives",
		"Mushrooms",
		"Extra cheese",
		"Pineapple",
		"Ham",
	];

	return (
		<div className="text-white mt-40">
			<h1 className="text-4xl font-medium">Step 2: Choose toppings:</h1>
			<ul className="mt-10 text-xl">
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping)
						? "font-bold font-thin before:content-['>'] before:relative before:top-['-2px']" +
						  "before:mr-['6px'] active:before:scale-105 before:inline-block"
						: "";

					return (
						<li key={topping} onClick={() => addTopping(topping)}>
							<span className={spanClass}>{topping}</span>
						</li>
					);
				})}
			</ul>

			{pizza.toppings.length > 0 && (
				<div className="mt-14">
					<Link
						className="px-6 py-2 border border-white rounded-full font-thin duration-150 active:bg-slate-200 active:text-black"
						to="/order"
					>
						<button>Next</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Toppings;
