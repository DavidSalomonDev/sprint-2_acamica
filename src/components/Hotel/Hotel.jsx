import React from 'react'
import style from './Hotel.module.css'
import image from '../../assets/images/la-bamba-de-areco.jpg'

const Hotel = (props) => {
    return (
        <div className={style.hotel}>
            <img className={style.img} src={image} alt={props.data.name} />
            <h2 className={style.name}>{props.data.name}</h2>
            <h3 className={style.startDate}>Desde el {props.data.availabilityFrom}</h3>
            <h3 className={style.endDate}>Hasta el {props.data.availabilityTo}</h3>
            <p className={style.description}>{props.data.description}</p>
            <p className={style.location}>{props.data.city}, {props.data.country}</p>
            <span className={style.rooms}>{props.data.rooms} Habitaciones</span> <span className={style.price}>Precio: {props.data.price}</span>
            <button className={style.btn}>Reservar</button>
        </div>
    )
}

export default Hotel
