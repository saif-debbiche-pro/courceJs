'use strict';

// 1)default parametres (flightNum,numPassengers=0,price=numPassengers*15)
// 2)skip argements when colling functions (('LH123',undefined,10))


// 1)default parametres
const bookings=[];

const createBooking=function(flightNum,numPassengers=0,price=numPassengers*15){
    const booking={
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');//{flightNum: 'LH123', numPassengers: 0, price: 0}
createBooking('LH123',12);//{flightNum: 'LH123', numPassengers: 12, price: 180}

// 2)skip argements when colling functions
createBooking('LH123',undefined,10);//{flightNum: 'LH123', numPassengers: 0, price: 10}