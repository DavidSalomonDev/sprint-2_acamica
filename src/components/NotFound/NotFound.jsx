import React from 'react'
import MoodBadIcon from '@material-ui/icons/MoodBad'
import style from './NotFound.module.css'

const NotFound = () => {
	return (
		<div className={style.NotFound}>
			<MoodBadIcon style={{ fontSize: 60 }} />
			<h2 className={style.NotFoundFont}>
				Lo sentimos, no hay ningún hotel con los filtros seleccionados
			</h2>
		</div>
	)
}

export default NotFound
