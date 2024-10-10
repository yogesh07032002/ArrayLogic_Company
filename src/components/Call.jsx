import Connect from '../../public/Connect.png';
import ContactPage from '../../public/ContactPage.jpg'

function Call() {
  return (
    <>
    
      <div className='bg-slate-100'>
        <div>
        <div className="mt-20 ">
          <img src={ContactPage} alt="Comming Soon"></img>
        </div>
        <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center mt-1 md:mt-10">
          Get in Touch by Filling Out the Form
          </h1>
        </div>
        </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  mt-0 pb-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-36">
          <img
            src={Connect}
            className="hidden md:block w-92 h-92"
            alt="Hey, we are LiftLogic"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-36">
          <h1 className="text-xl md:text-4xl font-bold">Contact Us</h1>
          <form className="contact-form mt-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
      </div>
    </>
  );
}

export default Call;
