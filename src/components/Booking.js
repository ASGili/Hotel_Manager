import { useState } from "react"
import { deleteBooking } from "../HotelService"

const Booking = ({booking, removeBooking, checkIn})=> { 

    const [checkbox, setCheckbox] = useState(booking.status)

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id)
        })
    }

    const handleCheckbox = (event) => {
        const newStatus = event.target.checked
        setCheckbox(newStatus)
        checkIn(booking._id,booking)
    }

    return (
        <>
            <p>{booking.name}</p>  
            <p>{booking.email}</p>  
            <p>{booking.status? "Checked In" : "Not Checked In"}</p>
            <label>Press to check in: </label>
            <input onChange={handleCheckbox} type="checkbox"/>
            <button onClick={handleDelete} value={booking._id}>Delete Booking</button>
        </>
    )
}

export default Booking