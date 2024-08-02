import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<nav className="flex flex-row justify-start w-screen bg-green-500 p-5">
			{/* <img src="../assets/logos/pizza.svg" alt="pizza" width={50} height={50} /> */}
			<motion.a
				href="/"
				className="text-3xl font-mono"
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ delay: 0.3, duration: 0.3, type: "spring", stiffness: 120 }}
			>
				Pizza!!!
			</motion.a>
		</nav>
	);
};

export default Navbar;
