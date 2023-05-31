import Booking from "./Booking"
const BookingsGrid = ({bookings, removeBooking, checkIn})=> {

    const manyBookings = bookings.map((item, index)=>{
     return <Booking key={index} booking={item} removeBooking={removeBooking} checkIn={checkIn}/>
    })

    return (
        <>
        <h2>List of Bookings</h2>
            {manyBookings}
        </>
    )
}

export default BookingsGrid;