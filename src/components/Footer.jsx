import { Link } from "react-router-dom";
import weblg from "../assets/weblg.png";

const Footer = () => {
  return (
    <div className="w-full px-24 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-gray-900 text-white justify-between">
      <div className="p-5">
        <img className="w-40" src={weblg} alt={weblg} />
        <p className="mb-8 font-light">Designed with ❤️ by our Team</p>
        <p className="font-light">
          Our paper is sourced from FSC-
          <br />
          certified mills. We plant enough trees to more than <br />
          double our paper usage.
        </p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 mb-10 md:mt-0 mt-10 md:text-left text-center list-none">
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="font-bold text-xl mt-4">WeCare</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2 mx-auto md:mx-0 "></div>
          <Link to="/Home">
            <li className="hover:text-orange-400 py-1">Home</li>
          </Link>
          <Link to="/Donation">
            <li className="hover:text-orange-400 py-1">Donation</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-orange-400 py-1">About us</li>
          </Link>
          <Link to="/Contact">
            <li className="hover:text-orange-400 py-1">Contact</li>
          </Link>
          <Link to="/signup">
            <li className="hover:text-orange-400 py-1">Login</li>
          </Link>
          <Link to="/signup">
            <li className="hover:text-orange-400 py-1">Signup</li>
          </Link>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2 mx-auto md:mx-0"></div>
          <Link to="/Home">
            <li className="hover:text-orange-400 py-1">FAQs</li>
          </Link>
          <Link to="/Home">
            <li className="hover:text-orange-400 py-1">Privacy Policy</li>
          </Link>
          <Link to="/Home">
            <li className="hover:text-orange-400 py-1">Terms & Conditions</li>
          </Link>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <div>
            <h2 className="font-bold text-xl mt-4">Get In Touch</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2 mx-auto md:mx-0"></div>
            <div>
              <p className="hover:text-orange-400 py-1">
                <a href="mailto:support@wecare.com">
                  Email: support@wecare.com
                </a>
              </p>
              <p className="hover:text-orange-400 py-1">
                <a href="tel:+1234567890">Phone: 1234567890</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
