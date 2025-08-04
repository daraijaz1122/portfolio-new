import React from "react";

interface CourseDescriptionProps {
  description: string;
  courseId: string; // Add unique identifier
}

export const CourseDescription = ({
  description,
  courseId,
}: CourseDescriptionProps) => {
  return (
    <div className="course-description">
      {/* Smooth transition container */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden `}
      >
        <ul className="list-disc list-inside space-y-1 ">
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
    </div>
  );
};
