import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full py-4 z-10">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        
        {/* Left Section: Menu Button */}
        <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-xl">
          <Bars3Icon className="w-5 h-5" />
          <span className=" sm:inline">Menu</span>
        </button>

        {/* Center Section: Logo */}
        <div className="text-white text-xl font-semibold">
          <img src="/Logo-light.png" alt="Label" className="h-8" />
        </div>

        {/* Right Section: Navigation Links (Hidden on small screens) */}
        <div className="hidden sm:flex space-x-6 text-white">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">About Us</a>
        </div>
      </div>
    </nav>
  );
}
