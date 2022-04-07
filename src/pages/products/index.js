import { useContext } from 'react';
import { Context } from '../../store';

//scss
import './style.scss';

//components
import ProductCard from '../../components/productCard';

const Products = () => {
	const {
		state: { productList },
	} = useContext(Context);
	return (
		<div className='product-list'>
			{productList.map((product, index) => {
				return <ProductCard data={product} key={index} />;
			})}
		</div>
	);
};

export default Products;
