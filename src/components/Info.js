import React from "react";
import { ShieldCheck, Headphones, Truck, CreditCard } from "lucide-react";

const Info = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "EASY RETURNS",
      text: "7-day hassle-free return policy",
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "24/7 SUPPORT",
      text: "Real-time chat & email support",
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "FREE SHIPPING",
      text: "On all prepaid orders above ₹999",
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "SECURE PAYMENTS",
      text: "All major cards & UPI accepted",
    },
  ];

  return (
    <div className="w-full bg-[#8B5A2B]  text-white py-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-center md:text-left">

          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto relative md:px-6 py-6 md:py-0"
            >
              
              <div className="text-white">{f.icon}</div>

             
              <h3 className="text-sm font-bold tracking-widest">{f.title}</h3>

              
              <p className="text-xs text-gray-200">{f.text}</p>

              
              {i !== features.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-white/40"></div>
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Info;
