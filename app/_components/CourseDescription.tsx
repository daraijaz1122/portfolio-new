import React, { useState } from 'react';

interface CourseDescriptionProps {
  description: string;
}

export const CourseDescription = ({ description }: CourseDescriptionProps) => {
    const [openDescription, setOpenDescription] = useState(false)
    const handleOpenDescription = () => {
        setOpenDescription(!openDescription)
    }
  return (
      <div >
                  
              {openDescription&&
                                description.split('\n').map((line, i) => (
                                    <li className='text-lg text-gray-700 dark:text-gray-300' key={i}>{line}</li>
                                ))
          }
           <button onClick={handleOpenDescription} className='cursor-pointer text-blue-600 py-2  text-lg underline'>{ openDescription?"Hide":"View Learnings"}</button>
    </div>
  )
}


