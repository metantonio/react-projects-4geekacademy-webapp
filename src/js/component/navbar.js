import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./favorite.js";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				{/* <image
					src="https://www.mujer.com.pa/sites/default/files/field/image/star-wars-revista-mujer-.jpg"
					id="logo-home"
				/> */}
				{<span className="navbar-brand mb-0 h1 col-8">Star Wars</span>}
			</Link>
			<div className="ml-auto col-4">
				<button className="btn btn-primary col-4">{Favorite()}</button>
			</div>
		</nav>
	);
};
