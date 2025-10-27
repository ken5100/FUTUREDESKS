import { useState } from "react";
import { motion } from "framer-motion";
import ApplicationsSection from "./customized/Applications";

const products = [
  {
    id: 1,
    title: "Lal Sweets Ecom Website",
    desc: [
      "Modern sweets store with responsive design for smooth shopping.",
      "Category-wise sweets, snacks, and festive combo listings.",
      "Quick checkout with discounts and first-order offers.",
      "SEO-friendly structure with dynamic product showcase.",
    ],
    image: "/project1.png",
  },
  {
    id: 2,
    title: "Kirtilals : Luxury Website",
    desc: [
      "Premium diamond-jewellery store with elegant UX for luxury buyers.",
      "1,500+ certified designs neatly organised for quick browsing.",
      "Integrated filters (metal type, gemstone, price) to refine search fast.",
      "Mobile-first responsive checkout designed to boost conversions on smaller devices.",
    ],
    image: "/project2.png",
  },
  {
    id: 3,
    title: "Tradescribe: Trading Platform",
    desc: [
      "Built a sleek journaling platform for tracking trades with AI-backed analytics.",
      "Enabled seamless CSV/broker upload to sync trading activity in real time.",
      "Designed interactive dashboards showing win rate, profit/loss & strategy insights.",
      "Created mobile-friendly UI optimised for Indian traders and multi‐broker support.",
    ],
    image: "/project3.png",
  },
  {
    id: 4,
    title: "Murzban: Clothing Luxury",
    desc: [
      "Modern online store for curated men’s & women’s designer fashion.",
      "Clear category hierarchy: women’s designers, men’s labels, accessories.",
      "“Just In” and “Bestsellers” sections boost visibility of new arrivals.",
      "Free shipping & global delivery emphasised for premium shopping experience.",
    ],
    image: "/project4.png",
  },
  {
    id: 5,
    title: "Greenfeels: Sustainable Ecom",
    desc: [
      "Curated eco-friendly essentials in a clean responsive design for conscious shoppers.",
      "Highlighted plastic-free, vegan and zero-waste collections in clear category layout.",
      "Built to optimise mobile checkout and promote sustainable living with ease.",
      "Designed with SEO-friendly structure and fast load to target green-focused audiences.",
    ],
    image: "/project5.png",
  },
  {
    id: 6,
    title: "Momentz",
    desc: [
      "Curated luxury gifts and premium home décor in a sleek online storefront.",
      "Silver-plated gifts, god idols and bar accessories neatly categorised for easy browsing.",
      "Eye-catching visuals and intuitive filters enhance the shopping experience.",
      "Mobile-optimised checkout with fast delivery builds trust and boosts conversions.",
    ],
    image: "/project6.png",
  },
  {
    id: 7,
    title: "Street9",
    desc: [
      "Trend-driven women’s apparel & accessories platform with intuitive navigation.",
      "++70% off sale banners and quick-buy options placed front-and-centre.",
      "Clean category filters for tops, dresses, ethnic wear, bags & more.",
      "Free shipping, COD and easy return boosts conversion and trust.",
    ],
    image: "/project7.png",
  },
  {
    id: 8,
    title: "Plutoze",
    desc: [
      "Non-custodial multi-chain wallet giving users full control of their crypto.",
      "Crypto-to-fiat debit card accepted globally with up to 3.5 % crypto back.",
      "Instant swap & send features across major chains with simplified UX.",
      "Developed with mobile-first design and optimized for global crypto usage.",
    ],
    image: "/project8.png",
  },
  {
    id: 9,
    title: "Farm Fresh Co.",
    desc: [
      "Millet-based brand with fresh, sustainable foods for modern lifestyles.",
      "Clean responsive design showcasing collections like premixes and healthy snacks.",
      "Emphasised eco-friendly credentials and age-old grain goodness.",
      "Mobile-optimised checkout and clear brand mission build trust and conversions.",
    ],
    image: "/project9.png",
  },
  {
    id: 10,
    title: "Daily Objects",
    desc: [
      "Offers stylish phone cases, laptop sleeves & lifestyle accessories in a sleek layout.",
      "Minimalist design-first branding appeals to modern, design-savvy audiences.",
      "Mobile-optimized shopping with trendy filters and quick-view product cards.",
      "Global shipping support and designer collabs enhance brand premium positioning.",
    ],
    image: "/project10.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
  }),
};

export default function TopProducts() {
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <div className="w-full flex flex-col items-center text-center my-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 py-2 bg-white shadow-md rounded-full text-gray-600 text-sm font-medium"
      >
        Projects
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-center font-[Matter] text-gray-900"
        style={{
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "44px",
          lineHeight: "120%",
          letterSpacing: "-0.28px",
          verticalAlign: "middle",
        }}
      >
        Our Top Projects
      </motion.h2>


    <div className="flex justify-center gap-3 mt-8">
  <button
    onClick={() => setActiveTab("websites")}
    className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform
      ${
        activeTab === "websites"
          ? "bg-black text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] translate-y-[-2px]"
          : "bg-white text-gray-700 shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:-translate-y-[2px]"
      }`}
  >
    Websites
  </button>

  <button
    onClick={() => setActiveTab("applications")}
    className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform
      ${
        activeTab === "applications"
          ? "bg-black text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] translate-y-[-2px]"
          : "bg-white text-gray-700 shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:-translate-y-[2px]"
      }`}
  >
    Applications
  </button>
</div>


      
      {activeTab === "websites" && (
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
              <motion.div
                className={`flex justify-center p-6 rounded-2xl bg-gray-100 shadow-md ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="rounded-xl w-[90%] max-w-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                className={`font-[Gilroy-Medium] rounded-xl p-6 text-left ${
                  index % 2 !== 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 text-center md:text-left">
                  {product.title}
                </h3>

                <ul className="space-y-2 mb-6">
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
              </motion.div>
            </motion.div>
          ))}
        </section>
      )}

      {activeTab === "applications" && <ApplicationsSection />}
    </div>
  );
}
