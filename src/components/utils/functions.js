/**
 * It returns a readable Spanish date from miliseconds data
 *
 * @param {miliseconds} date Date in milisencods
 * @returns Date in Spanish format
 */
export const dateConversor = (date) => {
	const days = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sábado'
	]
	const months = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	]
	const fromMiliSeconds = new Date(date)

	return `${days[fromMiliSeconds.getDay()]}, ${fromMiliSeconds.getDate()} de ${
		months[fromMiliSeconds.getMonth()]
	} de ${fromMiliSeconds.getFullYear()}`
}
/**
 *
 * Returns an array without duplicates, it iterates over an array that contains objects with several properties
 *
 * @param {Array} arrayElement The array you want to iterate, each element should contain objects
 * @param {string} objectProperty Object property which you want to remove the duplicate, it has to be in string format
 * @returns {Array} The array will be iterated without duplicates
 */
export const removeDuplicates = (arrayElement, objectProperty) => {
	let allElements = []
	arrayElement.forEach((element) => {
		allElements.push(element[objectProperty])
	})
	const withoutDuplicates = [...new Set(allElements)]
	return withoutDuplicates
}
