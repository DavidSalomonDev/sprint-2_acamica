import { AttachMoneyOutlined } from "@material-ui/icons";


/**
 * Returns a readable with zeroes, for example 07-07-2021.
 * It's needed to have a date value on input
 */
export const today = new Date();
const todayPlusMili = new Date().setDate(new Date().getDate() + 1);
export const todayPlus = new Date(todayPlusMili);

export const dateToValue = (date) => {
  const regularDate = new Date(date);
  return `${regularDate.getFullYear()}-${
    regularDate.getMonth() + 1 > 9
      ? regularDate.getMonth() + 1
      : "0" + (regularDate.getMonth() + 1)
  }-${
    regularDate.getDate() > 9
      ? regularDate.getDate()
      : "0" + regularDate.getDate()
  }`;
};

export const dateToValuePlus = `${todayPlus.getFullYear()}-${
  todayPlus.getMonth() + 1 > 9
    ? todayPlus.getMonth() + 1
    : "0" + (todayPlus.getMonth() + 1)
}-${todayPlus.getDate() > 9 ? todayPlus.getDate() : "0" + todayPlus.getDate()}`;

export const valueToDate = new Date(dateToValue);
export const valueToDatePlus = new Date(dateToValuePlus);

export const dateToJS = (date) => {
  const regularDate = new Date(date);
  return `${regularDate.getFullYear()}/${
    regularDate.getMonth() + 1 > 9
      ? regularDate.getMonth() + 1
      : "0" + (regularDate.getMonth() + 1)
  }/${
    regularDate.getDate() > 9
      ? regularDate.getDate()
      : "0" + regularDate.getDate()
  }`;
};

/**
 *
 * Returns an array without duplicates, it iterates over an array that contains objects with several properties
 *
 * @param {Array} arrayElement The array you want to iterate, each element should contain objects
 * @param {string} objectProperty Object property which you want to remove the duplicate, it has to be in string format
 * @returns {Array} The array will be iterated without duplicates
 */
export const removeDuplicates = (arrayElement, objectProperty) => {
  let allElements = [];
  arrayElement.forEach((element) => {
    allElements.push(element[objectProperty]);
  });
  const withoutDuplicates = [...new Set(allElements)];
  return withoutDuplicates;
};

export const sizeConvertor = (hotelRooms) => {
  if (hotelRooms < 10) {
    return "pequeño";
  } else if (hotelRooms >= 10 && hotelRooms < 20) {
    return "mediano";
  } else return "grande";
};

export const sizeCategories = (array) => {
  const newArray = array.map((hotel) => {
    return (hotel.rooms = sizeConvertor(hotel.rooms));
  });
  const withoutDuplicates = [...new Set(newArray)];
  return withoutDuplicates;
};

/**
 *
 * @param {Array} hotels
 * @param {string} country
 * @returns Filter the array by their property
 */
export const filterHotels = (
  array,
  startDate,
  endDate,
  country,
  price,
  size
) => {
  const filteredArray = array
    // .filter((hotel) => {
    //   if (startDate === today.valueOf()) {
    //     return hotel;
    //   } else {
    //     if (startDate > today.valueOf()) {
    //       return hotel.availabilityFrom >= startDate;
    //     }
    //     return hotel;
    //   }
    // })
    .filter((hotel) => {
      if (!startDate || !endDate) {
        return hotel;
      } else {
        if (endDate >= startDate) {
          return (
            hotel.availabilityTo >= startDate && hotel.availabilityTo <= endDate
          );
        }

        return hotel;
      }
    })
    .filter((hotel) => {
      if (country !== "all") {
        return hotel.country === country;
      }
      return hotel;
    })
    .filter((hotel) => {
      if (price !== "all") {
        return hotel.price === price;
      }
      return hotel;
    })
    .filter((hotel) => {
      if (size !== "all") {
        const hotelSizeCategory = sizeConvertor(hotel.rooms);
        return hotelSizeCategory === size;
      }
      return hotel;
    });

  return filteredArray;
};

export const showCountry = (country) => {
  if (country === "Argentina") {
    return "En Argentina.";
  } else if (country === "Brasil") {
    return "En Brasil.";
  } else if (country === "Chile") {
    return "En Chile.";
  } else if (country === "Uruguay") {
    return "En Uruguay.";
  }
  return "En cualquier país.";
};

export const showPrice = (price) => {
  if (price === 1) {
    return "De bajo precio";
  } else if (price === 2 || price === 3) {
    return "De precio mediano.";
  } else if (price === 4) {
    return "De precios especiales";
  }
  return "De cualquier precio.";
};

export const showSize = (size) => {
  if (size === "pequeño") {
    return "De tamaño pequeño";
  } else if (size === "mediano") {
    return "De tamaño mediano.";
  } else if (size === "grande") {
    return "De tamaño grande";
  }
  return "De cualquier tamaño.";
};

export const priceIcon = (price) => {
  if (price === 1) {
    return (
      <span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
      </span>
    );
  } else if (price === 2) {
    return (
      <span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
      </span>
    );
  } else if (price === 3) {
    return (
      <span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
      </span>
    );
  } else {
    return (
      <span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
      </span>
    );
  }
};
