import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 md:p-12 flex flex-col md:flex-row items-center md:justify-between">
        {/* ZA Logo */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-4xl md:text-5xl text-white font-semibold">
            ZA
          </p>
        </div>

        {/* Footer Text */}
        <p className="text-white text-center md:text-right mt-4 md:mt-0">
          Created with <strong>❤️, Next.js, & React</strong>, inspired by{" "}
          <strong>judygab's project</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
