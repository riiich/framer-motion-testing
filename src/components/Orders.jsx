/* eslint-disable react/prop-types */
const Orders = ({ pizza }) => {
	console.log(pizza);

	return (
		<div className="text-white mt-40">
			<h1 className="text-3xl font-thin">Thank you for your order!</h1>
			<p className="mt-5 text-lg font-semibold underline underline-offset-4">Your order</p>
			<p className="mt-3">
				<span className="font-bold">Type:</span> {pizza.base}
			</p>
			<span className="font-bold">Toppings:</span>
			{pizza.toppings.map((topping) => {
				return (
					<ul key={topping}>
						<li key={topping}>{topping}</li>
					</ul>
				);
			})}
		</div>
	);
};

export default Orders;
