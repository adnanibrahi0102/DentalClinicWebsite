import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../assets/Logo transparent.png'
import Appointment from './Appointment';

const images = [
  logo,
  'https://img.freepik.com/free-photo/dentist-with-smile_144627-886.jpg?w=900&t=st=1699525384~exp=1699525984~hmac=c877add9520e1b05a7707813feaf6f97d705ed038b2c7703ed804f2d345bd85e',
  'https://images.unsplash.com/photo-1581584731241-c134a1afe9a0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1643660526741-094639fbe53a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://img.freepik.com/free-photo/woman-whitening-treatment_1232-185.jpg?w=900&t=st=1699771784~exp=1699772384~hmac=5c2b1fdc122171897a056a39071025133a808511adb0e62e2d9ca42df7452719',
  'https://img.freepik.com/free-photo/dentist-with-smile_144627-884.jpg?w=996&t=st=1699525302~exp=1699525902~hmac=c9b099183eef3a47a4d6c98bd9e9dc86e338e31f199d837d8f2f0e28763323db',
  'https://img.freepik.com/premium-photo/orthodontic-treatment-dental-care-concept-beautiful-woman-healthy-smile-close-up-closeup-ceramic_168410-2197.jpg?w=900',
  'https://images.pexels.com/photos/3845624/pexels-photo-3845624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const HomePage = () => {
  
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '530px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
      <div className="text-center mt-4 p-4">
        <h1 className="text-4xl font-bold mb-2">Welcome to Pristine Dental Clinic</h1>
        <p className="text-lg text-gray-800">
        Your trusted partner for comprehensive dental care in Wanpoh, Anantnag. We are dedicated to providing top-notch services to enhance your oral health and well-being, ensuring a brighter and healthier smile for you.
        </p>
        <Appointment/>
      </div>
    </div>
  );
};

export default HomePage;
