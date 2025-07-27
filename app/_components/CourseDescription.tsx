import React, { useState } from "react";

interface CourseDescriptionProps {
  description: string;
  courseId: string; // Add unique identifier
}

export const CourseDescription = ({
  description,
  courseId,
}: CourseDescriptionProps) => {
  const [openDescription, setOpenDescription] = useState(false);

  const handleOpenDescription = () => {
    setOpenDescription(!openDescription);
  };

  return (
    <div className="course-description">
      {/* Smooth transition container */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          openDescription ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-disc list-inside space-y-1 mb-4">
          {description.split("\n").map((line, i) => (
            <li
              className="text-lg text-gray-700 dark:text-gray-300"
              key={`${courseId}-line-${i}`}
            >
              {line}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleOpenDescription}
        className="cursor-pointer text-blue-600 py-2 text-lg underline hover:text-blue-400 transition-colors"
      >
        {openDescription ? "Hide Learnings" : "View Learnings"}
      </button>
    </div>
  );
};
