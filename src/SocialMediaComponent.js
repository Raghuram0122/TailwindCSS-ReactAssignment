import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram, faYoutube,faWeebly } from "@fortawesome/free-brands-svg-icons";

const SocialMediaComponent = () => {
  return (
    <div class="p-6 mt-[40px] ml-4 lg:ml-[40px]">
    <h1 class="font-sans text-[20px] font-semibold mb-[30px]">Social</h1>
    <div class="flex justify-start items-start ">
      <div class="p-[45px] md:p-[60px] lg:p-[70px] xl:p[80px] border-l-[1px] border-t-[1px] border-b-[0.5px] border-r-[1px] border-slate-500 border-b-slate-300 flex items-center">
        <FontAwesomeIcon icon={faWeebly} className="text-green-500 text-4xl" />
      </div>
      <div class="p-[45px] md:p-[60px]  lg:p-[70px]  xl:p[80px] border-r-[1px] border-t-[1px] border-b-[0.5px] border-b-slate-300 border-slate-500">
        <FontAwesomeIcon icon={faFacebookSquare} className="text-blue-500 text-4xl" />
      </div>
      <div class="p-[45px] md:p-[60px]  lg:p-[70px]  xl:p[80px] border-r-[1px] border-t-[1px] border-b-[0.5px] border-b-slate-300 border-slate-500">
        <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-4xl" />
      </div>
      <div class="p-[45px] md:p-[60px]  lg:p-[70px]  xl:p[80px] border-r-[1px] border-t-[1px] border-b-[0.5px] border-b-slate-300 border-slate-500">
        <FontAwesomeIcon icon={faYoutube} className="text-red-500 text-4xl" />
      </div>
      <div class="p-[45px] md:p-[60px]  lg:p-[70px]  xl:p[80px] border-r-[1px] border-t-[1px] border-b-[0.5px] border-b-slate-300 border-r-slate-200 border-slate-500">
        <FontAwesomeIcon icon={faTwitter} className="text-sky-500 text-4xl" />
      </div>
    </div>
  </div>
  );
};

export default SocialMediaComponent;