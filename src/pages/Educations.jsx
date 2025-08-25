import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const Educations = () => {
  const educations = [
    {
      id: 1,
      level: "KINDERGARTEN",
      schoolName: "Joseph Vithaya School",
      period: "Kindergarten 1 - Kindergarten 3",
      image: "/image/joseph.png",
      website: "https://www.jo.ac.th",
      levelColor: "text-green-600 bg-green-100",
    },
    {
      id: 2,
      level: "PRIMARY",
      schoolName: "Saritdidet School",
      period: "Primary 1 - Primary 6",
      image: "/image/srd.jpg",
      website: "https://www.srd.ac.th",
      levelColor: "text-blue-600 bg-blue-100",
    },
    {
      id: 3,
      level: "SECONDARY",
      schoolName: "Benchamarachuthit Chanthaburi School",
      period: "Secondary 1 - Secondary 6",
      image: "/image/bencha.png",
      website: "https://www.bj.ac.th",
      levelColor: "text-purple-600 bg-purple-100",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <AcademicCapIcon className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl font-kanit font-semibold text-gray-800">
            Education
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {educations.map((edu, index) => (
          <div key={edu.id} className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={edu.image}
                  alt={edu.schoolName}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${edu.levelColor}`}
                  >
                    {edu.level}
                  </span>
                </div>

                <h3 className="text-xl font-kanit font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {edu.schoolName}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">{edu.period}</p>

                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group/button"
                >
                  <span>Visit School Website</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
