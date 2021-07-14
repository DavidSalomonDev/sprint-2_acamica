import React from 'react'
import style from '../../inputs/inputs.module.css'

const Size = ({ inputValue, setSize }) => {
	const handleSize = (e) => {
		setSize(e.target.value)
	}

	return (
		<div className={`${style.input} ${style.size}`}>
			<select
				name='rooms'
				id='rooms'
				onChange={handleSize}
				value={inputValue}>
				<option value='all'>Todos los tamaños</option>
				<option value='pequeño'>Pequeño</option>
				<option value='mediano'>Mediano</option>
				<option value='grande'>Grande</option>
			</select>
		</div>
	)
}

export default Size
