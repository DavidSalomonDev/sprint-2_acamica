import React from 'react'
import style from './Navbar.module.css'
import DateTime from '../inputs/Date/DateTime'
import Country from '../inputs/Country/Country'
import Price from '../inputs/Price/Price'
import Size from '../inputs/Size/Size'
import Clear from '../inputs/Clear/Clear'

const Navbar = () => {

	return (
		<div className={style.navbar} id='navbar'>
			<DateTime
				data={{
					id: 'startDate',
					name: 'startReservation'
				}}
			//value={startDate}
			//onChange={handleStartDate}
			/>
			<DateTime
				data={{
					id: 'endDate',
					name: 'endReservation'
				}}
			//value={endDate}
			//onChange={handleEndDate}
			/>
			<Country />
			<Price />
			<Size />
			<Clear />
		</div>
	)
}


export default Navbar
