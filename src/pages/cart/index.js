import { useContext } from 'react';
import ProductCard from '../../components/productCard';
import { Context } from '../../store';

//scss
import './style.scss';

const Cart = () => {
	const {
		state: { cart },
	} = useContext(Context);

	const totalPrice = calculateTotal(cart);
	if (cart.length == 0) return <div className='empty-cart'></div>;
	return (
		<div className='cart-wrapper'>
			<div className='product-list'>
				{cart.map((product, index) => {
					console.log(product);
					return <ProductCard data={product} key={index} cartMode={true} />;
				})}
			</div>
			<div className='calculations'>
				{cart.map((item, index) => {
					return (
						<div className='calculation' key={index}>
							<div className='label'>
								{item.title.slice(0, 20)}
								<span>
									<strong>✕</strong> ${item.count}
								</span>
							</div>
							<div className='value'>${item.count * item.price}</div>
						</div>
					);
				})}
				<div className='total-price'>Grand Total - ${totalPrice}</div>
			</div>
		</div>
	);
};

export default Cart;

const calculateTotal = (cart) => {
	let total = 0;
	cart.forEach((item) => {
		total += item.count * item.price;
	});
	return total;
};
