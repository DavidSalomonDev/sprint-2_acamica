import React from 'react'
import style from './Navbar.module.css'
import DateTime from '../inputs/Date/DateTime'
import Country from '../inputs/Country/Country'
import Price from '../inputs/Price/Price'
import Size from '../inputs/Size/Size'

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<DateTime />
			<DateTime />
			<Country />
			<Price />
			<Size />
		</div>
	)
}


export default Navbar
