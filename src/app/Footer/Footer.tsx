/* eslint-disable @next/next/no-img-element */
export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Section: Logo and Tagline */}
            <div className="flex flex-col">
              <img  src="/Logo.png"/>
              <p className="text-gray-600 mt-2">More Comfortable.<br />More Classy.</p>
            </div>
  
            {/* Center Section: Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Product</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li><a href="#" className="hover:underline">Features</a></li>
                  <li><a href="#" className="hover:underline">Integrations</a></li>
                  <li><a href="#" className="hover:underline">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Company</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li><a href="#" className="hover:underline">About us</a></li>
                  <li><a href="#" className="hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                  <li><a href="#" className="hover:underline">Customers</a></li>
                  <li><a href="#" className="hover:underline">Brand</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Resources</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li><a href="#" className="hover:underline">Community</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                  <li><a href="#" className="hover:underline">DPA</a></li>
                  <li><a href="#" className="hover:underline">Terms of service</a></li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom Section: Copyright */}
          <div className="mt-8 border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between text-gray-600 text-sm">
            <p>&copy; 2022 Perumnas. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 sm: mt-0">
              <a href="#" className="hover:underline">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Google Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Report</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  