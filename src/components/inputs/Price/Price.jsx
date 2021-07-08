import React from 'react'
import style from '../../inputs/inputs.module.css'


const Price = () => {
	return (

		<div className={`${style.input} ${style.size}`}>
			<select name="rooms" id="rooms">
				<option value="todos" defaultValue>Todos los precios</option>
				<option value="1">$</option>
				<option value="2">$$</option>
				<option value="3">$$$</option>
				<option value="4">$$$$</option>
			</select>
		</div>

	)
}

export default Price
