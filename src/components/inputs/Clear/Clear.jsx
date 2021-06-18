import React from 'react'
import style from '../../inputs/inputs.module.css'
import { Delete } from '@material-ui/icons'

const Clear = () => {
	return (
		<div>
			<button className={`${style.input} ${style.clear}`}>
				<Delete fontSize="large" />	Limpiar
			</button>
		</div>
	)
}

export default Clear