import React, { useState } from 'react'
import Header from './Header/Header.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Hotels from './Hotels/Hotels.jsx'
import Footer from './Footer/Footer.jsx'
import hotelsData from '../scripts/data.js'

const App = () => {
	const [hotelsList, setHotelsList] = useState(hotelsData)
	//const [country, setCountry] = useState('all')

	return (
		<div className='App'>
			<Header hotelsList={hotelsList} />
			<Navbar setHotelsList={(hotels) => setHotelsList(hotels)} />
			<Hotels hotelsList={hotelsList} />
			<Footer />
		</div>
	)
}

export default App
