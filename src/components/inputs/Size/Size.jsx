import React from 'react'
import style from '../../inputs/inputs.module.css'

const Size = () => {
	return (

		<div className={`${style.input} ${style.size}`}>
			<select name="rooms" id="rooms">
				<option value="todos" defaultValue>Todos los tamaños</option>
				<option value="pequeño">Pequeño</option>
				<option value="mediano">Mediano</option>
				<option value="grande">Grande</option>
			</select>
		</div>

	)
}


export default Size
