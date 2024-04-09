import React from 'react';

const PressReleasesComponent = () => {
    return(
        <div className="mt-[60px] p-6 ml-4 lg:ml-[40px]">
            <div className="flex justify-start items-center">
            <h1 className="font-sans text-[25px] md:text-[28px] pr-4 font-semibold ">Press Releases</h1>
            <p> <a href='#' className="text-[12px] font-medium underline text-gray-800">View All</a></p>
            </div>
            <ul className="flex flex-col mt-[70px] mb-10">
                <div className="flex justify-between items-center">
                <div className="flex flex-col">
                <li className="font-sans text-[10px] font-semibold md:text-[15px]">May 14, 2019</li>
                <li className="text-[10px] text-grey-600 md:text-[12px]">Weebly Unveils New E-commerce Capabilities to Help Small Businesses Sell More Online</li>
                </div>
                <p><a href='="#' className="underline font-sans text-[10px] text-gray-500">Read More</a></p>
                </div>
            </ul>
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>

            <ul className="flex flex-col mt-10 mb-10">
                <div className="flex justify-between items-center">
                <div className="flex flex-col">
                <li className="font-sans text-[10px] font-semibold md:text-[15px]">October 2, 2018</li>
                <li className="text-[10px] text-grey-600  md:text-[12px]">Weebly and Square Announce Integrated Online and Offline Payment Solution for Small Businesses</li>
                </div>
                <p><a href='="#' className="underline font-sans text-[10px] text-gray-500">Read More</a></p>
                </div>
            </ul>
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>

            <ul className="flex flex-col mt-10 mb-10">
                <div className="flex justify-between items-center">
                <div className="flex flex-col">
                <li className="font-sans text-[10px] font-semibold md:text-[15px]"> June 12, 2018</li>
                <li className="text-[10px] text-grey-600  md:text-[12px]">Weebly Launches New Mobile App to Help Small Business Owners Manage Their Websites on the Go...</li>
                </div>
                <p><a href='="#' className="underline font-sans text-[10px] text-gray-500">Read More</a></p>
                </div>
            </ul>
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>

            <ul className="flex flex-col mt-10 mb-10">
                <div className="flex justify-between items-center">
                <div className="flex flex-col">
                <li className="font-sans text-[10px] font-semibold md:text-[15px]">April 17, 2018</li>
                <li className="text-[10px] text-grey-600  md:text-[12px]">Weebly Acquires Promote, a Leading Digital Marketing Platform for Small Businesses</li>
                </div>
                <p><a href='="#' className="underline font-sans text-[10px] text-gray-500">Read More</a></p>
                </div>
            </ul>
            <hr className="h-0.5 mx-auto my-4 bg-slate-600"/>
        </div>
        
    )
}
export default PressReleasesComponent