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
import ReviewUpdate from './ReviewUpdate'
import Register from './Register';

export const MyContext = React.createContext();


class App extends React.Component {

	loginFun = () => {
		let copy = { ...this.state }
		copy.isUserLoggedIn = true;
		this.setState(copy)
	}

	state = {
		isUserLoggedIn: false,
		login: this.loginFun

	}

	componentDidUpdate() {
		return true
	}


	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{this.state.isUserLoggedIn ? null : <MyContext.Provider value={this.state}>
						<Login></Login>
					</MyContext.Provider>
					}

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
						{/* {this.state.isUserLoggedIn ?
							<li>
								<Link to='/login'>Login</Link>
							</li> : null} */}

						<li>
							<Link to='/register'>Register</Link>
						</li>
					</ul>


					{/* <Route path='/login' component={Login} /> */}
					<Route path='/register' component={Register} />

					{this.state.isUserLoggedIn ? <Route path='/all-products' component={Products} />
						: null}

					{this.state.isUserLoggedIn ? <Route path='/productdetail/:id' component={ProductDetails} />
						: null}

					

						{/* <Route path='/productdetail/review' component={CreateReview} /> */}

						{this.state.isUserLoggedIn ? <Route path='/create-product' component={CreateProduct} />
							: null}

						{this.state.isUserLoggedIn ? <Route path='/update-product/:id' component={UpdateProduct} />
							: null}

						{this.state.isUserLoggedIn ? <Route path='/products/:pId/review/:rId' component={ReviewUpdate} />
							: null}
				</div>
			</BrowserRouter>

		)
	}
}

export default App;
