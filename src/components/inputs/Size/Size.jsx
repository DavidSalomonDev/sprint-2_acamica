import React, { useState } from 'react'
import style from '../../inputs/inputs.module.css'

const Size = () => {

	const [size, setSize] = useState('all')
	const handleSize = e => setSize(e.target.value)


	return (

		<div className={`${style.input} ${style.size}`} onChange={handleSize} value={size} >
			<select name="rooms" id="rooms">
				<option value="all" defaultValue>Todos los tamaños</option>
				<option value="pequeño">Pequeño</option>
				<option value="mediano">Mediano</option>
				<option value="grande">Grande</option>
			</select>
		</div>

	)
}


export default Size
