import { NavLink } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

export default function Navbar() {
  const { t } = useTranslation();

  const routes = [
    { path: "/dashboard", label: t('navbar.dashboard') },
    { path: "/products", label: t('navbar.products') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="text-xl font-extrabold tracking-tight text-slate-900">
        Store<span className="text-indigo-600">Hub</span>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Dynamic NavLink generation with proper isActive destructuring */}
        {routes.map((route) => (
          <NavLink 
            key={route.path} 
            to={route.path} 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors duration-200 ${
                isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
              }`
            }
          >
            {route.label}
          </NavLink>
        ))}

        {/* Separate Logout link with intentional independent styling */}
        <NavLink 
          to="/login" 
          className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors duration-200"
        >
          {t('navbar.logout')}
        </NavLink>
      </div>
    </nav>
  );
}