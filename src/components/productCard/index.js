import { useContext, useEffect, useState } from 'react';
import { Context } from '../../store';
import AddSubtract from '../addSubtract';
import ReviewModal from '../reviewModal';

//scss
import './style.scss';

const ProductCard = ({ data, cartMode = false }) => {
	const { dispatch } = useContext(Context);
	const {
		state: { cart },
	} = useContext(Context);
	const dispatchCount = (id, count) => {
		if (count == 0) dispatch({ type: 'REMOVE_FROM_CART', payload: id });
		else dispatch({ type: 'SET_COUNT', payload: { id, count } });
	};

	const [count, setCount] = useState(() => {
		let count = 0;
		cart.forEach((item) => {
			if (item.id === data.id) count = item.count;
		});
		return count;
	});
	useEffect(() => {
		if (count == 0) dispatch({ type: 'REMOVE_FROM_CART', payload: data.id });
		else dispatchCount(data.id, count);
	}, [count]);

	const [open, setOpen] = useState(false);

	return (
		<div className='product-card'>
			{open && (
				<ReviewModal open={open} setOpen={setOpen} currentId={data.id} />
			)}
			<div className='card-content'>
				<div className='image-container'>
					<img src={data.image} alt='' />
				</div>
				<div className='details-container'>
					<div className='name'>{data.title}</div>
					<div className='desc'>{data.category}</div>
					<div className='price'>${data.price}</div>
				</div>
				{cartMode && (
					<div className='count'>
						<span>✕</span>
						{count}
					</div>
				)}
			</div>
			<div className='buttons'>
				{cartMode ? (
					<button
						className='remove-button'
						onClick={() =>
							dispatch({ type: 'REMOVE_FROM_CART', payload: data.id })
						}>
						Remove
					</button>
				) : (
					<>
						<button className='add-review' onClick={() => setOpen(true)}>
							{data.review.name ? 'Show review' : 'Write a review'}
						</button>
						{count === 0 ? (
							<button
								className='add-to-cart'
								onClick={() => {
									dispatch({ type: 'ADD_TO_CART', payload: data });
									setCount(1);
								}}>
								Add to cart
							</button>
						) : (
							<AddSubtract setCount={setCount} count={count} id={data.id} />
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
