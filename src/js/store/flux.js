const BASE_URL = "0.0.0.0:3000/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContacts: async () => {
				let url = `${BASE_URL}contact/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json(); //parchear la respuesta json
					setStore({
						contacts: responseObject.results
					});
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
