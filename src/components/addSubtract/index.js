//scss
import './style.scss';

const AddSubtract = ({ count, setCount }) => {
	return (
		<div className='add-subtract'>
			<button className='subtract' onClick={() => setCount((prev) => prev - 1)}>
				-
			</button>
			<div className='count'>{count}</div>
			<button className='add' onClick={() => setCount((prev) => prev + 1)}>
				+
			</button>
			<button className='remove-all' onClick={() => setCount(0)}>
				<strong>✕</strong>
			</button>
		</div>
	);
};

export default AddSubtract;
