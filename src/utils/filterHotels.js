import sizeConvertor from './sizes'

const filterHotels = (
	array,
	startDate,
	endDate,
	country,
	price,
	size
) => {
	const filteredArray = array
		.filter((hotel) => {
			if (!startDate || !endDate) {
				return hotel;
			} else {
				if (endDate >= startDate) {
					return (
						hotel.availabilityTo >= startDate && hotel.availabilityTo <= endDate
					);
				}

				return hotel;
			}
		})
		.filter((hotel) => {
			if (country !== "all") {
				return hotel.country === country;
			}
			return hotel;
		})
		.filter((hotel) => {
			if (price !== "all") {
				return hotel.price === price;
			}
			return hotel;
		})
		.filter((hotel) => {
			if (size !== "all") {
				const hotelSizeCategory = sizeConvertor(hotel.rooms);
				return hotelSizeCategory === size;
			}
			return hotel;
		});

	return filteredArray;
};

export default filterHotels
