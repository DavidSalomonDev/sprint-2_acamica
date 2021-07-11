import React from 'react'
import Hotel from '../Hotel/Hotel.jsx'
import style from './Hotels.module.css'
import NotFound from '../NotFound/NotFound.jsx'
import { dateConversor } from '../utils/functions'

const Hotels = ({ hotelsList }) => {
	const hotelComponents = hotelsList.map((hotel) => {
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

	if (hotelsList.length !== 0) {
		return (
			<div className={style.hotels} id='hotels'>
				{hotelComponents}
			</div>
		)
	}
	return <NotFound />
}

export default Hotels
