import React from 'react'
import Hotel from '../Hotel/Hotel.jsx'
import style from './Hotels.module.css'
import hotelsData from '../../assets/scripts/data'


const Hotels = () => {

    const hotelComponents = hotelsData.map(hotel => {
        return (
            <Hotel
                data={{
                    key: hotel.slug,
                    name: hotel.name,
                    photo: hotel.photo,
                    description: hotel.description,
                    availabilityFrom: hotel.availabilityFrom,
                    availabilityTo: hotel.availabilityTo,
                    rooms: hotel.rooms,
                    city: hotel.city,
                    country: hotel.country,
                    price: hotel.price,
                }}
            />
        )
    })

    return (
        <div className={style.hotels}>
            {hotelComponents}
        </div>
    )
}

export default Hotels
