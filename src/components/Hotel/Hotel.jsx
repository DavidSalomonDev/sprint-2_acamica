/* eslint-disable react/prop-types */
import React from 'react'
import style from './Hotel.module.css'

const Hotel = (props) => {

	return (
		<div className={style.hotel} id={props.data.slug}>
			<img className={style.img} src={props.data.photo} alt={props.data.name} />
			<h2 className={style.name}>{props.data.name}</h2>
			<h3 className={style.startDate}>Desde el {props.data.availabilityFrom}</h3>
			<h3 className={style.endDate}>Hasta el {props.data.availabilityTo}</h3>
			<p className={style.description}>{props.data.description}</p>
			<p className={style.location}>{props.data.city}, {props.data.country}</p>
			<div className={style.wrapper}>
				<span className={style.rooms}>{props.data.rooms} Habitaciones</span> <span className={style.price}>Precio: {props.data.price}</span>
			</div>

			<button className={style.btn}>Reservar</button>
		</div>
	)
}

export default Hotel
