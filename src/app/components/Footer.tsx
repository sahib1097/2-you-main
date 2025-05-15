import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
{/*import ToYou from "../Assets/2YOU.png"*/}
import subprime from "../Assets/subprime platforms White transparent.png"
import deep from "../Assets/DeepIDV.png"
import nextquest from "../Assets/Next Quest.png"


const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white w-full">
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
              <li className="text-gray-400 hover:text-white cursor-pointer">
                  <Link to="/#features" className="text-gray-400 hover:text-white cursor-pointer">Features</Link>
              </li> 
              <li className="text-gray-400 hover:text-white cursor-pointer">
                  <Link to="/privacy" className="text-gray-400 hover:text-white cursor-pointer">Privacy</Link>
              </li>              
              <li className="text-gray-400 hover:text-white cursor-pointer">
                <Link to="/security" className="text-gray-400 hover:text-white cursor-pointer">Security</Link>
              </li>
              {/* <li className="text-gray-400 hover:text-white cursor-pointer">Pricing</li> */}
            </ul>
          </div>

          {/* Company */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">About</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Contact</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">
                <a href="https://subprimeplatforms.com/careers" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Careers
                </a>
              </li>
              
            </ul>
          </div> */}

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
                <li className="text-gray-400 hover:text-white cursor-pointer">
                  <Link to="/support" className="text-gray-400 hover:text-white cursor-pointer">Help Desk</Link>
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
              <a href="https://www.linkedin.com/showcase/2you-chat" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl text-gray-400 hover:text-white"
                />
              </a>
              <a href="https://x.com/2you_chat" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  className="text-xl text-gray-400 hover:text-white"
                />
              </a>
              <a href="https://www.facebook.com/2you" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="text-xl text-gray-400 hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800 w-full"></div>

        {/* Subprime Platforms Section */}
        <div className="w-full bg-black px-8 py-12 text-sm text-gray-400">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:gap-24 ml-0">
            
            {/* Column 1: Subprime Branding (flush left) */}
            <div className="shrink-0 md:w-1/3">
              {/* Placeholder Icon */}
              <div className="w-40 h-20 bg-black rounded-full flex items-center justify-center mb-4">
                <img src={subprime} alt="Subprime" />              
              </div>
              <p className="font-semibold text-white text-base mb-2">Powered by Subprime Platforms</p>
              <p className="max-w-sm">
                A growing suite of products focused on secure communication, productivity, and connectivity.
              </p>
            </div>

            {/* Column Group: Other Products + Company (aligned to the right of Subprime) */}
            <div className="flex flex-col md:flex-row w-full mt-12 md:mt-0 space-y-12 md:space-y-0">
              
              {/* Spacer */}
              <div className="hidden md:block md:w-1/3" />

              {/* Other Products */}
              <div className="md:w-1/3">
                <h4 className="text-white font-semibold mb-3">Other Products</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <img src={deep} alt="DeepIDV" className="w-6 h-6" />
                    <a href="http://www.deepidv.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      DeepIDV
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img src={nextquest} alt="NextQuest" className="w-6 h-6" />
                    <a href="mynext.quest" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      NextQuest
                    </a>
                  </li>
                </ul>
              </div>
                
              {/* Spacer */}
              <div className="hidden md:block md:w-1/3" />

              {/* Company */}
              <div className="md:w-1/3 text-left">
                <h4 className="text-white font-semibold mb-3">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.subprimeplatforms.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="https://subprimeplatforms.com/careers" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-1/3" />

            </div>
          </div>
        </div>

      {/* Legal & copyright bar */}
      <div className="border-t border-gray-800 text-sm text-gray-400 py-4 px-8 flex flex-col md:flex-row justify-between items-center">
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
