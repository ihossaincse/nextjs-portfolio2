import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import workData from "../content/workData";

const Works = () => {
    const [index, setIndex] = useState(0);

    const handleArrow = (direction) => {
        if(direction === "left") {
            if(index === 0) {
                setIndex(workData.length - 1)
            } else {
                setIndex(index - 1)
            }
        } else {
            if(index === (workData.length - 1)) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            } 
        }
    }
    
    return (
        <div id="works" className="flex items-center justify-center px-8 py-24 bg-orange-600">
          <IoIosArrowBack onClick={() => handleArrow("left")} size={64} className="text-white cursor-pointer" />
          <div className="relative">
              <Image className="rounded-2xl" src={workData[index]["img"]} width="800" height="400" alt="Work Image" />
          </div>
          <IoIosArrowForward onClick={() => handleArrow("right")} size={64} className="text-white cursor-pointer" />  
        </div>
    )
}

export default Works
