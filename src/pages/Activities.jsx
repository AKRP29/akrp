import { useState } from "react";
import {
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Activities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      image: "/image/ITClashAC1.jpg",
      title: "ITClash",
      description:
        "การแข่งขันทักษะการเขียนโปรแกรมความมั่นคงปลอดภัยทางไซเบอร์ (Cyber Track)",
    },
    {
      image: "/image/SPUminihack.jpg",
      title: "SPU AI Prompt Mini Hackathon 2025 : Prompt Quest Adventure",
      description:
        "ภารกิจแก้หรือเติมโค้ดให้เป๊ะเวอร์ โดยมีคู่หูสุดฉลาดอย่าง Generative AI คอยกระซิบไอเดียเจ๋ง ๆ โค้ดไม่ครบ? ไม่เป็นไร AI จัดให้",
    },
    {
      image: "/image/nsc-bab-group.jpg",
      title:
        "การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย คร้ังที่ 27: NSC 2025",
      description: "การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย",
    },
    {
      image: "/image/nsc-bab-solo.jpg",
      title:
        "การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย คร้ังที่ 27: NSC 2025",
      description: "การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย",
    },
    {
      image: "/image/ITCamp21_Infra-4.jpg",
      title:
        "ITCAMP 21",
      description: "ค่ายที่ทำให้รู้ผมจักกับคณะไอทีลาดกระบัง เรียนรู้เนื้อหาพื้นฐานของไอที",
    },
    {
      image: "/image/ITCamp21_Infra-12.jpg",
      title:
        "ITCAMP 21",
      description: "ค่ายที่ทำให้รู้ผมจักกับคณะไอทีลาดกระบัง เรียนรู้เนื้อหาพื้นฐานของไอที",
    },
    {
      image: "/image/46ict_stem2.jpg",
      title: "46ICT",
      description:
        "กิจกรรม การแข่งขันโครงงานสะเต็มศึกษาและกลองสมองกล (STEM & microcontroller Project) นำเสนอภาษาไทย",
    },
    {
      image: "/image/IC2023AC1.jpg",
      title: "ICTP Com Camp 2023",
      description:
        "ค่ายคอมพิวเตอร์ห้องเรียนพิเศษ ICTP ระดับชั้น ม.ต้น ประจำปีการศึกษา 2566",
    },
    {
      image: "/image/IC2023AC2.jpg",
      title: "ICTP Com Camp 2023",
      description:
        "ค่ายคอมพิวเตอร์ห้องเรียนพิเศษ ICTP ระดับชั้น ม.ต้น ประจำปีการศึกษา 2566",
    },
    {
      image: "/image/IC2023AC3.jpg",
      title: "ICTP Com Camp 2023",
      description:
        "ค่ายคอมพิวเตอร์ห้องเรียนพิเศษ ICTP ระดับชั้น ม.ต้น ประจำปีการศึกษา 2566",
    },
    {
      image: "/image/IC2023AC4.jpg",
      title: "ICTP Com Camp 2023",
      description:
        "ค่ายคอมพิวเตอร์ห้องเรียนพิเศษ ICTP ระดับชั้น ม.ต้น ประจำปีการศึกษา 2566",
    },
    {
      image: "/image/ICCamp2D.jpg",
      title: "ICTP Com Camp 2023",
      description:
        "ค่ายคอมพิวเตอร์ห้องเรียนพิเศษ ICTP ระดับชั้น ม.ต้น ประจำปีการศึกษา 2566",
    },
    {
      image: "/image/AutoRobotAc.jpg",
      title: "Automatic Robot Camp 2024",
      description:
        "กิจกรรมค่ายพัฒนาอัจฉริยภาพหุ่นยนต์อัตโนมัติ Automatic Robot Camp 2024",
    },
    {
      image: "/image/AutoRobotAc2.jpg",
      title: "Automatic Robot Camp 2024",
      description:
        "กิจกรรมค่ายพัฒนาอัจฉริยภาพหุ่นยนต์อัตโนมัติ Automatic Robot Camp 2024",
    },
    {
      image: "/image/AutoRobotAc3.jpg",
      title: "STEM LEARN & PLAY",
      description: 'กิจกรรมค่ายวิทยาศาสตร์ "STEM LEARN & PLAY"',
    },
    {
      image: "/image/StemAC1.jpg",
      title: "STEM LEARN & PLAY",
      description: 'กิจกรรมค่ายวิทยาศาสตร์ "STEM LEARN & PLAY"',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + activities.length) % activities.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="text-center mb-12 animate-fade-up">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <ChartBarIcon className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl font-kanit font-semibold text-gray-800">
            Activities
          </h1>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Main Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={activities[currentSlide].image}
            alt={activities[currentSlide].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-kanit font-semibold mb-2">
              {activities[currentSlide].title}
            </h3>
            <p className="text-sm opacity-90">
              {activities[currentSlide].description}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-8">
          {activities.map((activity, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentSlide
                  ? "ring-4 ring-blue-500 scale-105"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
