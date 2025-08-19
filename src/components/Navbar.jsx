import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center py-6 bg-transparent">
      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-3 items-center rounded-full px-12 py-4 border border-gray-200 min-w-[700px] bg-white">
        {/* Left menu options */}
        <div className="flex justify-center space-x-12">
          <Link to="/prebuilt" className="hover:text-blue-600 font-medium">Prebuilt</Link>
          <Link to="/customized" className="hover:text-blue-600 font-medium">Customized</Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Link to="/">
            <img src="/logo.png" alt="Future Desks Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Right menu options */}
        <div className="flex justify-center space-x-12">
          <Link to="/aboutUs" className="hover:text-blue-600 font-medium">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600 font-medium">Contact Us</Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden w-[90%] justify-between items-center px-6 py-3 border border-gray-200 rounded-full bg-white">
        <Link to="/">
          <img src="/logo.png" alt="Future Desks Logo" className="h-8 w-auto" />
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{menuOpen && (
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white border border-gray-200 rounded-xl shadow-md flex flex-col items-center py-6 space-y-6 md:hidden z-50">
    <Link to="/prebuilt" className="hover:text-blue-600 font-medium">Prebuilt</Link>
    <Link to="/customized" className="hover:text-blue-600 font-medium">Customized</Link>
    <Link to="/about" className="hover:text-blue-600 font-medium">About Us</Link>
    <Link to="/contact" className="hover:text-blue-600 font-medium">Contact Us</Link>
  </div>
)}

    </nav>
  );
}
