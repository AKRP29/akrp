import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  AcademicCapIcon,
  TrophyIcon,
  ChartBarIcon,
  HeartIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: "/", name: "Home", icon: HomeIcon },
    { path: "/profile", name: "Profile", icon: UserIcon },
    { path: "/educations", name: "Educations", icon: AcademicCapIcon },
    { path: "/rewards", name: "Rewards", icon: TrophyIcon },
    { path: "/activities", name: "Activities", icon: ChartBarIcon },
    { path: "/hobbies", name: "Hobbies", icon: HeartIcon },
    { path: "/certificates", name: "Certificates", icon: ShieldCheckIcon },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-glass fixed top-0 left-0 right-0 z-50 animate-fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-playfair font-semibold text-gray-800"
          >
            <LightBulbIcon className="h-6 w-6 text-yellow-500" />
            <span>Anankorn</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative group flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-blue-800 font-bold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-500 ${
                        isActive(item.path)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-blue-800 bg-blue-50 font-bold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
