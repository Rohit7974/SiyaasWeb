import React,{useRef}from "react";

const products = [
  {
    id: 1,
    video: "/video/video1.mp4",
    name: "Aromatic Soy Wax Candle – Vanilla Bliss",
    price: "599",
  },
  {
    id: 2,
    video: "/video/video2.mp4",
    name: "Handmade Beeswax Candle – Pure Honey Aroma",
    price: "799",
  },
  {
    id: 3,
   video: "/video/video3.mp4",
    name: "Luxury 3-Wick Candle – Fresh Lavender",
    price: "1,299",
  },
  {
    id: 4,
    video: "/video/video1.mp4",
    name: "Meditation Candle – Sandalwood Calm",
    price: "999",
  },
  {
    id: 5,
    video: "/video/video2.mp4",
    name: "Decorative Jar Candle – Rose Garden",
    price: "699",
  },
  {
    id: 5,
    video: "/video/video3.mp4",
    name: "Decorative Jar Candle – Rose Garden",
    price: "699",
  },
  {
    id: 5,
    video: "/video/video1.mp4",
    name: "Decorative Jar Candle – Rose Garden",
    price: "699",
  },
  {
    id: 5,
    video: "/video/video2.mp4",
    name: "Decorative Jar Candle – Rose Garden",
    price: "699",
  },
];


const ReelProducts = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        Premium Candle Collection
      </h2>

    
      <button
        onClick={scrollLeft}
        className="
          hidden md:flex absolute left-2 top-1/2 -translate-y-1/2
          z-20 w-12 h-12 rounded-full
          bg-black/10 hover:bg-black/20 backdrop-blur-xl
          items-center justify-center transition shadow-lg
        "
      >
        <span className="text-2xl text-black">‹</span>
      </button>

 
      <button
        onClick={scrollRight}
        className="
          hidden md:flex absolute right-2 top-1/2 -translate-y-1/2
          z-20 w-12 h-12 rounded-full
          bg-black/10 hover:bg-black/20 backdrop-blur-xl
          items-center justify-center transition shadow-lg
        "
      >
        <span className="text-2xl text-black">›</span>
      </button>

      <div
        ref={scrollRef}
        className="
          px-6 flex gap-5 overflow-x-scroll pb-4 snap-x snap-mandatory
          scrollbar-hide no-scrollbar
        "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[250px] max-w-[260px]
              bg-white border border-gray-200 rounded-xl shadow-sm
              overflow-hidden snap-start flex flex-col
              transition-transform duration-300 hover:scale-105
            "
          >
           
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-72 object-cover"
            />

          
            <div className="p-3 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {item.name}
                </h3>
                <p className="font-semibold text-lg mt-1 text-gray-900">
                  ₹{item.price}
                </p>
              </div>

              <button
                className="
                  mt-3 w-full bg-black text-white py-2 rounded-lg text-sm
                  hover:bg-gray-900 transition
                "
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelProducts;