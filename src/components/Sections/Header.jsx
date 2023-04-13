import React from "react";
import styled from "styled-components";
// Components
// import FullButton from "../Buttons/FullButton";
// import DemoVideo from "../Elements/DemoVideo";
// Assets
import HeaderImage from "../../assets/img/hero-image.png";
// import Dots from "../../assets/svg/Dots";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  return (
    <div id="home" className="bg-bluePrep">
      <div className="container flex h-screen items-center overflow-visible">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="">
            <h1 className="text-white font-inter text-3xl sm:text-[75px] font-[400] sm:leading-[80px]"> Learn by doing with the world's #1 online tutor</h1>
            <ul className="headerList my-4">
              <li>
                <p className="text-xl sm:text-2xl"><span style={{ color: "#228B22" }}>✔</span> Proven lectures and questions </p>
              </li>
              <li>
                <p className="text-xl sm:text-2xl"><span style={{ color: "#228B22" }}>✔</span> Tutors with 20+ yrs of experience </p>
              </li>
              <li>
                <p className="text-xl sm:text-2xl"><span style={{ color: "#228B22" }}>✔</span> Courses designed <em>just for you </em></p>
              </li>
            </ul>
            <button className="flex py-3 px-8 sm:py-4 sm:px-12 rounded-full bg-white text-base sm:text-2xl justify-center items-center hover:bg-gray-800 hover:text-white duration-200 font-inter">
              Get started for free
              <BsArrowRight className='ml-6' size={20} />
            </button>
          </div>
          <div>
            <img src={HeaderImage} alt="hero-tablet" />
          </div>
        </div>
      </div>
    </div>
  );
}