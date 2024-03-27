import React from 'react'
import weblg from "../Images/weblg.png";

const Footerr = () => {
  return (
    <div  className="w-full bg-gray-900 px-4 text-white pt-8
    flex flex-col md:flex-row flex-wrap justify-between">

    <div>
      <img className="w-40" src={weblg} alt={weblg} />
      <p className="my-4">Email us: support@wecare.com</p>
      <p>
   Our paper is sourced from FSC-<br />
   certified mills. We plant enough trees to more than <br />
   double our paper usage.
</p>
    </div>


    <div>
      <h2 className="font-bold text-xl mt-4">WeCare</h2>
      <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2" ></div>
      <div>
          <p>About us</p>
          <p>Donation</p>
          <p>Contact</p>
      </div>
  </div>

  <div>
      {/* <h2 class="font-bold text-xl mt-4">Product</h2> */}
      {/* <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2" ></div> */}
      <div className="mt-12">
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
      </div>
  </div>

  <div>
      <h2 className="font-bold text-xl mt-4">Links</h2>
      <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2" ></div>
      <div>
          <p> support@wecare.com</p>
          <p> </p>
          <p>Designed with ❤️  ️ by our team in Nagpur.</p>
      </div>
  </div>

       
    </div>
  )
}

export default Footerr