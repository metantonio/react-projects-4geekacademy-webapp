import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardPeople } from "../component/cardPeople";
import { CardPlanet } from "../component/cardPlanet";
import { Context } from "../store/appContext";

export const Home = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5 d-flex flex-column align-items-center">
			<div className="d-flex w-100 text-center m-4">
				<h2 className="display-4 w-100 text-center">{"Characters"}</h2>
			</div>
			<div className="card-holder d-flex justify-content-start col-10">
				{store.characters.map((character, index) => {
					return <CardPeople key={character.url} item={character} />;
				})}
			</div>
			<div className="d-flex w-100 text-center m-4">
				<h2 className="display-4 w-100 text-center">{"Planets"}</h2>
			</div>
			<div className="card-holder d-flex justify-content-start col-10">
				{store.planets.map((planet, index) => {
					return <CardPlanet key={planet.url} item={planet} />;
				})}
			</div>
		</div>
	);
};
