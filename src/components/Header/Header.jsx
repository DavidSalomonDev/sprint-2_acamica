import React from 'react'
import style from './Header.module.css'

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.video}>
				<video className={style.content} autoPlay muted loop>
					<source src="./images/video.webm" type='video/webm' />
					<source src="./images/video.mp4" type="video/mp4"></source>
				</video>
			</div>
			<h1 className={style.title}>Hoteles</h1>
			<p className={`${style.info} ${style.infoLeft}`}>En cualquier fecha</p>
			<p className={`${style.info} ${style.infoRight}`}>En cualquier país</p>
			<p className={`${style.info} ${style.infoLeft}`}>De cualquier precio</p>
			<p className={`${style.info} ${style.infoRight}`}>De cualquier tamaño</p>
		</div>
	)
}

export default Header
