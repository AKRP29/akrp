import {
  HeartIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: "Coding",
      image: "/image/coding.png",
      description:
        "Passionate about programming and creating innovative solutions through code.",
      link: null,
    },
    {
      id: 2,
      title: "Listening to music",
      image: "/image/kingsize.jpg",
      description:
        "Enjoying various genres of music, especially while working or relaxing.",
      link: "https://music.apple.com/th/album/%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%98%E0%B8%AD/1792884579?i=1792884892",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <HeartIcon className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl font-kanit font-semibold text-gray-800">
            Hobbies
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {hobbies.map((hobby, index) => (
          <div key={hobby.id} className="group">
            {hobby.link ? (
              <a
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl shadow-lg overflow-hidden card-hover w-80 h-96 relative group/card"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-kanit font-semibold text-gray-800 mb-3 group-hover/card:text-blue-600 transition-colors duration-200">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{hobby.description}</p>
                  </div>

                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    <span className="mr-2">Listen on Spotify</span>
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover/card:translate-x-1" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover/card:bg-opacity-10 transition-all duration-300 rounded-2xl" />
              </a>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover w-80 h-96 relative group/card">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-kanit font-semibold text-gray-800 mb-3 group-hover/card:text-blue-600 transition-colors duration-200">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{hobby.description}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover/card:bg-opacity-10 transition-all duration-300 rounded-2xl" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Programming
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I enjoy exploring different programming languages and
                technologies, from web development to robotics. Coding helps me
                turn ideas into reality
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Music
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Music is my constant companion whether I'm coding, relaxing, or
                even working. I enjoy listening to various genres and find that
                it helps me stay focused and inspired throughout my different
                projects. When it comes to Thai rock music, I'm particularly
                fond of the band "Silly Fools."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
