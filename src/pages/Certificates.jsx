import { useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import ImageModal from "../components/ImageModal";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      image: "/image/NSC2025.jpg",
      title: "The 27th National Software Contest: NSC 2025",
    },
    {
      image: "/image/001-6601141_เด็กชายอานันท์กร ร่มพฤกษ์_page-0001.jpg",
      title: "Stem Learn & Play",
    },
    {
      image: "/image/001-6501310_เด็กชายอานันท์กร ร่มพฤกษ์_page-0001.jpg",
      title: "ICTP Com Camp 2022",
    },
    {
      image: "/image/001-6602004 นายอานันท์กร    ร่มพฤกษ์_page-0001.jpg",
      title: "Basic Robot Camp 2023",
    },
    {
      image: "/image/Basic-Robot-Camp2024.jpg",
      title: "Basic Robot Camp 2024",
    },
    {
      image: "/image/001-6701627 นายอานันท์กร  ร่มพฤกษ์_page-0001.jpg",
      title: "ICTP Com Camp 2023",
    },
    {
      image: "/image/001-6701728 นายอานันท์กร  ร่มพฤกษ์_page-0001.jpg",
      title: "ICTP Com Camp 2023",
    },
    {
      image: "/image/ICTP-ComCamp2024.jpg",
      title: "ICTP Com Camp 2024",
    },
    {
      image: "/image/ICTP-ComCamp2024Robot.jpg",
      title: "ICTP Com Camp 2024",
    },
    {
      image: "/image/CCI_000001.jpg",
      title: "MUICT-AST Tech Competition 2024",
    },
    { image: "/image/CCI_000006.jpg", title: "46ICT 2023" },
    { image: "/image/CCI_000003.jpg", title: "Silapa 70 (Provincial level)" },
    { image: "/image/CCI_000004.jpg", title: "Silapa 70 (National level)" },
    { image: "/image/CCI_000005.jpg", title: "พี่สอนน้อง KMITL" },
    { image: "/image/ITCamp21.jpg", title: "ITCamp21" },
    { image: "/image/ITClash.jpg", title: "ITClash (Qualifying Round)" },
    { image: "/image/ITClashFinal.jpg", title: "ITClash (Final Round)" },
    { image: "/image/CTF_Bootcamp.jpg", title: "CTF Boot Camp" },
    {
      image: "/image/Basic Cybersecurity Lab.jpg",
      title: "Basic Cybersecurity Lab",
    },
    {
      image: "/image/spuminihack.png",
      title: "SPU AI Prompt Mini Hackathon 2025 : Prompt Quest Adventure",
    },
    {
      image: "/image/SPUBasicFix.png",
      title: "SPU AI Prompt Mini Hackathon 2025 : Prompt Quest Adventure",
    },
    {
      image: "/image/ITLadkrabang-Openhouse.jpg",
      title: "ITLadkrabang Openhouse 2023",
    },
    {
      image: "/image/K-ENG-World-Tour-And-Workshop-2025.png",
      title: "K-Engineering World Tour and Workshop 2025",
    },
    {
      image: "/image/AI-Cybersecurity.jpg",
      title: "ปัญญาประดิษฐ์พื้นฐานร่วมกับข้อมูลด้านความมั่นคงปลอดภัยทางไซเบอร์",
    },
    {
      image: "/image/AI-Future.jpg",
      title: "เสวนา AI และอนาคตของวิศวกรรมและวิทยาศาสตร์",
    },
    {
      image: "/image/IoT-Electronics.jpg",
      title: "สนุกกับ IoT และเซ็นเซอร์อิเล็กทรอนิกส์",
    },
    {
      image: "/image/LLM & RAG Workshop AI n8n.jpg",
      title: "LLM & RAG Workshop: สร้าง AI ผู้ช่วยจากเอกสารด้วย n8n",
    },
    {
      image: "/image/THCTT.jpg",
      title: "Thailand Cyber Top Talent 2025",
    },
  ];

  const openModal = (cert) => {
    setSelectedImage(cert);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <ShieldCheckIcon className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl font-kanit font-semibold text-gray-800">
            Certificates
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {certificates.map((cert, index) => (
          <div key={index} className="group">
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
              onClick={() => openModal(cert)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-kanit font-medium text-gray-800 text-center">
                  {cert.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default Certificates;
