import Image from 'next/image'
import React from 'react'
import './contact.css'

const page = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[40px]'>
      <h1 className="text-[48px] font-[700px] bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 bg-clip-text text-transparent">Lets Keep in Touch</h1>
      <div className="flex items-stretch gap-[100px]">
        <div className="">
          <img
            src="/contact.png"
            alt=""
            width={500}
            height={500}
            className="relative imageAnim"
          />
        </div>
        <form className="flex flex-col w-[600px]">
          <div class="inputBox">
            <input required="" type="text" />
            <span>First name</span>
          </div>
          <div class="inputBox">
            <input required="" type="text" />
            <span>First name</span>
          </div>
          
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea id="message" rows="4" class="mb-[20px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-x-pink-600" placeholder="Write your thoughts here..."></textarea>

          <button className='p-2 rounded-md bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800' > See Our Works</button>
        </form>
      </div>
    </div>
  )
}

export default page
