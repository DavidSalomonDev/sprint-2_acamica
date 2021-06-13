import React from 'react'
// import hotelsData from '../../../scripts/data'
import style from '../../inputs/inputs.module.css'
// import { sizeCategories } from '../../utils/functions'


const Size = () => {
	// const categories = sizeCategories(hotelsData)
	// const sizeOptions = categories.map(category => {
	// 	return (
	// 		// eslint-disable-next-line react/jsx-key
	// 		<option value={category} className={style.sizeOptions}>{category}</option>
	// 	)
	// })


	return (

		<div className={`${style.input} ${style.size}`}>
			<select name="rooms" id="rooms">
				<option value="todos" selected>Todos los tamaños</option>
				<option value="pequeño">Pequeño</option>
				<option value="mediano">Mediano</option>
				<option value="grande">Grande</option>
				{/* {sizeOptions} */}
			</select>
		</div>

	)
}

export default Size
