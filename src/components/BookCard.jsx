import { useState } from "react";

const BookCard = ({ cover, title, author, ranking }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-44 h-80 perspective"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
          hovered ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-md bg-white text-center">
          <img src={cover} alt={title} className="w-full h-60 object-cover" />
          <div className="p-3">
            <div className="font-bold mb-1">{title}</div>
            <div className="text-gray-600 text-sm">{author}</div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden shadow-md bg-white flex flex-col justify-center items-center">
          <span className="text-xl font-bold text-yellow-500">
            Puntuación: {ranking} / 5
          </span>
        </div>
      </div>
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
};

export default BookCard;
