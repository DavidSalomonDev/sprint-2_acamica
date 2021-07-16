import React from 'react'
import style from '../../inputs/inputs.module.css'
import { dateToValue } from '../../utils/functions'

const StartDate = ({ inputValue, setStartDate, setEndDate }) => {
	let stringDate = dateToValue(inputValue)
	const handleStartDate = (e) => {
		const newDate = new Date(e.target.value).getTime() + 21600000
		setStartDate(newDate)
		setEndDate(newDate + 864000000)
	}
	return (
		<div className={style.input}>
			<input
				className={style.date}
				placeholder={stringDate}
				type='date'
				name='trip-start'
				value={stringDate}
				min={dateToValue(new Date())}
				onChange={handleStartDate}
			/>
		</div>
	)
}

export default StartDate
