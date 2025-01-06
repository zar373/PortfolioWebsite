import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";
// import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="bg-[#121213] min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <FooterSection />
        {/* <AchievementsSection /> */}
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="bg-[#121213] min-h-screen">
//       <Navbar />
//       <div className="container mx-auto px-4 sm:px-12 py-4">
//         <HeroSection />
//         <AboutSection />
//         <ProjectsSection />
//         <EmailSection />
//         <FooterSection />
//         {/* <AchievementsSection /> */}
//       </div>
//     </main>
//   );
// }


// flex min-h-screen flex-col
// container mx-auto px-12 py-4