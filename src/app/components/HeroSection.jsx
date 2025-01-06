"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-10 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-7 text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#f088c3] to-[#b072ea]">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Zargul",
                1000,
                "Aspiring Data Scientist",
                1000,
                "ML/AI Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a data-driven enthusiast with expertise in Python, SQL, and
            building seamless data pipelines on Azure platforms. With a strong
            foundation in data analysis, visualization, and machine learning, I
            like to transform raw data into meaningful insights. Passionate about
            innovation and growth, I continuously challenge myself through
            hands-on projects and lifelong learning. 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-[#f088c3] via-[#c36099] to-[#b072ea] hover:bg-slate-200 transition-all duration-300 text-white hover:text-slate-900 font-medium shadow-lg hover:shadow-xl text-center"
            >
              Hire Me
            </Link>
            <a
              href="https://drive.google.com/file/d/1MmvLjkzLLd-0AZ7ASb_eIfoT3d86qGkX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-[#f088c3] via-[#c36099] to-[#b072ea] hover:bg-slate-800 transition-all duration-300 text-white hover:text-slate-900 font-medium shadow-lg hover:shadow-xl text-center"
            >
              View Resume
            </a>
            
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-5 flex justify-center"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] relative overflow-hidden">
            <Image
              src="/images/PortfolioPictureTwo.png"
              alt="Portfolio Picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain rounded-t-xl"
              style={{ objectFit: "cover" }}
              width={400}
              height={400}
             
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
