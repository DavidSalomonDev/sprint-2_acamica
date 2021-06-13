import React from 'react'
import hotelsData from '../../../scripts/data'
import { removeDuplicates } from '../../utils/functions'
import style from '../../inputs/inputs.module.css'



function Country() {
	const countries = removeDuplicates(hotelsData, 'country')
	const countryOptions = countries.map(country => {
		return (
			// eslint-disable-next-line react/jsx-key
			<option key={country} value={country} className={style.countryOption}>{country}</option>
		)
	})

	return (
		<div className={`${style.input} ${style.country}`}>
			<select name="country" id="country" className={style.countrySelect}>
				<option value="" selected>Todos los países</option>
				{countryOptions}
			</select>
		</div>
	)
}

export default Country
