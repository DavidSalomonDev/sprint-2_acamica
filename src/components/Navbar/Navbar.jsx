import React from 'react'
import style from './Navbar.module.css'
import DateTime from '../inputs/Date/DateTime'
import Country from '../inputs/Country/Country'
import Price from '../inputs/Price/Price'
import Size from '../inputs/Size/Size'
import Clear from '../inputs/Clear/Clear'

const Navbar = () => {
	// window.onscroll = () => {
	// 	stickNavbar()
	// }

	return (
		<div className={style.navbar} id='navbar'>
			<DateTime />
			<DateTime />
			<Country />
			<Price />
			<Size />
			<Clear />
		</div>
	)
}


export default Navbar
