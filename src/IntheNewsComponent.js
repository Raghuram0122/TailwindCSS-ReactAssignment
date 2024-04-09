import React from 'react';

const IntheNewsComponent = () => {
return(
    <div className="mt-8 p-6 ml-4 lg:ml-[40px]">
            <div className="flex items-center">
            <h1 className="font-sans text-[25px] md:text-[28px] pr-4 font-semibold">In The News</h1>
            <p><a href='#' className="text-[12px] font-medium underline text-gray-800">View All</a></p>
            </div>
            <ul className="flex flex-col mt-[70px] mb-10">
                <div className="flex justify-between items-center">
                <div className="flex flex-col">
                <li className="font-sans text-[10px]   pb-3">November 10, 2021</li>
                <li className="font-sans text-[15px] md:text-[15px] font-semibold pb-3">MarTech Series</li>
                <li className="text-[10px] text-grey-600 md:text-[12px]">Weebly Acquires Promote, Expands Marketing Capabilities</li>
                </div>
                <p><a href='="#' className="underline font-sans text-[10px] text-gray-500">Read More</a></p>
                </div>
            </ul>
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>

            <ul className="flex flex-col mt-10 mb-10">
                <div className="flex justify-between items-center">
                <div className="flex flex-col">
                <li className="font-sans text-[10px]  pb-3"> February 15, 2022</li>
                <li className="font-sans text-[15px] md:text-[15px] font-semibold pb-3"> PR Newswire</li>
                <li className="text-[10px] text-grey-600  md:text-[12px]">Weebly Launches New Integration with Google My Business</li>
                </div>
                <p><a href='="#' className="underline font-sans text-[10px] text-gray-500">Read More</a></p>
                </div>
            </ul>
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>

            <ul className="flex flex-col mt-10 mb-10">
                <div className="flex justify-between items-center">
                <div className="flex flex-col">
                <li className="font-sans text-[10px]  pb-3"> June 7, 2022</li>
                <li className="font-sans text-[15px] md:text-[15px] font-semibold pb-3">Yahoo Finance</li>
                <li className="text-[10px] text-grey-600  md:text-[12px]">Weebly Announces Partnership with Shopify</li>
                </div>
                <p><a href='="#' className="underline font-sans text-[10px] text-gray-500">Read More</a></p>
                </div>
            </ul>
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>

            <ul className="flex flex-col mt-10 mb-10">
                <div className="flex justify-between items-center">
                <div className="flex flex-col">
                <li className="font-sans text-[10px] pb-3">September 20, 2022</li>
                <li className="font-sans text-[15px] md:text-[15px] font-semibold pb-3"> TechRadar</li>
                <li className="text-[10px] text-grey-600  md:text-[12px]">Weebly Expands E-commerce Offerings with New App Store</li>
                </div>
                <p><a href='="#' className="underline font-sans text-[10px] text-gray-500">Read More</a></p>
                </div>
            </ul>
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>
        </div>
)

}
export default IntheNewsComponent