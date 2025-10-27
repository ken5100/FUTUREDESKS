import { motion } from "framer-motion";

const applications = [
  {
    id: 1,
    title: "MinitPe: Food Taxi and Grocery",
    desc: [
      "One-stop super app: food, grocery, rides & more in minutes.",
      "Instant-taxi, courier & parcel booking with real-time tracking.",
      "Farm-fresh produce, organic essentials & zero-waste marketplace.",
      "Integrated mobile checkout for seamless shopping & quick payments.",
    ],
    image: "/app1.png",
  },
  {
    id: 2,
    title: "Threadclothes Women's Fashion",
    desc: [
      "Trendy women’s fashion app with 1000+ styles and daily flat 30–60% deals.",
      "Supports a wide range of sizes and intuitive search by colour, pattern, or look.",
      "Free shipping & 7-day exchange/returns plus secure multiple payment options.",
      "Personalized lookbooks & style-remount features provide fresh outfit ideas daily.",
    ],
    image: "/app2.png",
  },
  {
    id: 3,
    title: "Uoons Electronics Shopping App",
    desc: [
      "Offers wholesaler-priced electronics starting from ₹49 for brand-heavy shopping.",
      "Supports Cash on Delivery, No-Cost EMI and multiple UPI/wallet payment options.",
      "Fast shipping on orders above ₹499 and a 7-day return/refund policy.",
      "Multi-store range: mobiles, gaming consoles, smart gadgets and more under one roof.",
    ],
    image: "/app3.png",
  },
  {
    id: 4,
    title: "Women Plus by Monika",
    desc: [
      "Size-inclusive fashion app with sizes from S to 10XL for every body type.",
      "360° product views + fabric and style info for confident online browsing.",
      "Filters by collection, colour, fabric, size & discount for streamlined shopping.",
      "Ships within 24 hrs, offers worldwide delivery, free shipping in India.",
    ],
    image: "/app4.png",
  },
  {
    id: 5,
    title: "Flowgreen Plants Delivery Fast",
    desc: [
      "60-minute delivery for plants, bouquets and gardening essentials in Kota.",
      "Wide selection: live plants, planters, custom bouquets and pots.",
      "Includes garden maintenance services to keep your plants thriving.",
      "Eco-friendly packaging and sustainable delivery promise.",
    ],
    image: "/app5.png",
  },
  {
    id: 6,
    title: "Twinleaves: Grocery App",
    desc: [
      "Everyday grocery and essentials delivered fast in your city.",
      "Clean interface with categories for staples, produce, snacks & more.",
      "Discount offers and in-app wallet credits for repeat shoppers.",
      "Multi-store range: mobiles, gaming consoles, smart gadgets and more under one roof.",
    ],
    image: "/app6.png",
  },
  {
    id: 7,
    title: "Assam board books",
    desc: [
      "Full textbooks & solutions for Classes 1-12 in Assamese & English medium.",
      "Includes past year papers, model answers & downloadable PDFs for offline use.",
      "Smart reader with zoom, night-mode and easy search for chapters & topics.",
      "Designed for Board of Secondary Education, Assam & Assam Higher Secondary Education Council syllabus prep.",
    ],
    image: "/app7.png",
  },
  {
    id: 8,
    title: "Reeta Fashion- Online Shopping",
    desc: [
      "Browse & buy ethnic wear, kurtis & men’s fashion in one sleek app.",
      "Free shipping on first order + exclusive app-only discounts and offers.",
      "Easy 7-day exchange and return process for hassle-free shopping.",
      "Secure payments: UPI, COD, EMI options supported for all users.",
    ],
    image: "/app8.png",
  },
  {
    id: 9,
    title: "Tracks by Truckoom",
    desc: [
      "Real-time GPS tracking for fleets: view location, speed, history easily.",
      "Alerts for geofence events, overspeed, harsh braking and vehicle maintenance.",
      "Dashboard reports, driver assignment & documentation tracking for fleet control.",
      "Designed for logistics, transit & construction fleets with multilingual support.",
    ],
    image: "/app9.png",
  },
  {
    id: 10,
    title: "Mahesh Mansarovar",
    desc: [
      "Browse full vegetarian menu from Mahesh’s Mansarovar including North + South Indian dishes.",
      "Order app-exclusive combos & sweets with live tracking for delivery.",
      "Secure payments: UPI, cards, wallets or COD supported.",
      "Introduced by Futuredesks Services for a seamless food-ordering experience.",
    ],
    image: "/app10.png",
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

export default function ApplicationsSection() {
  return (
    <section className="mt-16 w-full max-w-7xl mx-auto px-6 md:px-12 space-y-24 font-poppins" >
      {applications.map((app, index) => (
        <motion.div
          key={app.id}
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
              src={app.image}
              alt={app.title}
              className="rounded-xl w-[90%] max-w-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className={`rounded-xl text-left ${
              index % 2 !== 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 text-center md:text-left font-medium">
              {app.title}
            </h3>

            <ul className="space-y-2 mb-6">
              {app.desc.map((point, i) => (
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-black text-white rounded-xl shadow-md hover:shadow-lg transition" style={{ fontFamily: "Matter"}}
            >
              View App
            </motion.button>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
