import React from 'react'
import Navbar from '@/components/Navbar'
import MovingString from '@/components/MovingStrip'
import Hero from '@/components/contact/HeroSection'
import Footer from '@/components/Footer'
import ContactForm from '@/components/contact/FormSection'
const Contact = () => {
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
                    <Hero />
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
                <ContactForm />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact
