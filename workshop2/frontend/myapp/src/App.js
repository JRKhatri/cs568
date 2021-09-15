//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import React from 'react';
import Products from './Products.js';
import Login from './Login.js';
import ProductDetails from './ProductDetails';
import UpdateProduct from './UpdateProduct';
import CreateReview from './CreateReview'
import CreateProduct from './CreateProduct';


class App extends React.Component {
	state = {
		isUserLoggedIn: true,
	}

	componentDidUpdate() {
		return true
	}


	render() {
		return (
			<BrowserRouter>
				<div>
					<ul>
						{this.state.isUserLoggedIn ?
							<li>
								<Link to='/all-products'>All Products</Link>
							</li> : null}
						{this.state.isUserLoggedIn ?
							<li>
								<Link to='/create-product'>Create Products</Link>
							</li>
							: null}
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
					</ul>

					<Route path='/all-products' component={Products} />

					<Route path='/login' component={Login} />
					<Route path='/productdetail/:id' component={ProductDetails} />
					{/* <Route path='/productdetail/review' component={CreateReview} /> */}
					<Route path='/create-product' component={CreateProduct} />

					<Route path='/update-product/:id' component={UpdateProduct} />

				</div>
			</BrowserRouter>

		)
	}
}

export default App;
