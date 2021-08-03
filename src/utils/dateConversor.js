/**
 * It returns a readable Spanish date from miliseconds data
 *
 * @param {number} date Date in milisencods
 * @returns Date in Spanish format
 */
const dateConversor = (date) => {
	const days = [
		"Domingo",
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes",
		"Sábado",
	];
	const months = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];
	const fromMiliSeconds = new Date(date);

	return `${days[fromMiliSeconds.getDay()]}, ${fromMiliSeconds.getDate()} de ${
		months[fromMiliSeconds.getMonth()]
	} de ${fromMiliSeconds.getFullYear()}`;
};

export default dateConversor
