"use client";

import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Elite Quiz Web Platform",
    desc: [
      "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
      "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
      "Nibh est vitae suspendisse parturient sed lorem eu.",
    ],
    image: "/prebuild_1.png",
  },
  {
    id: 2,
    title: "eDemand Multi Vendor App + Web",
    desc: [
      "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
      "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
      "Nibh est vitae suspendisse parturient sed lorem eu.",
    ],
    image: "/prebuild_2.png",
  },
  {
    id: 3,
    title: "eGrocer Multi Vendor App + Web",
    desc: [
      "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
      "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
      "Nibh est vitae suspendisse parturient sed lorem eu.",
    ],
    image: "/prebuild_3.png",
  },
  {
    id: 4,
    title: "Elite Quiz Web Platform",
    desc: [
      "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
      "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
      "Nibh est vitae suspendisse parturient sed lorem eu.",
    ],
    image: "/prebuild_4.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function SaaS() {
  return (
    <div className="w-full flex flex-col items-center text-center my-12 px-6">
      {/* Pill Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 py-2 bg-white shadow-md rounded-full text-gray-600 text-sm font-medium"
      >
        SaaS
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-3xl md:text-4xl font-[Gilroy-Medium] text-gray-900"
      >
        Check our SaaS Products
      </motion.h2>

      {/* Products Section */}
      <section className="mt-16 w-full max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="grid md:grid-cols-2 gap-12 items-center px-2 md:px-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            {/* Product Image */}
            <motion.div
              className={`flex justify-center ${index % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={product.image}
                alt={product.title}
                className="rounded-2xl shadow-lg w-[90%] max-w-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              className={`font-[Gilroy-Medium] rounded-xl p-6 shadow-sm text-left ${index % 2 !== 0 ? "md:order-1" : "md:order-2"
                }`}
            >
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 text-center md:text-left">
                {product.title}
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-4 mb-6">
                {product.desc.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 text-base md:text-lg"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-900">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1">{point}</p>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.div className="flex justify-center md:justify-start">
                <motion.button
                  className="px-6 py-2 bg-black text-white rounded-full shadow-md"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check this out
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
