import React from 'react'
import style from '../inputs.module.css'
import { dateToValue } from '../../../../../utils/functions'


const EndDate = ({ startDate, inputValue, setEndDate }) => {
	
	const handleEndDate = (e) => {
		const newDate = new Date(e.target.value).getTime() + 21600000
		setEndDate(newDate)
	}

	return (
		<div className={style.input}>
			<input
				className={style.date}
				type='date'
				name='trip-end'
				value={inputValue && dateToValue(inputValue)}
				min={dateToValue(startDate)}
				onChange={handleEndDate}

			/>
		</div>
	)
}

export default EndDate
