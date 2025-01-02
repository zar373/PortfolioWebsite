import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image"; // Importing Image from Next.js

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, skills }) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Using Image component to handle image size and layout */}
          <Image
            src={imgUrl}
            alt={title}
            layout="fill" // Ensures image fills the container
            objectFit="cover" // Makes sure the image covers the entire area without distortion
            className="rounded-t-xl"
          />
        </div>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl && (
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          )}
          {/* Conditionally render preview button only if previewUrl is provided */}
          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#1E1E1E] text-white rounded-full text-sm border-2 border-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
