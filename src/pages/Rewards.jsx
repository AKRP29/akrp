import { TrophyIcon } from "@heroicons/react/24/outline";

const Rewards = () => {
  const rewards = [
    {
      id: 1,
      image: "/image/46ictweb.jpg",
      title: "1st Place | 46ICT 2025",
      place: "1st",
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      id: 2,
      image: "/image/ICCamp2D.jpg",
      title: "1st Place | ICTP Camp 2023",
      place: "1st",
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      id: 3,
      image: "/image/AutoRobot.jpg",
      title: "2nd Place | Automatic Robot Camp 2024",
      place: "2nd",
      color: "text-gray-600 bg-gray-100",
    },
    {
      id: 4,
      image: "/image/46ictReward.jpg",
      title: "5th Place | 46ICT",
      place: "5th",
      color: "text-orange-600 bg-orange-100",
    },
    {
      id: 5,
      image: "/image/Silapa70no8.jpg",
      title: "8th Place | Silapa 2022",
      place: "8th",
      color: "text-purple-600 bg-purple-100",
    },
    {
      id: 6,
      image: "/image/ITClashGroup.jpg",
      title: "8th Place | ITClash",
      place: "8th",
      color: "text-purple-600 bg-purple-100",
    },
    {
      id: 7,
      image: "/image/SPUminihack.jpg",
      title:
        "45th Place | SPU AI Prompt Mini Hackathon 2025 : Prompt Quest Adventure",
      place: "45th",
      color: "text-purple-600 bg-purple-100",
    },
  ];

  const getPlaceIcon = (place) => {
    switch (place) {
      case "1st":
        return (
          <svg
            className="w-8 h-8 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      case "2nd":
        return (
          <svg
            className="w-8 h-8 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return <TrophyIcon className="w-8 h-8 text-orange-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <TrophyIcon className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl font-kanit font-semibold text-gray-800">
            Rewards
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {rewards.map((reward) => {
          const cardContent = (
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={reward.image}
                    alt={reward.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute top-4 left-4">
                    <div
                      className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full font-semibold text-sm ${reward.color}`}
                    >
                      {getPlaceIcon(reward.place)}
                      <span>{reward.place} Place</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-kanit font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-200">
                    {reward.title}
                  </h3>
                </div>
              </div>
            </div>
          );

          // specific external links for id 1 and 5
          if (reward.id === 1) {
            return (
              <a
                key={reward.id}
                href="https://46ict.vichakan.net/web68/result/local/web68_comp-55.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={reward.title}
              >
                {cardContent}
              </a>
            );
          }

          if (reward.id === 5) {
            return (
              <a
                key={reward.id}
                href="https://central70.sillapa.net/sm-central/result/local/sm-central_comp-627.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={reward.title}
              >
                {cardContent}
              </a>
            );
          }

          return <div key={reward.id}>{cardContent}</div>;
        })}
      </div>
    </div>
  );
};

export default Rewards;
