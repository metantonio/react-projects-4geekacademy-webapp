import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardPlanet = ({ item }) => {
	return (
		<div className="card mx-2" style={{ minWidth: "18rem" }}>
			<img src="http://www.dummyimage.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					<ul>
						<li>{`Climate: ${item.climate}`}</li>
						<li>{`Terrain: ${item.terrain}`}</li>
						<li>{`Population: ${item.population}`}</li>
					</ul>
				</p>
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
