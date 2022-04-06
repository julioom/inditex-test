import React, { Suspense } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import { useSelector } from "react-redux";
import Overlay from "./components/overlay/overlay";

const Products = React.lazy(() => import("./containers/products/index.jsx"));
const ProductDetail = React.lazy(() =>
	import("./containers/productDetail/index.jsx")
);

const routes = [
	{ path: "/products", component: Products },
	{ path: "/products/:id", component: ProductDetail },
];

const App = () => {
	const productLoading = useSelector((state) => state.products.loading);
	return (
		<Suspense fallback={<Overlay />}>
			<div className="container">
				{productLoading && <Overlay />}
				<Header />
				<Switch>
					{routes.map((r) => {
						const Component = r.component;
						return (
							<Route
								key={r.path}
								path={r.path}
								exact
								render={(routeProps) => <Component {...routeProps} />}
							/>
						);
					})}
					{/* <Route
						path="/products"
						exact
						render={(routeProps) => <Products {...routeProps} />}
					/>
					<Route
						path="/products/:id"
						exact
						render={(routeProps) => <ProductDetail {...routeProps} />}
					/> */}
					<Redirect to="/products" />
				</Switch>
			</div>
		</Suspense>
	);
};

export default App;
