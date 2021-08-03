import React, { useState } from "react";
import Header from "./Header/Header.jsx";
import Navbar from "./Header/Navbar/Navbar.jsx";
import Hotels from "./Hotels/Hotels.jsx";
import Footer from "./Footer/Footer.jsx";
import hotelsData from "../data/data.js";

const App = () => {
  const [hotelsList, setHotelsList] = useState(hotelsData);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [country, setCountry] = useState("all");
  const [price, setPrice] = useState("all");
  const [size, setSize] = useState("all");

  return (
    <div className="App">
      <Header
        hotelsList={hotelsList}
        filter={{ startDate, endDate, country, price, size }}
      />
      <Navbar
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
  );
};

export default App;
