import Connect from "../../public/Connect.jpg";
import ScrollToTop from "react-scroll-to-top";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const serviceID = 'service_0a87jiv';
    const templateID = 'template_5w0j5jp'; // Your template ID for company notifications
    const publicKey = '3t8z3oCaATGyJCtmr';
  
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'LiftLogic Softwares Pvt. Ltd.',
      message: message,
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email Sent Successfully', response);
        toast.success('Your message has been sent successfully!'); // Alert on success
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error', error);
        toast.error('An error occurred while sending your message. Please try again.'); // Alert on error
      });
  };
  

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  mt-0 pb-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-0 ">
          <img
            src={Connect}
            className=" md:block w-92 h-92"
            alt="Hey, we are LiftLogic"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-36">
          <h1 className="text-xl md:text-4xl font-bold text-center">Contact Us</h1>

          <form onSubmit={handleSubmit} className="contact-form mt-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 mb-4 border border-red-700 rounded-lg focus:outline-none focus:border-blue-600"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mb-4 border border-red-700 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-3 py-2 mb-4 border border-red-700 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ScrollToTop
        smooth
        className=""
        style={{
          backgroundColor: "blue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </>
  );
}

export default Contact;
