import React from 'react'
import Swal from 'sweetalert2'
import style from '../../inputs/inputs.module.css'
import { Delete } from '@material-ui/icons'

const Clear = ({ setter }) => {
	const alertaLimpiar = () => {
		Swal.fire({
			icon: 'info',
			title: 'Limpio',
			showConfirmButton: false,
			timer: 500,
		})
	}

	const resetFilters = () => {
		setter.setStartDate(' ')
		setter.setEndDate(' ')
		setter.setCountry('all')
		setter.setPrice('all')
		setter.setSize('all')
		alertaLimpiar()
	}

	return (
		<div>
			<button
				className={`${style.input} ${style.clear}`}
				onClick={resetFilters}>
				<Delete fontSize='large' /> Limpiar
			</button>
		</div>
	)
}

export default Clear
