import React from "react";
// import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:mt-10 md:grid-cols-2 p-4 mx-auto sm:px-10 md:px-20">
      <div className="flex flex-col justify-center md:gap-10">
        <h2 className="text-[40px] md:text-[60px] font-bold">
          NIC Adventure
          <br /> Center
        </h2>
        <h3 className="text-[20px] text-gray-500 pr-20 mt-5">
          We offer convenient rentals and activities like kayaking,
          paddleboarding, and sailing.
        </h3>
        <div className="px-4 pt-2 pb-4 mt-5">
          <button className="btn">
            <span className="text-xl">Explore Rentals</span>
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/hero5.png"
          alt="Hero Image"
          height={400}
          width={500}
          className="object-cover w-full align-middle"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
