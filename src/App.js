import HotelHeader from "./components/HotelHeader";
import HotelForm from "./components/HotelForm";
import BookingsGrid from "./components/BookingsGrid";
import { useEffect, useState } from "react";
import {getBookings} from "./HotelService";
import { updateBooking } from "./HotelService";

function App() {

  const [bookings, setBookings] = useState([])

  useEffect(()=>{
    getBookings().then((allBookings)=>{
      setBookings(allBookings)
    }, [])
  })


  const addBooking = (booking)=> {
    setBookings([...bookings, booking ]);
  }

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter((item)=> item._id !== id)
    setBookings(bookingsToKeep)
  }

  const checkIn = (id)=>{
    updateBooking(id)
    
  }

  return (
  <>
  <HotelHeader/>
  <HotelForm addBooking={addBooking}/>
  <BookingsGrid bookings={bookings} removeBooking={removeBooking} checkIn={checkIn}/>
   </>
  );
}

export default App;
