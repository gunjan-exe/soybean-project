import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      {/* flex items-center justify-between p-6 bg-green-700 */}
      <div className="header-logo">
        {/* text-2xl font-bold text-white */}
        FARM<span>AID</span>
        {/* className="text-green-300" */}
      </div>
      <nav className="header-nav">
        {/* space-x-6 */}
        <li>
          <Link to={"/aboutus"} >About Us </Link>
        </li>
        <li>
          <Link to={"/"} >
          <button >
          {/* className="px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-gray-200" */}
          Log in
        </button>
          </Link>
        </li>
        <li>
          <Link to={"/scan"}> Scan </Link>
        </li>
        {/* className="text-white hover:text-green-300" */}
        

        {/* className="text-white hover:text-green-300" */}
  
      </nav>
    </header>
  );
};
//https://png.pngtree.com/thumb_back/fw800/background/20231229/pngtree-exotic-leafy-patterns-an-abstract-texture-background-with-a-tropical-vibe-image_13857259.png
export default Header;
