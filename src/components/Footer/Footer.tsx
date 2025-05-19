import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">VuDecor</h3>
            <p className="text-gray-400">
              Transforming spaces with innovative design solutions and premium
              decor products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links and Contact Info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <MdLocationOn size={20} />
                  <span className="text-gray-400">
                    123 Design Street, City, Country
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <MdPhone size={20} />
                  <span className="text-gray-400">+1 234 567 890</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MdEmail size={20} />
                  <span className="text-gray-400">info@vudecor.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for design inspiration and updates.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VuDecor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
