const sizeConvertor = (hotelRooms) => {
	if (hotelRooms < 10) {
		return 'pequeño'
	} else if (hotelRooms >= 10 && hotelRooms < 20) {
		return 'mediano'
	} else return 'grande'
}

export const sizeCategories = (array) => {
	const newArray = array.map((hotel) => {
		return (hotel.rooms = sizeConvertor(hotel.rooms))
	})
	const withoutDuplicates = [...new Set(newArray)]
	return withoutDuplicates
}
export default sizeConvertor
