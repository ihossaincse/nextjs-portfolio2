import { FaUserCircle } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import testimonialsData from '../content/testimonialsData';

const Testimonials = () => {
    return (
        <div id="testimonials" className="max-w-4xl py-16 m-auto">
          <h2 className="text-4xl font-bold text-center">Testimonials</h2>   
          <div className="grid grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-3">
          {testimonialsData.map(({id, name, position, text}) => (
              <div className="px-6 py-8 transition-all shadow-xl rounded-2xl hover:scale-110">
                  <div className="flex items-center justify-center space-x-4">
                    <RiShareForwardLine size={22} />
                    <FaUserCircle size={34} />
                    <FiTwitter size={22} />
                  </div>
                  <div className="px-2 py-1 my-8 bg-orange-50">
                      {text}
                  </div>
                  <div className="text-center">
                      <h2 className="font-bold">{name}</h2>
                      <h3 className="">{position}</h3>
                  </div>
              </div>
          ))}    
          </div>
        </div>
    )
}

export default Testimonials
