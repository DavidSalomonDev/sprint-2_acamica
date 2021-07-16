import React from 'react'
import style from '../../inputs/inputs.module.css'
import { dateToValue } from '../../utils/functions'
import Swal from 'sweetalert2'

const StartDate = ({ endDate, inputValue, setStartDate, setEndDate }) => {
	const checkDate = () => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Algo está mal!',
			footer: '<div>La fecha final no puede ser menor a la fecha inicial</div>'
		})	
	}
	const handleStartDate = (e) => {
		const newDate = new Date(e.target.value).getTime() + 21600000
		if (endDate > inputValue) {
			checkDate()
			setStartDate(' ')
			setEndDate(' ')
		} else return setStartDate(newDate)
	}
	return (
		<div className={style.input}>
			<input
				className={style.date}
				type='date'
				name='trip-start'
				value={dateToValue(inputValue)}
				min={dateToValue(new Date())}
				onChange={handleStartDate}
			/>
		</div>
	)
}

export default StartDate
