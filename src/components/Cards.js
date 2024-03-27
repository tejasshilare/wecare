import React from 'react'

const Cards = () => {
  return (
    <div>
        <div class="w-100 h-auto flex flex-wrap flex-col items-center text-center p-10">
         <div class="w-full h-auto flex flex-wrap flex-col items-center">
             <p class="text-indigo-800 font-bold text-2xl md:text-4xl text-center">"Pure Hardwork, No Shortcuts!"</p>
             <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
         </div>
         <div class="w-full flex flex-wrap justify-evenly">
             <div class="w-46 flex flex-col items-center mb-12">
                 <img class="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt=""/>
                 <p class="text-3xl font-bold text-white">600+</p>
                 <p class="text-3xl font-bold text-gray-500">Different Courses</p>
             </div>
             <div class="w-46 flex flex-col items-center mb-12">
                 <img class="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/student-icon.svg" alt=""/>
                 <p class="text-3xl font-bold text-white">700,000+</p>
                 <p class="text-3xl font-bold text-gray-500">Students Enrolled</p>
             </div>
             <div class="w-46 flex flex-col items-center mb-12">
                 <img class="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/credit-card-icon.svg" alt=""/>
                 <p class="text-3xl font-bold text-white">10,000+</p>
                 <p class="text-3xl font-bold text-gray-500">Successfull Transition</p>
             </div>
         </div>
       </div>
       <div class="w-100 h-auto flex flex-wrap flex-col items-center text-center p-10">
         <div class="w-full h-auto flex flex-wrap flex-col items-center">
             <p class="text-indigo-800 font-bold text-2xl md:text-4xl text-center">Our Products</p>
             <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
         </div>
         <div class="w-full h-auto flex flex-wrap justify-around">
             <div class="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
                 <img src="https://pwskills.com/images/landing-page/products/neurolab-icon.svg" alt=""/>
                 <p class="text-3xl font-bold text-white">PW Skills Lab</p>
                 <p class="text-lg font-bold text-gray-500">Supercharge your project development with our robust lab.</p>
             </div>
             <div class="w-64 flex flex-col items-center mb-12  p-2">
                 <img src="https://pwskills.com/images/landing-page/products/jobPortal-icon.svg" alt=""/>
                 <p class="text-3xl font-bold text-white">Job Portal</p>
                 <p class="text-lg font-bold text-gray-500">Use exceptional templates for a stand-out resume minus the sign up process.</p>
             </div>
             <div class="w-64 flex flex-col items-center mb-12 p-2">
                 <img src="https://pwskills.com/images/landing-page/products/Internship-icon.svg" alt=""/>
                 <p class="text-3xl font-bold text-white">Experience Portal</p>
                 <p class="text-lg font-bold text-gray-500">PW Skill's self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
             </div>
             <div class="w-64 flex flex-col items-center mb-12  p-2">
                 <img src="https://pwskills.com/images/landing-page/products/affilitatePortal-icon.svg" alt=""/>
                 <p class="text-3xl font-bold text-white">Become an affiliate</p>
                 <p class="text-lg font-bold text-gray-500">Explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
             </div>
             <div class="w-64 flex flex-col items-center mb-12  p-2">
                 <img src="https://pwskills.com/images/landing-page/products/halloffame-icon.svg" alt=""/>
                 <p class="text-3xl font-bold text-white">Hall of Fame</p>
                 <p class="text-lg font-bold text-gray-500"> Our student placements and 100k+ career transitions speak volumes about our courses.</p>
             </div> 
         </div>
     </div>
    </div>
  )
}

export default Cards