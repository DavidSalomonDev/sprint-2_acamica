import React from 'react'
import style from '../../inputs/inputs.module.css'
import { dateToValue, dateToValuePlus } from '../../utils/functions'

const EndDate = ({ startDate, inputValue, setEndDate }) => {
	let stringDate = dateToValue(dateToValuePlus)
	const handleEndDate = (e) => {
		const newDate = new Date(e.target.value).valueOf()
		setEndDate(newDate)
	}
	return (
		<div className={style.input}>
			<input
				className={style.date}
				placeholder={stringDate}
				type='date'
				name='trip-end'
				value={dateToValue(inputValue)}
				min={dateToValue(startDate)}
				onChange={handleEndDate}
			/>
		</div>
	)
}

export default EndDate
