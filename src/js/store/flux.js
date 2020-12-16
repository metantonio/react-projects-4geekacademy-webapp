const BASE_URL = "https://rickandmortyapi.com/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				let url = `${BASE_URL}/character`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({
						characters: responseObject.results
					});
				} catch (error) {
					console.log(error);
				}
			},
			getLocations: async () => {
				let url = `${BASE_URL}/location`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({
						locations: responseObject.results
					});
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
