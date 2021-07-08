import React from 'react'
import style from '../../inputs/inputs.module.css'
import { dateToValue } from '../../utils/functions'

const DateTime = () => {

	//const today = new Date()
	//const [startDate, setStartDate] = useState(today.valueOf())
	//const [endDate, setEndDate] = useState('')

	//const handleStartDate = e => setStartDate(e.target.value)
	//const handleEndDate = e => setEndDate(e.target.value)


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
