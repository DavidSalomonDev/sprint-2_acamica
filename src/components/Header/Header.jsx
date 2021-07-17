import React from 'react'
import style from './Header.module.css'
import {
	
	dateConversor,
	showCountry,
	showPrice,
	showSize,
	
} from '../utils/functions'

const Header = ({ filter }) => {
	return (
		<div className={style.header}>
			<div className={style.video}>
				<video autoPlay muted loop>
					<source src='./images/video.webm' type='video/webm' />
					<source src='./images/video.mp4' type='video/mp4'></source>
				</video>
			</div>
			<h1 className={style.title}>Hoteles</h1>
			<p className={`${style.info} ${style.infoLeft}`}>
				{filter.startDate === ' ' ||
					filter.endDate === ' '
					? 'De cualquier fecha'
					: `Del ${dateConversor(
						filter.startDate
					)} al ${dateConversor(filter.endDate)}`}
			</p>
			<p className={`${style.info} ${style.infoRight}`}>
				{showCountry(filter.country)}
			</p>
			<p className={`${style.info} ${style.infoLeft}`}>
				{showPrice(filter.price)}
			</p>
			<p className={`${style.info} ${style.infoRight}`}>
				{showSize(filter.size)}
			</p>
		</div>
	)
}

export default Header
