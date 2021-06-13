import React from 'react'
import style from '../../inputs/inputs.module.css'

const Clear = () => {
	return (
		<div>
			<button className={`${style.input} ${style.clear}`}>Limpiar</button>
		</div>
	)
}

export default Clear