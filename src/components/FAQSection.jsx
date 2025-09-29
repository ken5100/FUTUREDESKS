"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is Creatordesks Meta Verified?",
      answer:
        "No, Creatordesks is not Meta Verified, but we ensure that all features comply with Meta’s policies.",
    },
    {
      question: "Is Creatordesks free?",
      answer:
        "We offer both free and premium plans, depending on the features you need.",
    },
    {
      question: "Is there a risk of insta ban while using automation?",
      answer:
        "We use safe automation methods, but misuse or excessive activity can lead to account restrictions.",
    },
    {
      question: "Do I get referral income on renewals as well?",
      answer:
        "Yes, our referral program rewards you for renewals and new sign-ups.",
    },
    {
      question: "Can I get a GST invoice?",
      answer:
        "Absolutely! We provide GST-compliant invoices for all Indian customers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg_footer.png')" }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-snug">
            Frequently Asked <br /> Questions
          </h2>
        </div>

       
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium"
                >
                  <div className="flex items-center gap-3">
                    
                    <div className="w-1 h-5 bg-black rounded-full"></div>
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

              
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.25, 0.8, 0.25, 1], 
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
