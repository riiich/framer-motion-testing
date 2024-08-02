import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="mt-28 text-white font-mono text-2xl"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 1 }}
		>
			<h2 className="m-16 text-5xl">Your fatass wants pizza?</h2>
			<Link className="border-2 rounded-full p-3" to="/base">
				<button className="mt-10">Go and customize your pizza, fatass.</button>
			</Link>
		</motion.div>
	);
};

export default Home;
