import React, { useState } from 'react'
import Header from './Header/Header.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Hotels from './Hotels/Hotels.jsx'
import Footer from './Footer/Footer.jsx'
import hotelsData from '../scripts/data.js'
import { dateToValue, dateToValuePlus } from './utils/functions.js'

const App = () => {
	const [hotelsList, setHotelsList] = useState(hotelsData)
	const [startDate, setStartDate] = useState(dateToValue)
	const [endDate, setEndDate] = useState(dateToValuePlus)
	const [country, setCountry] = useState('all')
	const [price, setPrice] = useState('all')
	const [size, setSize] = useState('all')

	return (
		<div className='App'>
			<Header
				hotelsList={hotelsList}
				filter={{ startDate, endDate, country, price, size }}
			/>
			<Navbar
				hotelsList={hotelsList}
				setHotelsList={(hotels) => setHotelsList(hotels)}
				filter={{ startDate, endDate, country, price, size }}
				setter={{
					setStartDate,
					setEndDate,
					setCountry,
					setPrice,
					setSize,
				}}
			/>
			<Hotels
				hotelsList={hotelsList}
				filter={{ startDate, endDate, country, price, size }}
			/>
			<Footer />
		</div>
	)
}

export default App
