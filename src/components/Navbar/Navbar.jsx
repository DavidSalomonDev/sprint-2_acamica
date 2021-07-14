import React from 'react'
import style from './Navbar.module.css'
import Country from '../inputs/Country/Country'
import Price from '../inputs/Price/Price'
import Size from '../inputs/Size/Size'
import Clear from '../inputs/Clear/Clear'
import StartDate from '../inputs/StartDate/StartDate'
import EndDate from '../inputs/EndDate/EndDate'

const Navbar = ({ filter, setter }) => {
	return (
		<div className={style.navbar} id='navbar'>
			<StartDate
				data={{
					id: 'startDate',
					name: 'startReservation',
				}}
				setStartDate={setter.setStartDate}
				inputValue={filter.startDate}
			/>
			<EndDate
				data={{
					id: 'endDate',
					name: 'endReservation',
				}}
				startDate={filter.startDate}
				setEndDate={setter.setEndDate}
				inputValue={filter.endDate}
			/>
			<Country
				setCountry={setter.setCountry}
				inputValue={filter.country}
			/>
			<Price setPrice={setter.setPrice} inputValue={filter.price} />
			<Size setSize={setter.setSize} inputValue={filter.size} />
			<Clear setter={setter} />
		</div>
	)
}

export default Navbar
