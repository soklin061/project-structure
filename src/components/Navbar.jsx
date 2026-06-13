import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // Clear layout function for active/inactive links
  const getLinkClass = ({ isActive }) => 
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 lg:px-12 py-4 flex items-center justify-between">
      {/* Brand Identity Logo */}
      <div className="text-xl font-extrabold tracking-tight text-slate-900">
        Store<span className="text-indigo-600">Hub</span>
      </div>
      
      {/* Navigation Router Action Items */}
      <div className="flex items-center gap-6">
        <NavLink to="/dashboard" className={getLinkClass}>Dashboard</NavLink>
        <NavLink to="/products" className={getLinkClass}>Products</NavLink>
        <NavLink to="/login" className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors duration-200">
          Logout
        </NavLink>
      </div>
    </nav>
  );
}