import React from 'react'
import style from '../../inputs/inputs.module.css'

const DateTime = () => {
	const today = new Date()
	const dateToValue = `${today.getFullYear()}-${(today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : ('0' + (today.getMonth() + 1))}-${today.getDate() > 9 ? today.getDate() : ('0' + today.getDate())}`

	return (
		<div
			className={style.input}

		>
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
