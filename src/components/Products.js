import React from "react";

const NewLaunches = () => {
  const products = [
    {
      id: 1,
      name: "Saptamveda Moringa Jeera Powder",
      description: "Herbal Blend for Digestion, Detox & Metabolism",
      price: "599",
      image:
        "https://shivaorganic.com/cdn/shop/files/Beeswax_Candle.jpg?v=1731349398&width=900",
      hover:
        "https://media.tenor.com/yWSRmymbuBkAAAAC/loading.gif",
    },
    {
      id: 2,
      name: "Saptamveda Moringa Pan Mukhwas",
      description: "Refreshing Digestive Mouth Freshener",
      price: "599",
      image:
        "https://shivaorganic.com/cdn/shop/files/Beeswax_Candle.jpg?v=1731349398&width=900",
      hover:
        "https://media.tenor.com/yWSRmymbuBkAAAAC/loading.gif",
    },
    {
      id: 3,
      name: "Saptamveda Moringa Soup",
      description: "Wholesome Superfood for Immunity",
      price: "599",
      image:
        "https://shivaorganic.com/cdn/shop/files/Beeswax_Candle.jpg?v=1731349398&width=900",
      hover:
        "https://media.tenor.com/yWSRmymbuBkAAAAC/loading.gif",
    },
    {
      id: 4,
      name: "Saptamveda Sea Buckthorn Pulp",
      description: "Himalayan Superfruit for Skin, Immunity & Energy",
      price: "540",
      oldPrice: "699",
      image:
        "https://shivaorganic.com/cdn/shop/files/Beeswax_Candle.jpg?v=1731349398&width=900",
      hover:
        "https://media.tenor.com/yWSRmymbuBkAAAAC/loading.gif",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-widest">
          NEW LAUNCHES
        </h2>

        <p className="text-center text-gray-600 mb-12 font-light tracking-wide">
          Explore our carefully curated selections
        </p>

       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

          {products.map((product) => (
            <div key={product.id} className="text-center group flex flex-col">


              <div className="w-full aspect-square rounded-lg overflow-hidden relative mb-4 md:mb-6">

                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />

                <img
                  src={product.hover}
                  alt="hover"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              
              <h3 className="text-sm md:text-lg font-light mb-1 md:mb-2 tracking-wide truncate">
                {product.name}
              </h3>

             
              <p className="text-[11px] md:text-base text-gray-600 mb-2 md:mb-3 font-light line-clamp-2 md:line-clamp-none min-h-[2.5rem]">
  {product.description}
</p>


              
              <div className="mt-2">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through mr-1 md:mr-2 text-[11px] md:text-sm">
                    Rs. {product.oldPrice}
                  </span>
                )}

                <span className="text-gray-900 font-light tracking-wide text-sm md:text-base">
                  Rs. {product.price}
                </span>
              </div>

              
              <button className="mt-auto w-full bg-[#8B5A2B] text-white py-1.5 md:py-3 rounded-md text-xs md:text-base tracking-wide hover:bg-gray-800 transition">
  ADD TO CART
</button>


            </div>
          ))}
        </div>

       
        <div className="flex justify-center mt-10 md:mt-12">
          <button className="bg-[#8B5A2B] text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-gray-800 transition text-sm md:text-base">
            View all
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewLaunches;
