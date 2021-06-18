import React from 'react'
import Swal from 'sweetalert2'
import style from '../../inputs/inputs.module.css'
import { Delete } from '@material-ui/icons'

const Clear = () => {
	const alertaLimpiar = () => {
		Swal.fire({
			icon: 'info',
			title: 'Limpio',
			showConfirmButton: false,
			timer: 500
		})
	}
	return (
		<div>
			<button
				className={`${style.input} ${style.clear}`}
				onClick={() => alertaLimpiar()}
			>
				<Delete fontSize="large" />	Limpiar
			</button>
		</div>
	)
}

export default Clear