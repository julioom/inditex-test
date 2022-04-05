import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/header";

const Products = React.lazy(() => import("./containers/products/index.jsx"));
const ProductDetail = React.lazy(() =>
	import("./containers/productDetail/index.jsx")
);

const App = () => {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<div className="container">
				<Header />
				<Switch>
					<Route
						path="/products"
						exact
						render={(routeProps) => <Products {...routeProps} />}
					/>
					<Route
						path="/products/:id"
						exact
						render={(routeProps) => <ProductDetail {...routeProps} />}
					/>
					<Redirect to="/products" />
				</Switch>
			</div>
		</Suspense>
	);
};

export default App;
