import React from "react";
import { MapPin, Mail, Phone, User, MessageSquare, MailOpen } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
       
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-500 font-medium mb-2">Contact Form</p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Have a question? <br /> Contact us now
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
            Have questions or need assistance? Our friendly team is ready to
            provide all the info you need — just get in touch.
          </p>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-full bg-gray-100 text-gray-700">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  343, Sector 12A, Near Canara Bank
                </p>
                <p className="text-sm text-gray-600">Rajendra Space, Awas Vikas Colony, Sikandra, Agra, UP–282007</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="p-2 rounded-full bg-gray-100 text-gray-700">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm text-gray-900">Kotdawar, Uttarakhand</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="p-2 rounded-full bg-gray-100 text-gray-700">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm text-gray-900">partnerships@futuredesks.in</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="p-2 rounded-full bg-gray-100 text-gray-700">
                <Phone className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm text-gray-900">+91 85995689310</p>
                <p className="text-sm text-gray-600">+91 8938121313</p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="bg-white p-6 sm:p-6 md:p-8 rounded-lg">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner"
                />
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner"
                />
              </div>
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <MailOpen className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner"
                />
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner"
                />
              </div>
            </div>

            
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <MessageSquare className="w-4 h-4" />
              </span>
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                aria-label="Message"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 shadow-inner resize-none"
              />
            </div>

           
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl shadow-md hover:shadow-lg transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      
      <div className="mt-16 rounded-xl overflow-hidden shadow-sm h-[300px] sm:h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123722734972!2d77.96537597485362!3d27.1776619507776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974776d1b3f15c5%3A0x5a2d4a58c3b9b70!2sAwas%20Vikas%20Colony%2C%20Sikandra%2C%20Agra%2C%20Uttar%20Pradesh%20282007!5e0!3m2!1sen!2sin!4v1697797267911!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
