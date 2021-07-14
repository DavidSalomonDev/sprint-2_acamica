import React from 'react'
import style from '../../inputs/inputs.module.css'
import { dateToValue } from '../../utils/functions'

const StartDate = ({ inputValue, setStartDate }) => {
	const handleStartDate = (e) => {
		setStartDate(e.target.value)
	}
	return (
		<div className={style.input}>
			<input
				className={style.date}
				placeholder={dateToValue}
				type='date'
				name='trip-start'
				value={inputValue}
				onChange={handleStartDate}
			/>
		</div>
	)
}

export default StartDate
