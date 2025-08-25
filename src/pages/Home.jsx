import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4 pt-16 pb-8">
      <div className="flex items-center justify-center min-h-screen -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl w-full">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-800 animate-fade-up">
              MR. ANANKORN ROMPHRUEK
            </h1>
            <p className="text-xl md:text-2xl font-poppins text-gray-600 animate-fade-up">
              BENCHAMARACHUTHIT CHANTHABURI SCHOOL
            </p>
            <div className="animate-fade-in">
              <Link to="/profile" className="btn-beautiful inline-block mt-6">
                Explore my portfolio
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src="/image/indeximg.jpg"
                  alt="Anankorn Romphruek Profile"
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse opacity-70" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-70" />
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-60" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
