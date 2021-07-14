import React from 'react'
import style from '../../inputs/inputs.module.css'

const StartDate = ({ inputValue, setStartDate }) => {
	const handleStartDate = (e) => {
		setStartDate(e.target.value)
	}
	return (
		<div className={style.input}>
			<input
				className={style.date}
				placeholder='Elige fecha'
				type='date'
				name='trip-start'
				defaultValue={inputValue}
				min={inputValue}
				onChange={handleStartDate}
			/>
		</div>
	)
}

export default StartDate
