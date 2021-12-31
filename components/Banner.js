import Image from 'next/image';
import TypeAnimation from 'react-type-animation';
import person from "/public/images/person.png";

const time = 4000;
const position = ["Developer", time, "Designer", time, "Engineer", time];

const Banner = () => {
    return (
        <div id="home" className="flex items-center px-3 py-8">
           <div className="w-6/12 text-center">
                <Image src={person} alt="person" />   
            </div> 
            <div className="w-6/12 pl-4">
                <h4 className="text-xl font-semibold">Hi there, I am</h4>
                <h2 className="py-2 text-4xl font-bold md:text-5xl">John Doe</h2>
                <h4 className="text-xl font-semibold">Freelance <TypeAnimation className="text-orange-400"
                    cursor={true}
                    sequence={position}
                    wrapper="span"
                    repeat={Infinity}
                />
                </h4>
            </div>
        </div>
    )
}

export default Banner
