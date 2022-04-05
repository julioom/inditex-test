import React from "react";
import "./header.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
	const cartCount = useSelector((state) => state.cart.count);
	return (
		<div className="header">
			<Link to="/products" className="title">
				INDITEX TEST
			</Link>
			<span className="cart-count">{cartCount}</span>
		</div>
	);
};

export default Header;
