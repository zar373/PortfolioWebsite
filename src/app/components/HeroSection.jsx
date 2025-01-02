"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#f088c3] to-[#b072ea]">
                Hello, I'm
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  'Zargul',
                  1000,
                  'Aspiring Data Scientist',
                  1000,
                  'ML/AI Enthusiast',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a data-driven enthusiast with expertise in Python, SQL, and building seamless data pipelines on Azure platforms. With a strong foundation in data analysis, visualization, and machine learning, I like to transform raw data into meaningful insights. Passionate about innovation and growth, I continuously challenge myself through hands-on projects and lifelong learning. 🚀
            </p>
            <div>
              {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#f088c3] via-[#c36099] to-[#7b4b9f] hover:bg-slate-200 transition-all duration-300 text-white hover:text-slate-900 font-medium shadow-lg hover:shadow-xl">
                Hire Me
              </button> */}
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#f088c3] via-[#c36099] to-[#b072ea] hover:bg-slate-800 transition-all duration-300 text-white hover:text-bold">
                <a
                  href="https://drive.google.com/file/d/1hjN4EZC5HslsXfhlpg448Lz-n-eiMfCX/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                >
                  View Resume
                </a>
              </button>
            </div>
          </motion.div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/PortfolioPictureTwo.png"
              alt="Portfolio Picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
