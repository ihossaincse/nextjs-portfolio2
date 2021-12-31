import Link from 'next/link';
import { useState } from 'react';
import { AiFillPhone, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const menuItems = ["Home", "Portfolio", "Works", "Testimonials", "Contact"];

const Header = () => {
    const [statusMenu, setStatusMenu] = useState(false);

    return (
        <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-sm">
            <div className="text-3xl font-semibold"><Link href="/">portfolio</Link></div>
            <div className="items-center hidden space-x-4 font-semibold sm:flex">
                <Link href="#"><a className="flex items-center space-x-1"><AiFillPhone /><span>+12-345-67</span></a></Link>
                <Link href="#"><a className="flex items-center space-x-1"><MdEmail /><span>email@portfolio.com</span></a></Link>
            </div>
            <div className="">
                {statusMenu ?
                    <div className="relative flex"> 
                        <AiOutlineClose size={30} className="relative z-50 mt-2 cursor-pointer" onClick={() => setStatusMenu(false)} /> 
                        <ul className="absolute z-10 w-screen h-screen p-4 text-right bg-orange-400 pt-14 -top-4 -right-4">
                            {menuItems.map((item) => (
                                <li className="py-1 text-2xl font-semibold" onClick={() => setStatusMenu(false)}><Link href={`#${item}`.toLowerCase()}>{item}</Link></li>
                            ))}
                        </ul>
                    </div>
                    : <AiOutlineMenu size={25} className="cursor-pointer" onClick={() => setStatusMenu(true)} />
                }
            </div>
        </div>
    )
}

export default Header
