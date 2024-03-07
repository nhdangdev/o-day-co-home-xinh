import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-black mb-4  text-4xl lg:text-6xl font-extrabold uppercase">
            Ở đây có home xinh
          </h1>
          <p className="text-[#414548] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            reiciendis aspernatur quod, dolorum quaerat illo quasi nobis quis
            recusandae perspiciatis, tempora voluptatem!
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4">Learn More</button>
          </div>
        </div>
        <div className="col-span-5">
          <img src="/images/login-image.webp" alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
