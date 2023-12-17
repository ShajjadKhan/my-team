// import required modules

import Button from "../Components/Button";
import bannerImg from "../../public/img/banner.png";
import Branding from "../Components/Branding";
import Sectiontitle from "../Components/Sectiontitle";
import SectionDescription from "../Components/SectionDescription";
import DeveloperCard from "../Components/DeveloperCard";
import PortfolioItem from "../Components/PortfolioItem";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";
import HomeAnimation from "../Components/HomeAnimation";
import PopUp from "../Components/PopUp";
export default function Home() {
  return (
    <div>
      <div className="animation-one"></div>
     

      <div className="row w-full flex flex-col lg:flex-row gap-10 justify-between items-center py-[50px]  lg:py-[100px]">
        <div className="home-content textColor w-full lg:w-1/2">
          <h4 className="text-2xl mb-6">Meet Your Dream App </h4>
          <h1 className="text-4xl font-bold mb-6">
            {" "}
            <span className="primaryColor">Let us</span> help you achieve your
            goals.
          </h1>
          <Button btnName="Explore More" />
        </div>
        <div className="home-animation w-full lg:w-1/2">
        <HomeAnimation/>
        </div>
      </div>
      <div className="branding-section lg:py-[100px]">
        <div className="row flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center">
          <Branding />
          <Branding />
          <Branding />
        </div>
      </div>
      <section className="expertSection">
        <Sectiontitle />
        <SectionDescription />
        <div className="row grid grid-cols-4 mt-10 gap-6"></div>
        <div className="showMore w-full flex justify-center items-center mt-10">
          <Button btnName="Show All" />
        </div>
      </section>

      <section className="expertSection">
        <Sectiontitle />
        <SectionDescription />

        <div className="row grid grid-cols-1 lg:grid-cols-4 gap-3 mt-12 portfolioContainer">
          <PortfolioItem className="lg:col-span-2 row-span-2"></PortfolioItem>
          <PortfolioItem className="lg:col-span-1"></PortfolioItem>
          <PortfolioItem className="lg:col-span-1"></PortfolioItem>
          <PortfolioItem className="lg:col-span-1"></PortfolioItem>
          <PortfolioItem className="lg:col-span-1"></PortfolioItem>
        </div>
        <div className="button-row flex justify-center items-center mt-10">
          <Button btnName="Show All"></Button>
        </div>
      </section>
      <footer className="textColor py-5 bg-[#00002C] mt-10 p-2">
        <div className="row flex justify-center items-center  flex-col ">
          <div className="logo">
            <Logo></Logo>
          </div>
          <div className="footer-text flex justify-center items-center flex-col">
            <Link className="text-[#A6A1A1]">Privacy Policy</Link>
            <Link className="mt-3 text-[#A6A1A1]">Terms And Condition</Link>
            <p className="mt-3">2023 All Copyright Deserved ||Rks Team.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
