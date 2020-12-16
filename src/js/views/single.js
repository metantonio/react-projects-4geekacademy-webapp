import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({});
	const params = useParams(); // { id: 2 }
	useEffect(
		() => {
			let selectedCharacter =
				store.characters.length > 0 ? store.characters.find(character => character.id == params.id) : {};
			setCharacter(selectedCharacter);
		},
		[store.characters, params]
	);
	return (
		<div className="jumbotron">
			<h1 className="display-4">{character.name && character.name}</h1>
			<p>{character.status}</p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {};
