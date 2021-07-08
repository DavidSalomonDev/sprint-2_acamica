import React from 'react'
import Hotel from '../Hotel/Hotel.jsx'
import style from './Hotels.module.css'
import hotelsData from '../../scripts/data'
import { dateConversor } from '../utils/functions'


const Hotels = () => {

	const hotelComponents = hotelsData.map(hotel => {


		return (
			<Hotel
				key={hotel.slug}
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

	return (
		<div className={style.hotels} id='hotels'>
			{hotelComponents}
		</div>
	)
}

export default Hotels
