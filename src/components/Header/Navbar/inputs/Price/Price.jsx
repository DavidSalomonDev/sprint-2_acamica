import React from 'react'
import style from '../inputs.module.css'

const Price = ({ inputValue, setPrice }) => {
	const handlePrice = (e) => {
		let intNum =
			e.target.value !== 'all' ? parseInt(e.target.value, 10) : 'all'
		setPrice(intNum)
	}

	return (
		<div className={`${style.input} ${style.size}`}>
			<select
				name='rooms'
				id='rooms'
				onChange={handlePrice}
				value={inputValue}>
				<option value='all'>Todos los precios</option>
				<option value={1}>$</option>
				<option value={2}>$$</option>
				<option value={3}>$$$</option>
				<option value={4}>$$$$</option>
			</select>
		</div>
	)
}

export default Price
