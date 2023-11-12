import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-400 text-slate-900 font-bold p-3 text-center">
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold mb-2">Contact Us</p>
        <p>Email: pristinedentalclinic7@gmail.com</p>
        <p>Phone: +91 90180 20994</p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {/* Facebook Icon */}
        <a href="https://www.facebook.com/profile.php?id=61552596422251&mibextid=gjUFcU" target="_blank" rel="noopener noreferrer">
          <FaFacebook size="2em" className="text-black hover:text-blue-600 transition duration-300" />
        </a>
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/pristine_omf_clinic" target="_blank" rel="noopener noreferrer">
          <FaInstagram size="2em" className="text-black hover:text-pink-700 transition duration-300" />
        </a>
        {/* WhatsApp Icon */}
        <a href="https://wa.me/+919018020994" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size="2em" className="text-black hover:text-green-600 transition duration-300" />
        </a>
      </div>
      <div className="mt-4">
        <p className="text-sm">&copy; 2023 Pristine Dental Clinic</p>
      </div>
    </footer>
  );
};

export default Footer;
