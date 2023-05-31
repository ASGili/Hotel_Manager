import {useState} from 'react'
import {postBooking} from '../HotelService'

const HotelForm = ({addBooking})=> {

    const [formData, setFormData] = useState({name: "", email:"", status: 0})

    const handleSubmit = (event) => {
        event.preventDefault()
        postBooking(formData).then((data)=> {
            addBooking(data)
        })
        setFormData({name: "", email: ""})
    }
    const onChange = (event) => {
        const newFormData = {...formData} 
        newFormData[event.target.id] = event.target.value
        setFormData(newFormData)
    }

    return (
        <form onSubmit={handleSubmit} method="post">
            <label htmlFor="name">Guest Name: </label>
            <input onChange={onChange} type="text" id="name" value={formData.name} required/>
            <label htmlFor="email">Guest Email: </label>
            <input onChange={onChange} type="text" id="email" value={formData.email} required/>
            <input type="submit" value="Save Booking"/>
        </form>
    )
}

export default HotelForm