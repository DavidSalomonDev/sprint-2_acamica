import React from 'react'
import Hotel from '../Hotel/Hotel.jsx'
import style from './Hotels.module.css'
import NotFound from '../NotFound/NotFound.jsx'
import { dateConversor, filterHotels } from '../utils/functions'

const Hotels = ({ hotelsList, filter }) => {
	console.log(filter.endDate)
	let filteredHotels = filterHotels(
		hotelsList,
		filter.startDate,
		filter.endDate,
		filter.country,
		filter.price,
		filter.size
	)
	const hotelComponents = filteredHotels.map((hotel) => {
		return (
			<Hotel
				key={hotel.id}
				data={{
					slug: hotel.slug,
					name: hotel.name,
					photo: hotel.photo,
					description: hotel.description,
					availabilityFrom: dateConversor(hotel.availabilityFrom),
					availabilityTo: dateConversor(hotel.availabilityTo),
					rooms: hotel.rooms,
					city: hotel.city,
					country: hotel.country,
					price: hotel.price,
				}}
			/>
		)
	})

	if (filteredHotels.length !== 0) {
		return (
			<div className={style.hotels} id='hotels'>
				{hotelComponents}
			</div>
		)
	}
	return <NotFound />
}

export default Hotels
