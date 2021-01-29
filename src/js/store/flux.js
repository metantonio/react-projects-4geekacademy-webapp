const BASE_URL = "http://localhost:3000/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [] //de nuestra api en particular se reciben listas que estamos mentiendo en otra lista
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContacts: async () => {
				let url = `${BASE_URL}contact`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json(); //parchear la respuesta json
					//la siguiente sección de código pretende extraer la lista anidada

					//aquí termina esa sección de código
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
