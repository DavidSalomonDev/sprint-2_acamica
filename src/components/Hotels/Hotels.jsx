import React from 'react'
import Hotel from '../Hotel/Hotel.jsx'
import style from './Hotels.module.css'
import hotelsData from '../../scripts/data'


const Hotels = () => {

    const hotelComponents = hotelsData.map(hotel => {

        //Time conversor from miliseconds to Spanish dates

        const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        const fullDateFrom = new Date(hotel.availabilityFrom)
        const fullDateTo = new Date(hotel.availabilityTo)
        const dateFrom = `${days[fullDateFrom.getDay()]}, ${fullDateFrom.getDate()} de ${months[fullDateFrom.getMonth()]} de ${fullDateFrom.getFullYear()}`
        const dateTo = `${days[fullDateTo.getDay()]}, ${fullDateTo.getDate()} de ${months[fullDateTo.getMonth()]} de ${fullDateTo.getFullYear()}`

        return (
            <Hotel
                data={{
                    key: hotel.slug,
                    name: hotel.name,
                    photo: hotel.photo,
                    description: hotel.description,
                    availabilityFrom: dateFrom,
                    availabilityTo: dateTo,
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
