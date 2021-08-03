import React from 'react'
import { LocationOn, LocalHotel } from '@material-ui/icons'
import Swal from 'sweetalert2'
import PriceIcon from './PriceIcon'
import style from './Hotel.module.css'

const Hotel = ({ data }) => {
	const alertaReservado = async () => {
		await Swal.fire({
			icon: 'success',
			title: 'Hotel Reservado',
			showConfirmButton: false,
			timer: 1500,
		})
	}

	return (
		<section className={style.hotel} id={data.slug}>
			<img className={style.img} src={data.photo} alt={data.name} />
			<h2 className={style.name}>{data.name}</h2>
			<h3 className={style.startDate}>
				Desde el {data.availabilityFrom}
			</h3>
			<h3 className={style.endDate}>Hasta el {data.availabilityTo}</h3>
			<p className={style.description}>{data.description}</p>
			<p className={style.location}>
				<LocationOn /> {data.city}, {data.country}
			</p>
			<div className={style.wrapper}>
				<span className={style.rooms}>
					<LocalHotel fontSize='large' /> {data.rooms} Habitaciones
				</span>
				<span className={style.price}>
					Precio: <PriceIcon price={data.price}/>
				</span>
			</div>
			<button className={style.btn} onClick={alertaReservado}>
				Reservar
			</button>
		</section>
	)
}

export default Hotel
