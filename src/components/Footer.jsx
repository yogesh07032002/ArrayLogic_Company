import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">ArrayLogic Softwares Pvt. Ltd.</h2>
          <p className="mt-3 text-sm">Delivering cutting-edge IT solutions since 2024.</p>
          <p className="mt-3 text-sm">
            <span className="font-semibold">Address:</span> Office No. 50, Kopre Gawthan, Near Cosmmos Bank, Karve Nagar, Pune, 411052.
          </p>
          <p className="mt-3 text-sm">
            <span className="font-semibold">Contact:</span> +91 7620162336<br />
            <a href="mailto:info@arraylogic.in" className="text-orange-400 hover:underline">info@arraylogic.in</a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-6">
          <nav>
            <h6 className="text-lg font-semibold mb-4 text-orange-400">Services</h6>
            <ul className="space-y-2 text-sm">
              {["Web Development", "Software Development", "Application Development", "Digital Marketing", "Cloud Services", "SEO", "Data Solution"].map((service, index) => (
                <li key={index}>
                  <Link to="/Services" className="hover:text-orange-400 transition" onClick={() => window.scrollTo(0, 0)}>{service}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <h6 className="text-lg font-semibold mb-4 text-orange-400">Company</h6>
            <ul className="space-y-2 text-sm">
              {["About Us", "Contact", "Jobs", "Press Kit"].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.replace(/\s/g, "")}`} className="hover:text-orange-400 transition">{item}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Get in Touch */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-orange-400">Get in Touch</h6>
          <p className="text-sm text-gray-400">We’re here to help. Reach out for collaborations or support.</p>
          <div className="mt-4">
            <a href="mailto:info@arraylogic.in" className="text-orange-400 hover:underline">info@arraylogic.in</a>
          </div>
          <div className="flex space-x-4 mt-4">
            {["twitter", "youtube", "facebook"].map((platform, index) => (
              <a key={index} href="#" className="hover:text-orange-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  {platform === "twitter" && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>}
                  {platform === "youtube" && <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>}
                  {platform === "facebook" && <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-center text-sm py-4 mt-8">
        &copy; {new Date().getFullYear()} ArrayLogic Softwares Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
