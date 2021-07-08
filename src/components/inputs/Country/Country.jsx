import React, { useState } from 'react'
import style from '../../inputs/inputs.module.css'



function Country() {

	const [country, setCountry] = useState('all')
	const handleCountry = e => setCountry(e.target.value)


	return (
		<div className={`${style.input} ${style.country}`}>
			<select name="country" id="country" className={style.countrySelect} value={country} onChange={handleCountry}>
				<option value='all' defaultValue>Todos los países</option>
				<option value="Argentina" className={style.countryOption}>Argentina</option>
				<option value="Brasil" className={style.countryOption}>Brasil</option>
				<option value="Chile" className={style.countryOption}>Chile</option>
				<option value="Uruguay" className={style.countryOption}>Uruguay</option>
			</select>
		</div>
	)
}

export default Country
