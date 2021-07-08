/**
 * It returns a readable Spanish date from miliseconds data
 *
 * @param {number} date Date in milisencods
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
 * Returns a readable with zeroes, for example 07-07-2021.
 * It's needed to have a date value on input
 */
const today = new Date()
export const dateToValue = `${today.getFullYear()}-${
	today.getMonth() + 1 > 9 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)
}-${today.getDate() > 9 ? today.getDate() : '0' + today.getDate()}`

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

export const sizeConvertor = (hotelRooms) => {
	if (hotelRooms < 10) {
		return 'Pequeño'
	} else if (hotelRooms >= 10 && hotelRooms < 20) {
		return 'Mediano'
	} else return 'Grande'
}

export const sizeCategories = (array) => {
	const newArray = array.map((hotel) => {
		return (hotel.rooms = sizeConvertor(hotel.rooms))
	})
	const withoutDuplicates = [...new Set(newArray)]
	return withoutDuplicates
}

// export const highlightHotel = () => {
// 	const highlight = 'highlight'
// 	const highlightClass = 'highlight-is-active'
// 	const body = document.querySelector('body')
// 	let isHighlightActive = false
// 	let highlightedHotel
// 	let clickBubbling = 0
// }
