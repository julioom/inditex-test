import React from "react";
import "./header.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const generateBreadCrumb = (location) => {
	const pathname = location.pathname;
	let paths = pathname.split("/");
	paths =
		paths[paths.length - 1] === "" ? paths.slice(0, paths.length - 1) : paths;
	paths = paths[1] === "" ? paths.slice(1) : paths;

	paths = paths.filter(Boolean);

	let breadcrumb = paths.map((path, index) => {
		let arrow = index !== paths.length - 1 ? " > " : " ";
		const url = "/" + paths.slice(0, index + 1).join("/");
		return (
			<span key={index}>
				<Link to={url}>{path}</Link>
				{arrow}
			</span>
		);
	});

	return <div className="inline-list">{breadcrumb}</div>;
};
const Header = ({ location }) => {
	const cartCount = useSelector((state) => state.cart.count);

	const breadcrumbs = generateBreadCrumb(location);

	return (
		<div className="header">
			<Link to="/products" className="title">
				INDITEX TEST
			</Link>
			{breadcrumbs}
			<span className="cart-count">{cartCount}</span>
		</div>
	);
};

export default withRouter(Header);
