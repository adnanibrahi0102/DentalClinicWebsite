const AboutPage = () => {
  
  const actualImage1 = 'https://images.pexels.com/photos/12917374/pexels-photo-12917374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const actualImage2 = 'https://images.pexels.com/photos/4971503/pexels-photo-4971503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-6">About Our Clinic</h1>
      <p className="text-lg leading-relaxed mb-6">
        Welcome to our professional dental clinic, dedicated to providing top-notch dental care. Our clinic is built on the principles of excellence, compassion, and innovation in dentistry.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        At our clinic, we are committed to delivering personalized and comprehensive dental services. Our team consists of highly skilled and experienced dentists, hygienists, and support staff devoted to improving and maintaining your oral health.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <img src={actualImage1} alt="Dental Clinic Image 1" className="w-full h-full object-cover rounded-md mb-4" />
        <img src={actualImage2} alt="Dental Clinic Image 2" className="w-full h-full object-cover rounded-md mb-4" />
      </div>
      <p className="text-lg leading-relaxed mb-6">
        Our mission is to provide exceptional dental care in a welcoming and comfortable environment. We believe in creating positive experiences for our patients and strive to exceed your expectations at every visit.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        We take pride in being a part of the Wanpoh, Anantnag community and are dedicated to contributing to the oral health and well-being of our neighbors. Your trust in us is our greatest motivation, and we look forward to serving you and your family for years to come.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Thank you for choosing our clinic. We eagerly anticipate the opportunity to care for your smile.
      </p>
     
    </div>
  );
};

export default AboutPage;






