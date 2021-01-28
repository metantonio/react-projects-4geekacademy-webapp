import React, { useContext, useEffect, useState } from "react";
import { CommentAction } from "semantic-ui-react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardPeople } from "../component/cardPeople";
import { Context } from "../store/appContext";

export const Home = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5 d-flex flex-column align-items-center">
			<div className="d-flex w-100 text-center m-4">
				<h2 className="display-4 w-100">{"Contacts"}</h2>
			</div>
			<div className="card-holder d-flex justify-content-start col-10">
				{store.contacts.map((contact, index) => {
					return <CardPeople key={contact.url} item={contact} />;
				})}
			</div>
		</div>
	);
};
