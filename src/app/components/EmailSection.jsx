"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/githubicon.svg";
import LinkedinIcon from "../../../public/linkedinicon.svg";
import EmailIcon from "../../../public/emailicon.svg";  // Add a new image for the email (if you have it)

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      {/* <div className="absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg"></div> */}
      <div className="z-8">
        <h5 className=" text-4xl font-bold text-white my-4">Let’s Collaborate</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-lg leading-relaxed">
          I’m always excited to discuss new opportunities or collaborations.
          Feel free to reach out!
        </p>
        <div className="flex gap-4">
          {/* GitHub Icon */}
          <Link href="https://github.com/zar373">
            <Image src={GithubIcon} alt="Github Icon" className="h-8 w-8" />
          </Link>

          {/* LinkedIn Icon */}
          <Link href="https://www.linkedin.com/in/zargul-ansari/">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" className="h-8 w-8" />
          </Link>

          {/* Email Picture Icon */}
          <Link href="mailto:zargul.ansari373@gmail.com">
            <Image
              src={EmailIcon}  // Add a suitable email icon image
              alt="Email Icon"
              className="h-8 w-8 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          {/* Replace this div with your image */}
          <Image
            src="/images/PortfolioEmail.jpeg"  // Add the picture you want to display
            alt="Picture for Email Section"
            width={500}  // You can adjust the size
            height={500}
            className="rounded-t-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
