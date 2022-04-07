import { useContext, useEffect, useState } from 'react';
import { Context } from '../../store';
import './style.scss';

const ReviewModal = ({ setOpen, currentId }) => {
	const [name, setName] = useState('');
	const [review, setReview] = useState('');

	const { dispatch } = useContext(Context);
	const {
		state: { productList },
	} = useContext(Context);

	const addReview = () => {
		dispatch({
			type: 'ADD_REVIEW',
			item: {
				id: currentId,
				name: name,
				review: review,
			},
		});
		setOpen(false);
	};
	useEffect(() => {
		let elem = productList.filter((elem) => elem.id === currentId);
		setName(elem[0].review.name);
		setReview(elem[0].review.review);
	}, []);
	return (
		<div className='modal'>
			{/* create a modal component */}
			<div className='modal-content'>
				<div className='modal-header'>
					<span onClick={() => setOpen(false)} className='close'>
						&times;
					</span>
					<h2 className='modal-title'> Write a review</h2>
				</div>
				<div className='modal-body'>
					<form className='form-group'>
						<label htmlFor='name'>Name</label>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type='text'
						/>
						<label htmlFor='name'>Review</label>
						<textarea
							value={review}
							onChange={(e) => setReview(e.target.value)}
						/>
					</form>
					<div className='form-group-button'>
						<button onClick={() => addReview()}>Submit</button>
						<button onClick={() => setOpen(false)}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ReviewModal;
