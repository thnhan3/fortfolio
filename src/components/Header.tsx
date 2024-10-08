import { useState } from 'react';
import { MdOutlineDensitySmall } from 'react-icons/md';
import { RiCloseLargeLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

interface SidebarProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

function Sidebar({ toggleSidebar, isOpen }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '300px' }} // Adjust the width as needed
    >
      <button onClick={toggleSidebar} className="p-4">
        <RiCloseLargeLine />
      </button>
      <nav className="p-4">
        <ul>
          <li className="py-2">
            <Link to="/" onClick={toggleSidebar}>Home</Link>
          </li>
          <li className="py-2">
            <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex justify-between w-full">
      <button onClick={toggleSidebar} className="text-white text-2xl px-4 py-2">
        <MdOutlineDensitySmall />
      </button>
      {isSidebarOpen && (
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      )}

      <div className="text-white self-center pr-4">En</div>
    </div>
  );
}
