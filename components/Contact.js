import Image from 'next/image';
import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        e.target.reset();
        setStatus("Thanks for your message!");
    }

    return (
        <div id="contact" className="flex flex-col items-center h-screen sm:flex-row">
           <div className="relative flex-grow w-full h-full sm:w-6/12">
                <Image src="https://cdn.pixabay.com/photo/2018/04/13/16/43/notepad-3316995_960_720.jpg" alt="Contact Us" width="100%" height="100%" layout="fill" objectFit="cover" />
           </div> 
           <div className="flex-grow w-full p-4 my-6 sm:w-6/12">
               <h4 className="mb-6 text-2xl font-bold text-center">Contact</h4>
               <form action="" className="flex flex-col" onSubmit={(e) => handleForm(e)}>
                   <input type="text" placeholder="Name" className="px-2 py-1 mb-3 border-2 outline-none" />
                   <input type="email" required placeholder="Email *" className="px-2 py-1 mb-3 border-2 outline-none" />
                   <textarea placeholder="Message" cols="30" rows="10" className="px-2 py-1 mb-3 border-2 outline-none"></textarea>
                   <input type="submit" value="Submit" className="w-32 p-2 m-auto text-white bg-orange-400 rounded-lg cursor-pointer" />
               </form>
               {status ? (
                   <div className="p-4 font-semibold text-center text-green-600">{status}</div>
               ) : ""}
           </div>
        </div>
    )
}

export default Contact
