import React from 'react'
import style from '../../inputs/inputs.module.css'
import { dateToValue } from '../../utils/functions'

const DateTime = () => {



	return (
		<div className={style.input}>
			<input
				className={style.date}
				placeholder="Elige fecha"
				type="date"
				name="trip-start"
				defaultValue={dateToValue}
				min={dateToValue}
			/>
		</div >
	)
}

export default DateTime
