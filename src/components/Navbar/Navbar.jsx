import React from 'react'
import style from './Navbar.module.css'
import DateTime from '../inputs/Date/DateTime.jsx'

const Navbar = () => {
	return (
		<div className={style.navbar}>
			<DateTime />
			<DateTime />
		</div>
	)
}

export default Navbar
