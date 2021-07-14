import React from 'react'
import style from '../../inputs/inputs.module.css'

const Size = ({ inputValue, setSize }) => {
	const handleSize = (e) => {
		setSize(e.target.value)
	}

	return (
		<div className={`${style.input} ${style.size}`} onChange={handleSize}>
			<select name='rooms' id='rooms'>
				<option value={inputValue} defaultValue>
					Todos los tamaños
				</option>
				<option value='pequeño'>Pequeño</option>
				<option value='mediano'>Mediano</option>
				<option value='grande'>Grande</option>
			</select>
		</div>
	)
}

export default Size
