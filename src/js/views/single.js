import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({});
	const params = useParams(); // { id: 2 }
	useEffect(
		() => {
			let selectedContact =
				store.contacts.length > 0 ? store.contacts.find(contact => contact.id == params.id) : {};
			setContact(selectedContact);
		},
		[store.contacts, params]
	);
	return (
		<div className="jumbotron">
			<h1 className="display-4">{contact.full_name && contact.full_name}</h1>
			<p>{contact.id}</p>

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
