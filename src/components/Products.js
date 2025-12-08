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
    },
    {
      id: 2,
      name: "Saptamveda Moringa Pan Mukhwas",
      description: "Refreshing Digestive Mouth Freshener",
      price: "599",
      image:
        "https://shivaorganic.com/cdn/shop/files/Beeswax_Candle.jpg?v=1731349398&width=900",
    },
    {
      id: 3,
      name: "Saptamveda Moringa Soup",
      description: "Wholesome Superfood for Immunity, Energy & Digestion",
      price: "599",
      image:
        "https://shivaorganic.com/cdn/shop/files/Beeswax_Candle.jpg?v=1731349398&width=900",
    },
    {
      id: 4,
      name: "Saptamveda Sea Buckthorn Pulp",
      description: "Himalayan Superfruit for Skin, Immunity & Energy",
      price: "540",
      oldPrice: "699",
      image:
        "https://shivaorganic.com/cdn/shop/files/Beeswax_Candle.jpg?v=1731349398&width=900",
    },
  ];
  //Hard coded products data for demonstration but will be fetched from backend in real app
  return (
    <section className="py-16 bg-[#CFA36F]">
      <div className="container mx-auto px-4">

       
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
          NEW LAUNCHES
        </h2>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-xl mx-auto mb-5"
              />

              <h3 className="text-lg md:text-xl font-semibold mb-1">
                {product.name}
              </h3>

              <p className="text-gray-600 mb-2 text-sm md:text-base">
                {product.description}
              </p>

            
              <div className="mt-2">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through mr-2">
                    Rs. {product.oldPrice}
                  </span>
                )}

                <span className="text-black font-semibold">
                  {product.oldPrice ? "From " : ""}Rs. {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
