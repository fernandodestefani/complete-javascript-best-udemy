'use strict';
// Default Parameters
const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){ //it can be dinamically calculated by default
  // numPassengers = numPassengers || 1; old way of doing default parameters
  
  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000);
