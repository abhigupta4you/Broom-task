
import React from 'react'
import { useState } from 'react'

import axios from 'axios';

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8081/api/saveData", formData)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      username: "",
      password: "",
      cnfpassword: "",
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  

  return (


    // main component
    <div>

      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div style={{ '--image-url': `url(${"data:image/jpeg;base64,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"})` }}
            class="lg:w-2/3    md:w-1/2 bg-[image:var(--image-url)] bg-cover rounded-lg overflow-hidden sm:mr-10
                   p-10 flex items-end justify-start relative">

            <div class="bg-purple-900 opacity-40 relative flex flex-wrap py-6 rounded shadow-md">
              <div class="w-full px-9">
                <h2 class="title-font font-bold mb-2 text-center text-2xl sm:text-4xl text-white  ">Altitude Air</h2>
                <div className='w-auto bg-white h-1 text-center items-center'></div>
                <p class="mt-1 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe optio rem quae sint dolor laboriosam quas ad vero expedita aspernatur eligendi necessitatibus molestias a asperiores atque earum explicabo minima unde, non tempore provident consectetur animi ex. Quibusdam culpa ratione adipisci et numquam facere expedita reprehenderit voluptatum voluptatibus, tenetur sunt.</p>
              </div>

            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-6 md:mt-0">
            <button className='justify-end text-end object-right-top text-purple-500 mb-7 py-2 '>Sign in </button>
            <form action="Post">

              <h2 class="text-purple-800 text-lg mb-1 font-bold title-font">Explore & Experience</h2>
              <p class="leading-relaxed font-semibold mb-5 text-purple-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>

              <div class="relative mb-4">
                <input onChange={handleChange} value={formData.name} name="name" id="name" placeholder='Name' type="text" required autoComplete='off' class="w-full outline-none bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4">

                <input onChange={handleChange} value={formData.email} name="email" type="email" id="email" placeholder='Email' required autoComplete='off' class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4">
                <input onChange={handleChange} value={formData.username} name="username" type="text" id="username" required  placeholder='UserName' class="w-full outline-none bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4">
                <input onChange={handleChange} value={formData.password} name="password" type="password" id="password" required autoComplete='off' placeholder='Password' class="w-full outline-none bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4">
                <input onChange={handleChange} value={formData.cnfpassword} name="cnfpassword" type="password" id="cnfpassword" required autoComplete='off' placeholder='Confirm Password' class="w-full outline-none bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button onSubmit={handleSubmit} class="text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
            </form>
          </div>
        </div>
      </section>



    </div>
  )
}

export default App