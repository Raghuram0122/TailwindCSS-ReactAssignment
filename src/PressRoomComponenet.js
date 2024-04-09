import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PressRoomComponenet = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-4 ml-3 lg:ml-[40px]">
      <h1 className="text-black text-[40px] md:text-[50px] text font-semibold font-sans">
        Press Room
      </h1>
      <p className="text-gray-700 text-[10px] md:text-[12px] font-semibold font-sans mb-[40px]">
        All you need to know about Weebly
      </p>
      <hr className="h-0.5 mx-auto my-4 bg-zinc-600" />
      <nav className="p-3 ">
        <ul className="flex font-sans">
          <li className="text-blue-600 pr-4"><a href='#'>Press Room</a></li>
          <li className="pr-4 border-l-stone-900 border-l-2 pl-4">
          <a  href='#'>Press Releases</a>
            
          </li>
          <li className="border-l-stone-900 border-l-2 pl-4"><a href='#'>In The News</a></li>
        </ul>
      </nav>
      <hr className="h-0.5 mx-auto my-4 bg-zinc-600" />
      <p className="text-slate-600 font-sans font-medium text-[10px] md:text-[15px] mt-[45px] mb-[70px]">
        Weebly is a website builder that allows you to create a website using an
        intuitive drag-and-drop interface. It was founded by a group of college
        students in 2006 and has since grown to power over 40 million websites.
        Weebly is known for its simplicity and ease of use,and it offers a range
        of features including responsive themes, mobile-friendly designs, and
        powerful SEO tools.Weebly offers both fully hosted and self-hosted
        options.
      </p>
      
      <Slider {...settings}>
        
        <div className="flex flex-row justify-center">
          <img
            className=" w-[80vw] md:w-[75vw] lg:w-[70vw] h-[300px] md:h-[360px]  lg:h-[460px] xl:h-[500px] mx-auto"
            src="https://cdn2.editmysite.com/images/landing-pages/global/home-com-forward/business-community/makers-to-merchants-1680.webp"
            alt=""
          />
        </div>
        <div className="flex flex-row justify-center ">
          <img
            className=" w-[80vw] md:w-[75vw] lg:w-[70vw] h-[300px] md:h-[360px] lg:h-[460px] xl:h-[500px] mx-auto"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYnNpdGVzfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="flex flex-row justify-center ">
          <img
            className=" w-[80vw] md:w-[75vw] lg:w-[70vw] h-[300px]  md:h-[360px] lg:h-[460px] xl:h-[500px] mx-auto"
            src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-row justify-center ">
          <img
            className="w-[80vw] md:w-[75vw] lg:w-[70vw] h-[300px]  md:h-[360px] lg:h-[460px] xl:h-[500px] mx-auto"
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </Slider>
      
    </div>
  );
};

export default PressRoomComponenet;
