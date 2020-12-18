const BASE_URL = "https://swapi.dev/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				let url = `${BASE_URL}people/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json(); //parchear la respuesta json
					setStore({
						characters: responseObject.results
					});
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async () => {
				let url = `${BASE_URL}planets/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({
						planets: responseObject.results
					});
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
