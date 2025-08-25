import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 backdrop-blur-sm" onClick={onClose} />

      <div className="relative max-w-4xl max-h-full animate-zoom-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <img
          src={image.image}
          alt={image.title}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />

        <div className="text-center mt-4">
          <p className="text-white text-lg font-semibold bg-black bg-opacity-50 px-6 py-3 rounded-lg inline-block animate-slide-up">
            {image.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
