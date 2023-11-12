
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-md shadow-md max-w-md">
      <h1 className="text-4xl font-bold mb-6 text-teal-600">Get In Touch</h1>

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-teal-500 text-lg mr-2" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Visit Us:</h2>
            <span className="text-md">Wanpoh, Anantnag</span>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-teal-500 text-lg mr-2" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Email Us:</h2>
            <a href="mailto:pristinedentalclinic7@gmail.com" className="text-md">pristinedentalclinic7@gmail.com</a>
          </div>
        </div>
        
        <div className="flex items-center">
          <FaPhone className="text-teal-500 text-lg mr-2" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Call Us:</h2>
            <a href="tel:+919018020994" className="text-md">+919018020994</a>
          </div>
        </div>
      </div>

      
      <p className="text-lg text-gray-800 mb-4">
        Feel free to reach out to us through the provided contact information. We are here to assist you!
      </p>

     
    </div>
  );
};

export default Contact;
