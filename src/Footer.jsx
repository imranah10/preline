import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#111010] to-[#1f1f1f] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFFF00]">Preline</h2>
          <p className="text-sm mt-3 text-gray-400">
            Building future-ready websites with creativity, code, and coffee.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFFF00]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFFF00]">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><a href="#">React Development</a></li>
            <li><a href="#">WordPress</a></li>
            <li><a href="#">SEO & Marketing</a></li>
            <li><a href="#">Graphic Designing</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-[#FFFF00]">Follow Us</h3>
          <div className="flex gap-4 mt-4 text-xl text-gray-300">
            <a href="#"><FaFacebookF className="hover:text-[#FFFF00] transition" /></a>
            <a href="#"><FaTwitter className="hover:text-[#FFFF00] transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-[#FFFF00] transition" /></a>
            <a href="#"><FaInstagram className="hover:text-[#FFFF00] transition" /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Preline. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
