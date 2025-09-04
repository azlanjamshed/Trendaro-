import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-around    gap-14 my-10 text-sm">
        <div className="w-80">
          <img src={assets.logo} className="mb-5 w-full" alt="" />
          <p className=" mb:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            totam provident dolor, accusantium dignissimos atque officia fugit
            pariatur tempora? Unde cum obcaecati dicta itaque vero porro nulla
            ipsum placeat delectus!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 938792873983</li>
            <li>email@email.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">copyright@2025 Trendaro.com</p>
      </div>
    </>
  );
};

export default Footer;
