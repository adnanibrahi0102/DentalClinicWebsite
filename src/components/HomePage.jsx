import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://img.freepik.com/free-photo/dentist-with-smile_144627-886.jpg?w=900&t=st=1699525384~exp=1699525984~hmac=c877add9520e1b05a7707813feaf6f97d705ed038b2c7703ed804f2d345bd85e',
  'https://images.unsplash.com/photo-1581584731241-c134a1afe9a0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1643660526741-094639fbe53a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1664476419863-abc647c1d12f?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://img.freepik.com/free-photo/dentist-with-smile_144627-884.jpg?w=996&t=st=1699525302~exp=1699525902~hmac=c9b099183eef3a47a4d6c98bd9e9dc86e338e31f199d837d8f2f0e28763323db',
  'https://images.pexels.com/photos/3845624/pexels-photo-3845624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  // Add more dental image URLs as needed
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
              style={{ width: '100%', height: '450px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
      <div className="text-center mt-4 p-4">
        <h1 className="text-4xl font-bold mb-2">Welcome to Pristine Dental Clinic</h1>
        <p className="text-lg text-gray-800">Your source for quality dental care in [Your Location].</p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 mt-4 rounded-full">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default HomePage;
