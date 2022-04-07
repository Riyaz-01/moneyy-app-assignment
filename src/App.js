import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Products from './pages/products';
import Cart from './pages/cart';
import Header from './components/header';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Products />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
