const services = [
  {
    title: 'Dental Checkups',
    description: 'Regular dental checkups are essential for maintaining good oral health.',
    image: 'https://images.pexels.com/photos/6627536/pexels-photo-6627536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Teeth Cleaning',
    description: 'Professional teeth cleaning helps remove plaque and prevents gum diseases.',
    image: 'https://img.freepik.com/free-photo/closeup-young-woman-having-her-teeth-whitened-with-ultraviolet-light-dental-clinic_662251-2598.jpg?w=900&t=st=1699599528~exp=1699600128~hmac=f7707dc4d8b13c5eda268dde801987059adbb348b392287d5a2de2ee8fda95af',
  },
  {
    title: 'Fillings',
    description: 'We offer tooth-colored fillings for a natural and aesthetically pleasing look.',
    image: 'https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Root Canals',
    description: 'Root canal treatments help save damaged teeth and alleviate pain.',
    image: 'https://img.freepik.com/premium-photo/3d-illustration-root-canal-treatment-process_613961-299.jpg?w=740',
  },
  {
    title: 'Crowns and Bridges',
    description: 'Crowns and bridges restore damaged or missing teeth, improving functionality.',
    image: 'https://img.freepik.com/free-vector/infographic-human-dental-crown_1308-97473.jpg?w=996&t=st=1699599312~exp=1699599912~hmac=08f18323099091ca1910176534cf1e6eb04df946da8c08878d14cfa557747f0a',
  },
  {
    title: 'Teeth Whitening',
    description: 'Achieve a brighter smile with our professional teeth whitening services.',
    image: 'https://img.freepik.com/free-photo/dentist-examining-female-patient-teeth_107420-65309.jpg?w=900&t=st=1699599358~exp=1699599958~hmac=61cd47f9d8691d36f80a1e6534a09f438eb94a29d4a9ed93461ff1b51aa098f2',
  },
  {
    title: 'Dental Implants',
    description: 'Restore your smile and chewing ability with our advanced dental implant procedures.',
    image: 'https://img.freepik.com/premium-photo/removable-partial-denture-medically-accurate-toothgenerative-ai_841229-1329.jpg?w=900',
  },
  // Add more services as needed
];

const ServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md transition duration-300 transform hover:scale-105">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
