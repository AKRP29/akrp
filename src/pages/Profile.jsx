import {
  UserCircleIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-3">
          <div className="sticky top-24">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/image/profileimg.jpg"
                alt="Anankorn Romphruek"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <UserCircleIcon className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Personal Information
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { label: "NAME", value: "Anankorn Romphruek" },
                { label: "NICKNAME", value: "Thank" },
                { label: "AGE", value: "17 Years" },
                { label: "BIRTH DATE", value: "29 Mar. 2008" },
                { label: "NATIONALITY", value: "Thai" },
                { label: "RELIGION", value: "Buddhism" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2"
                >
                  <span className="font-semibold text-gray-700 w-32 mb-1 sm:mb-0">
                    {item.label}:
                  </span>
                  <span className="text-gray-600">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <ComputerDesktopIcon className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Talents</h2>
            </div>

            <ul className="space-y-3">
              {[
                "Computer Programming",
                "Video Editing",
                "CTF Red Team",
              ].map((talent, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{talent}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-700">Facebook:</p>
                  <a
                    href="https://www.facebook.com/anankornr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Anankorn Romphruek
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-700">Instagram:</p>
                  <a
                    href="https://www.instagram.com/anankorn_r/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    anankorn_r
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-700">Github:</p>
                  <a
                    href="https://github.com/AKRP29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    AKRP29
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-800">Motto</h2>
            </div>

            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              "If you are not willing to risk the unusual, you will have to
              settle for the ordinary."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
