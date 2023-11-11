

const Appointment = () => {
    const phoneNumber='+919018020994';
    const message='I would like to book an appointment.';


    const handleClick=()=>{
       const whatsappUrl=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
       window.open(whatsappUrl,'_blank')
    }
  return (
    <div>
      <button onClick={handleClick}  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 mt-4 rounded-full">
          Book an Appointment
        </button>
    </div>
  )
}

export default Appointment
