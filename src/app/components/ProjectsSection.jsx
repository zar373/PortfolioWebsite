"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "End-to-End Data Pipeline Architecture with Azure ",
    description: "This project showcases a data pipeline built using Azure Data Factory, Azure Databricks, Azure Data Lake Gen2, Azure Synapse Analytics, and Power BI. It automates data ingestion, transformation, storage, and visualization, ensuring scalable insights. Data is extracted from GitHub, stored in Data Lake Gen2, transformed in Databricks, and processed in Synapse Analytics. Finally, insights are visualized through Power BI dashboards.",
    image: "/images/projects/AzureAdventureWorks.png",
    tag: ["All", "Data Engineering"],
    skills: ["Azure Data Factory", "Databricks", "Azure Synapse Analytics", "Power BI"],
    gitUrl: "https://github.com/zar373/Azure_Adventure_Works",
  },
  {
    id: 2,
    title: "Gemini PDF Bot",
    description: "Gemini PDF Bot is a Streamlit-based chatbot that allows users to interact with PDF documents. It lets you upload a PDF, ask questions, and receive answers based on the document’s content, powered by Google’s Gemini AI and FAISS for vector storage. ",
    image: "/images/projects/GeminiPDFBot.png",
    tag: ["All", "ML/AI"],
    skills: ["Python", "NLP", "FAISS", "Streamlit"],
    gitUrl: "https://github.com/zar373/Gemini_PDF_Bot",
    previewUrl: "https://geminipdfbot-wujytut7zbbakajjqsxj95.streamlit.app/",
  },
  {
    id: 3,
    title: "ContentFlow",
    description: "ContentFlow is an AI-powered platform for generating engaging content tailored to specific topics. It’s designed for creators, bloggers, and businesses, featuring a seamless user interface and integrated payment options. The tech stack includes Clerk for authentication, Drizzle for database management, and LemonSqueezy for subscription and payment processing.",
    image: "/images/projects/ContentFlow.png",
    tag: ["All", "ML/AI"],
    skills: ["Next.js", "React", "TailwindCSS", "LemonSqueezy", "Clerk", "Drizzle"],
    gitUrl: "https://github.com/zar373/ContentFlow",
    previewUrl: "https://content-flow-blush.vercel.app/",
  },
  {
    id: 4,
    title: "Telecom Churn Prediction",
    description: "This academic project predicts telecom customer churn using machine learning models such as Logistic Regression, Decision Tree, KNN, and Random Forest. It includes EDA on the churn dataset and a Flask-based UI for interactive predictions.",
    image: "/images/projects/TelecomChurnAnalysis.jpg",
    tag: ["All", "ML/AI"],
    skills: ["Python", "Machine Learning", "Flask"],
    gitUrl: "https://github.com/hariskhan-hk/Churn_pred",
  }, 
  {
    id: 5,
    title: "Loan Prediction System",
    description: "This project predicts loan eligibility using multiple machine learning models: Decision Tree, Random Forest, XGBoost, and Logistic Regression. The models are fine-tuned using Grid Search Cross-Validation (GridCV) to ensure optimal performance, achieving an overall accuracy of 85%.",
    image: "/images/projects/LoanPrediction.png",
    tag: ["All", "ML/AI"],
    skills: ["Python", "Machine Learning", "Scikit-learn", "Streamlit"],
    gitUrl: "https://github.com/zar373/Loan_Prediction",
    previewUrl: "https://loanprediction-zar373.streamlit.app/",
  },

  {
    id: 6,
    title: "Active Pharmaceutical Ingredients (API) Manufacturing: Case Study of Pakistan",
    description: " In this research paper, I contributed to the data analysis section by working with Pakistan's customs data to extract valuable pharmaceutical-related information. Using Python and MS Excel, I processed and analyzed the data to identify key trends and patterns in the pharmaceutical industry. The insights were then presented through interactive dashboards built with Tableau, enabling a clear and comprehensive understanding of the industry’s landscape and its growth trajectory in Pakistan.",
    image: "/images/projects/APIRastaRP.png",
    tag: ["All", "Data Analysis"],
    skills: ["Python", "MS Excel", "Tableau"],
    previewUrl: "https://rasta.pide.org.pk/wp-content/uploads/05.061-Kazi-Afaq_Paper.pdf",
  },
  {
    id: 7,
    title: "Marketing Campaign Dashboard",
    description: "This dashboard is designed to analyze and extract valuable insights from marketing campaign data. It features interactive charts and graphs to visualize campaign performance, audience engagement, and conversion rates.",
    image: "/images/projects/TableauMarketingDashboard.png",
    tag: ["All", "Data Analysis"],
    skills: ["Tableau"],
    gitUrl: "https://github.com/zar373/Tableau-Dashboards",
    previewUrl: "https://public.tableau.com/app/profile/zargul.ansari/viz/MarketingCampaignDashboard_17241580735100/Dashboard1",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag=== "All"} />
        <ProjectTag
        onClick={handleTagChange}
        name="Data Engineering"
        isSelected={tag === "Data Engineering"}
        />
        <ProjectTag
        onClick={handleTagChange}
        name="Data Analysis"
        isSelected={tag === "Data Analysis"}
        />
        <ProjectTag onClick={handleTagChange} name="ML/AI" isSelected={tag === "ML/AI"} 
        />
        </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          skills={project.skills}
        />
          </motion.li>

        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
// 

