import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardPlanet = ({ item }) => {
	return (
		<div className="card mx-2" style={{ minWidth: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">{`Climate: ${item.climate}`}</p>
				<div className="col-md-auto">
					<Link to={`/single/${item.url}`} className="btn btn-primary col-10">
						{"ver detalle"}
					</Link>
					<i className="fa fa-heart-o col-2" aria-hidden="true" />
				</div>
			</div>
		</div>
	);
};

CardPlanet.propTypes = {
	item: PropTypes.object
};
