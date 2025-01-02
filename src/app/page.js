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
    <main className="flex min-h-screen flex-col bg-[#121213]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <FooterSection/>
        {/* <AchievementsSection /> */}

      </div>
    </main>
  );
}
// container mx-auto px-12 py-4