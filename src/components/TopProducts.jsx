"use client";

import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        title: "Lal Sweets Ecom Website",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project1.png",
    },
    {
        id: 2,
        title: "Kirtilals : Luxury Website",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project2.png",
    },
    {
        id: 3,
        title: "Tradescribe: Trading Platform",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project3.png",
    },
    {
        id: 4,
        title: "Murzban: Clothing Luxury",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project4.png",
    },
    {
        id: 5,
        title: "Greenfeels: Sustainable Ecom",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project5.png",
    },
    {
        id: 6,
        title: "Momentz",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project6.png",
    },
    {
        id: 7,
        title: "Street9",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project7.png",
    },
    {
        id: 8,
        title: "Plutoze",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project8.png",
    },
    {
        id: 9,
        title: "Farm Fresh Co.",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
        ],
        image: "/project9.png",
    },
    {
        id: 10,
        title: "Daily Objects",
        desc: [
            "Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Commodo id amet mi. Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent.",
            "Nibh est vitae suspendisse parturient sed lorem eu.",
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
                            className={`flex justify-center p-6 rounded-2xl bg-gray-100 shadow-md ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
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
                            className={`font-[Gilroy-Medium] rounded-xl p-6 shadow-sm text-left ${index % 2 !== 0 ? "md:order-1" : "md:order-2"
                                }`}
                        >
                            <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 text-center md:text-left">
                                {product.title}
                            </h3>


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
                        </motion.div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
