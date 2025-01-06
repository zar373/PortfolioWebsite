// import React from "react";

// const ProjectTag = ({ name, onClick, isSelected }) => {
//   const buttonStyles = isSelected
//     ? "text-white border-[#b072ea]"
//     : "text-[#ADB7BE] border-slate-600 hover:border-[#b072ea]";

//   return (
//     <button
//       className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-base md:text-xl cursor-pointer w-full sm:w-auto min-w-[140px]`}
//       onClick={() => onClick(name)}
//     >
//       {name}
//     </button>
//   );
// };

// export default ProjectTag;

import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-[#b072ea]"
    : "text-[#ADB7BE] border-slate-600 hover:border-[#b072ea]";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-base md:text-xl cursor-pointer min-w-[140px] max-w-full flex-1 sm:flex-auto`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
