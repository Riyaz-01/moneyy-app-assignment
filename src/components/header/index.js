//scss
import './style.scss';

//assets
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

import { Context } from '../../store';
import { useContext } from 'react';

const Header = () => {
	const {
		state: { cart },
	} = useContext(Context);

	return (
		<div className='header'>
			<div className='header__logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='header__links'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						'header__link ' + (isActive ? 'active-link' : '')
					}>
					Products
				</NavLink>
				<NavLink
					to='/cart'
					className={({ isActive }) =>
						'header__link ' + (isActive ? 'active-link' : '')
					}>
					View Cart ({cart.length})
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
