import React from "react";

const categories = [
  {
    title: "Soaps",
    youtube:
      "https://www.youtube.com/embed/3i3Iv0ULVs0?autoplay=1&loop=1&mute=1&controls=0&playlist=3i3Iv0ULVs0",
  },
  {
    title: "Candles",
    youtube:
      "https://www.youtube.com/embed/3i3Iv0ULVs0?autoplay=1&loop=1&mute=1&controls=0&playlist=3i3Iv0ULVs0",
  },
  {
    title: "Bracelets",
    youtube:
      "https://www.youtube.com/embed/3i3Iv0ULVs0?autoplay=1&loop=1&mute=1&controls=0&playlist=3i3Iv0ULVs0",
  },
];

function Collection() {
  return (
    <div className="w-full py-16 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-light tracking-widest mb-4 text-gray-900">
        OUR COLLECTION
      </h2>
      <p className="text-center text-gray-700 mb-12 text-lg tracking-wide font-light">
        Explore our finest curated selections.
      </p>

      {/* ALWAYS 3 COLUMNS */}
      <div className="grid grid-cols-3 gap-8 px-4 md:px-20">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* SQUARE BOX */}
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                src={item.youtube}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <h3 className="mt-4 text-xl md:text-2xl font-light tracking-widest text-gray-900">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
