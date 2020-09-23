import React, { useState , useEffect } from 'react';
import { FramePage} from './../FramePage'
import { Button} from './../../Components/Button'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import  {requestHttp } from '../../config/HttpRequest' 
import swal from 'sweetalert';

export const BookingPage = () =>{
   
   const { id } = useParams()
   const [name , setName] = useState('')
   const [phone , setPhone] = useState('')
   const [email , setMail] = useState('')
   const [bookingDate , setBookingDate] = useState('')
   const [isValidForm, setIsValidForm] = useState(false)

   const bookingHandler = (e) =>{
       e.preventDefault()
       requestBooking()
   }

    const requestBooking = async () =>{
            const body = {
                experience_id: id,
                name,
                phone,
                email,
                booking_date: bookingDate
            }
            try {
                const response = await requestHttp('post', '/booking',body)
                swal({
                    title: "Success!",
                    text: response.data.status_message,
                    icon: "success",
                    button: "Aceptar",
                  });
            } catch (error) {
                swal({
                    title: "Error!",
                    text: error,
                    icon: "error",
                    button: "Aceptar",
                  });
            }
    }

    useEffect(() => {
        setIsValidForm(name !=='' && phone !=='' && email !=='' && bookingDate !=='')
    },[name,phone,email,bookingDate])
   return(<FramePage>
        <form onSubmit= {bookingHandler} className="booking-form">    
            <div>
                <label>Nombre:</label>
                <input value= {name} onChange={e =>setName(e.target.value)} type="text"/>
            </div>
            <div>
                <label>Telefono:</label>
                <input  value= {phone} onChange={e =>setPhone(e.target.value)} type="tel"/>
            </div>
            <div>
                <label>Correo:</label>
                <input  value= {email} onChange={e =>setMail(e.target.value)} type="email"/>
            </div>
            <div>
                <label>Fecha de reserva:</label>
                <input  value= {bookingDate} onChange={e =>setBookingDate(e.target.value)} type="date" />
            </div>
            <Button disabled={!isValidForm} type="submit" label="Reservar ahora"/>
        </form>

    </FramePage>
   )
}