import React, { useState, useEffect } from "react";

const BookingData = () => {
  const userIds = localStorage.getItem('USERID');
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const storedBookingData = JSON.parse(localStorage.getItem(`bookingData${userIds}`));
    if (storedBookingData) {
      setBookingData(storedBookingData);
    }
  }, [userIds]);

  return (
    <div>
      {bookingData.length > 0 ? (
        <div>
          {bookingData.map((data, index) => (
            <div key={index}>
              <p>Booking {index + 1}:</p>
              <p>Check-in Date: {data.checkIn}</p>
              <p>Check-out Date: {data.checkOut}</p>
              <p>Price: {data.totalPrice}</p>
              {/* ... and other properties */}
            </div>
          ))}
        </div>
      ) : (
        <p>No booking data found for this user.</p>
      )}
    </div>
  );
};

export default BookingData;
