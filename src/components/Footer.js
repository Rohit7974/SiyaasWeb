import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#CFA36F] text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-20">

      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        
          <div>
           
            <div className="flex items-center mb-4">
  <img
    src="https://instagram.fidr4-3.fna.fbcdn.net/v/t51.2885-19/560089475_17869829541444500_9090864006241117924_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby44NjQuYzIifQ&_nc_ht=instagram.fidr4-3.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QEm8n6woW-mKFd1eWqFafCJF6x9haTW9_HLE0HA09MgKd13em-bPtPIRJz6PtvVtCmGEgXoEeZItJkfnhgXKHX_&_nc_ohc=6rgxbsL7WzwQ7kNvwH3P3af&_nc_gid=xANiA6tViw5dIhoMeDv-nA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfncgczAUNw7MagiVHRJFQW0aa1_0Orbv-KNxX_HSQiJiQ&oe=693BBB2A&_nc_sid=8b3546"
    alt="Siya logo"
    className="w-24 object-contain cursor-pointer hover:opacity-90 transition-opacity"
  />
</div>


            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              Elegant scented candles & natural products for your home.
            </p>

        
            <div className="flex space-x-4 mt-4">
              <a className="p-3 rounded-full border hover:bg-gray-100">
                <FaInstagram size={18} />
              </a>
              <a className="p-3 rounded-full border hover:bg-gray-100">
                <FaFacebookF size={18} />
              </a>
              <a className="p-3 rounded-full border hover:bg-gray-100">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

    
          <div>
            <h3 className="text-lg font-light mb-4 tracking-widest">Shop</h3>
            <ul className="space-y-2 text-gray-600 font-light">
              <li>Candles</li>
              <li>Soaps</li>
              <li>Combos</li>
              <li>Bestsellers</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-light mb-4 tracking-widest">Company</h3>
            <ul className="space-y-2 text-gray-600 font-light">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Shipping Policy</li>
              <li>Cancellation & Refund</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-light mb-4 tracking-widest">Support</h3>

            <div className="flex items-center space-x-2 mb-4">
              <MdEmail className="text-gray-700" size={20} />
              <p className="text-gray-700 font-light">siya@email.com</p>
            </div>

           
            <a
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-light tracking-wide shadow hover:bg-green-700 cursor-pointer mb-5 transition duration-300"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>

            <div className="flex items-start space-x-2">
              <MdLocationOn className="text-gray-700 mt-1" size={22} />
              <p className="text-gray-700 text-sm leading-relaxed font-light">
                IT Park, Bhopal<br />India
              </p>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-200">

          <p className="text-gray-600 text-sm mb-4 md:mb-0 font-light">
            © 2025 Siya. All rights reserved.
          </p>

          <div className="flex space-x-3">
            <img src="/logo/googlepay.png" className="h-6" alt="rupay" />
            <img src="/logo/paytm.png" className="h-6" alt="amex" />
            <img src="/logo/visa.png" className="h-6"alt="visa" />
            <img src="/logo/mastercard.png" className="h-6" alt="master" />
            <img src="/logo/rupay.png" className="h-6" alt="rupay" />
          </div>
        </div>
      </div>

 
      <div className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-700 transition duration-300">
        <FaWhatsapp size={30} />
      </div>
    </footer>
  );
};

export default Footer;
