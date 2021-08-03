/**
 *
 * @param {Array} hotels
 * @param {string} country
 * @returns Filter the array by their property
 */

export const showCountry = (country) => {
	if (country === "Argentina") {
		return "En Argentina.";
	} else if (country === "Brasil") {
		return "En Brasil.";
	} else if (country === "Chile") {
		return "En Chile.";
	} else if (country === "Uruguay") {
		return "En Uruguay.";
	}
	return "En cualquier país.";
};

export const showPrice = (price) => {
	if (price === 1) {
		return "De bajo precio";
	} else if (price === 2 || price === 3) {
		return "De precio mediano.";
	} else if (price === 4) {
		return "De precios especiales";
	}
	return "De cualquier precio.";
};

export const showSize = (size) => {
	if (size === "pequeño") {
		return "De tamaño pequeño";
	} else if (size === "mediano") {
		return "De tamaño mediano.";
	} else if (size === "grande") {
		return "De tamaño grande";
	}
	return "De cualquier tamaño.";
};
