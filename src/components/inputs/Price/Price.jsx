import React from 'react'
import style from '../../inputs/inputs.module.css'

const Price = ({ inputValue, setPrice }) => {
	const handlePrice = (e) => {
		setPrice(e.target.value)
	}

	return (
		<div className={`${style.input} ${style.size}`}>
			<select name='rooms' id='rooms' onChange={handlePrice} value='all'>
				<option value={inputValue}>Todos los precios</option>
				<option value='1'>$</option>
				<option value='2'>$$</option>
				<option value='3'>$$$</option>
				<option value='4'>$$$$</option>
			</select>
		</div>
	)
}

export default Price
