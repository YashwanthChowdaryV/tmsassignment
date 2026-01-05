import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-white/10 rounded flex items-center justify-center mr-3">
                <span className="text-white font-bold">TMS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">TMS Foundation</h3>
                <p className="text-gray-400 text-sm">BharatYuva.org</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Open collaboration for Bharat's development since 2006. 
              Empowering youth through innovation and collective contribution.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white text-sm">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white text-sm">About Us</Link>
              <Link to="/life-sciences" className="block text-gray-300 hover:text-white text-sm">Life Sciences Wing</Link>
              <Link to="/caismd" className="block text-gray-300 hover:text-white text-sm">CAiSMD</Link>
            </div>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Programs</h4>
            <div className="space-y-2">
              <Link to="/life-sciences" className="block text-gray-300 hover:text-white text-sm">Life Sciences Wing</Link>
              <Link to="/evinetco" className="block text-gray-300 hover:text-white text-sm">EViNetCo-wing</Link>
              <Link to="/agri-wing" className="block text-gray-300 hover:text-white text-sm">Agri Wing</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tarunavadaanenasaha Muktbharatonnayana Samstha (TMS Foundation). 
            All rights reserved. | IndiaYouth (IY) Initiative
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Ignite your potential. Excellence is a lifelong journey of continuous improvement.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;