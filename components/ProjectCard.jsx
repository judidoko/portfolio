import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <>
      <div
        className="h-52 md:h-72 rounded-t-xl relative"
        style={{
          background: `url(${imgUrl})`,
          alt: "Project-image",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="flex items-center justify-center mt-2">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-12 w-12 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
