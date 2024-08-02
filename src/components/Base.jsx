/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<div className="text-white mt-40">
			<motion.h1
				className="text-4xl font-medium"
				initial={{
					y: "-100vh",
				}}
				animate={{ y: 0 }}
				transition={{ duration: 0.8, type: "spring" }}
			>
				Step 1: Choose a base for your pizza:
			</motion.h1>
			<ul className="mt-10 text-xl">
				{bases.map((base) => {
					let spanClass =
						pizza.base === base
							? "font-bold font-thin text-orange-500 before:content-['>'] before:relative before:top-['-2px']" +
							  "before:mr-['6px'] active:before:scale-105 before:inline-block "
							: "";

					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							initial={{ y: "-100vh" }}
							animate={{ y: 0 }}
							transition={{ duration: 1.5, type: "spring" }}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div
					className="mt-14"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1, duration: 0.5 }}
				>
					<Link
						className="px-6 py-2 border border-white rounded-full font-thin duration-150 active:bg-slate-200 active:text-black"
						to="/toppings"
					>
						<button>Next</button>
					</Link>
				</motion.div>
			)}
		</div>
	);
};

export default Base;
