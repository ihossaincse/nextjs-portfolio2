import Image from 'next/image';
import React, { useState } from 'react';
import portfolioData from "../content/portfolioData";

const categories = [];
portfolioData.map(({id, img, category}) => {
    if(categories.indexOf(category) === -1) {
        categories.push(category);
    }
})

const Portfolio = () => {
    const [filter, setFilter] = useState(categories[0]);

    return (
        <div id="portfolio" className="max-w-4xl py-16 m-auto">
          <h2 className="text-4xl font-bold text-center">Portfolio</h2>  
          <div className="grid grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-5">
              {categories.map((category, index) => (
                  <div className={`px-2 py-1 text-center rounded-full cursor-pointer ${category === filter ? 'bg-orange-400 text-white' : ""}`} key={category+index} onClick={() => setFilter(category)}>{category}</div>
              ))}
          </div>
          <div className="relative grid grid-cols-2 gap-4 px-4 sm:grid-cols-3">
            {portfolioData.map(({id, img, title, category}) => (
                category === filter ? 
                    <div className="relative flex items-center justify-center" key={category+id}><Image src={img} alt={category} width="300" height="200" className="rounded-lg cursor-pointer" /><div className="absolute top-0 flex items-center justify-center w-full h-full text-lg font-semibold text-center text-white transition-all rounded-md opacity-0 cursor-pointer bg-orange-600/30 hover:opacity-100">{title}</div></div> : ""
            ))} 
          </div>
        </div>
    )
}

export default Portfolio
