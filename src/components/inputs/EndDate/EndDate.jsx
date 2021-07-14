import React from 'react'
import style from '../../inputs/inputs.module.css'

const EndDate = ({ inputValue, setEndDate }) => {
	const handleEndDate = (e) => {
		setEndDate(e.target.value)
	}
	return (
		<div className={style.input}>
			<input
				className={style.date}
				placeholder='Elige fecha'
				type='date'
				name='trip-end'
				defaultValue={inputValue}
				min={inputValue}
				onChange={handleEndDate}
			/>
		</div>
	)
}

export default EndDate
