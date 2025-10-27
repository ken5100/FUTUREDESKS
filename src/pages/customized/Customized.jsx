import React from 'react'
import Navbar from '@/components/Navbar'
import MovingString from '@/components/MovingStrip'
import CustomizedHero from '@/components/Customized_Hero_Section'
import TopProducts from '@/components/TopProducts'
import BestClient from '@/components/BestClient'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

const Customized = () => {
  return (
    <div className="w-full flex flex-col">

      <div
        className="
        relative w-full flex flex-col
        bg-no-repeat bg-center bg-cover
    
        min-h-[70vh] sm:min-h-[75vh] md:min-h-screen
      "
        style={{ backgroundImage: "url('/Bg2.png')" }}
      >


        <Navbar />


        <div
          className="
        flex-1 flex flex-col 
        justify-start pt-12   /* mobile (shifted above) */
        md:justify-center md:pt-0  /* tablet & desktop stay centered */
      "
        >
          <CustomizedHero />
        </div>


        <img
          src="/object1.png"
          alt="Left Object"
          className="
        absolute 
        top-37 left-2 w-20
        md:top-50 md:left-0 md:w-48
        lg:top-50 lg:left-0 lg:w-64
        float-animation
      "
        />


        <img
          src="/object2.png"
          alt="Right Object"
          className="
        absolute 
        top-35 right-2 w-20
        md:top-20 md:right-0 md:w-48
        lg:top-20 lg:right-0 lg:w-64
        float-animation
      "
        />


        <MovingString />
      </div>

      <div>

        <TopProducts />
      </div>


      <div>

        <FAQSection />
      </div>


      <div>

        <Footer />
      </div>



    </div>
  )
}

export default Customized
