import React from "react"

const ContactUsComponent = () => {
    return (
        <div class="p-6 ml-6 flex justify-bewteen mt-[120px] mb-14 lg:ml-[40px]">
          <div className="w-1/3">  
        <h1 class="text-2xl font-bold mb-4">Contact Us</h1>
        </div>
        <div className="w-2/3">
        <p class="text-gray-600 mb-6">If you're a member of the media and would like to get in touch, please send us a note. For non-press-related inquiries, please use our <a href="#" className="text-blue-500 font-sans">general contact page.</a></p>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input class="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="First Name" type="text" />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input class="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Phone" type="tel" />
            </div>
            <div class="w-full px-3 mb-6 md:mb-0 mt-5">
              <input class="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Email" type="email" />
            </div>
          </div>
          <div class="w-full mb-4">
            <textarea class="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" placeholder="Type your message here..."></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[125px] rounded-2xl focus:outline-none focus:shadow-outline" type="submit">
              Send
            </button>
          </div>
        </form>
        </div>
      </div>
      
    )
}

export default ContactUsComponent