import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import ToYou from "../Assets/2YOU.png"
import subprime from "../Assets/Subprime.png"
import deep from "../Assets/DeepIDV.png"
import nextquest from "../Assets/Next Quest.png"


const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white w-full">
      {/* Main footer */}
      <div className="w-full px-8 py-16 md:py-24 min-h-[25vh] flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <span className="ml-3 text-2xl font-bold">YOU</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Secure communication and scheduling for everyone.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">Features</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Privacy</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Security</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Pricing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">About</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Contact</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  <Link to="/helpdesk" className="text-gray-400 hover:text-white cursor-pointer">Help Desk</Link>
                </li>
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  <Link to="/feedback" className="text-gray-400 hover:text-white cursor-pointer">Feedback</Link>
                </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <button>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl text-gray-400 hover:text-white"
                />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  className="text-xl text-gray-400 hover:text-white"
                />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="text-xl text-gray-400 hover:text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 w-full"></div>

      {/* Subprime Platforms Section */}
      <div className="w-full bg-gray-900 px-8 py-12 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-14 items-start">
          
          {/* Column 1: Subprime Branding */}
          <div>
            <p className="font-semibold text-white text-base mb-2">Powered by Subprime Platforms</p>
            <p className="max-w-sm">
              A growing suite of products focused on secure communication, productivity, and connectivity.
            </p>
          </div>

          {/* Column 2: Empty Spacer or Future Section (optional) */}
          <div></div>

          {/* Column 3: Other Products */}
          <div>
            <h4 className="text-white font-semibold mb-3">Other Products</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <img src={subprime} alt="Subprime" className="w-6 h-6" />
                <a href="https://product1.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Subprime
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <img src={deep} alt="Product#1" className="w-6 h-6" />
                <a href="https://product2.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  DeepIDV
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <img src={nextquest} alt="Product#2" className="w-6 h-6" />
                <a href="https://product3.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  NextQuest
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company Links */}
          <div className="text-left md:text-right ">
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://yourmaincompany.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://yourmaincompany.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://yourmaincompany.com/careers" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Legal & copyright bar */}
      <div className="border-t border-gray-700 text-sm text-gray-400 py-4 px-8 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} 2YOU. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
