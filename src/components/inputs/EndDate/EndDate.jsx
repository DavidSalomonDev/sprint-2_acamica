import React from 'react'
import style from '../../inputs/inputs.module.css'
import { dateToValue, dateToValuePlus } from '../../utils/functions'
import Swal from 'sweetalert2'

const EndDate = ({ startDate, inputValue, setEndDate }) => {
	let stringDate = dateToValue(dateToValuePlus)
	const checkDate = () => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Algo está mal!',
			footer: '<div href="">La fecha final no puede ser menor a la fecha inicial</div>'
		})
	}
	const handleEndDate = (e) => {
		const newDate = new Date(e.target.value).valueOf()
		if (newDate < startDate) {
			checkDate()
		} return setEndDate(newDate)
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
