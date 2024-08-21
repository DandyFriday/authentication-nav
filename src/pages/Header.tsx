import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import BackArrow from '../components/BackArrow';

const Header = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(true); 
    return (
        <div className="w-full">                           
          <header className="fixed top-0 left-0 right-0 flex justify-between w-full px-4 pt-3 bg-transparent">  
           <div className="flex items-center gap-4 md:gap-6">
            <MdOutlineMenuOpen 
            color='#1F3B4D' 
            className="text-white  cursor-pointer md:hidden"
            size={32}             
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            /> 
            <BackArrow /> 

            <h1 className="text-white ">DANDY</h1>  
            </div>                   
           
            <nav className={`flex justify-center items-center gap-8 text-white ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
             <a href="#" className="md:inline-block hidden" >Home</a>
             <a href="#" className="md:inline-block hidden">Solution</a>
             <a href="#" className="md:inline-block hidden">Pricing</a>
              <a href="#" className="md:inline-block hidden">Enterprise</a>
            </nav>
            <div className="w-auto space-x-4 mr-12 py-2">
              <button className="px-5 py-2 bg-gray-900 text-white 
                rounded-md hover:bg-white/45">Login</button>
              <button className="px-4 py-2 bg-red-500
             text-white rounded-md hover:bg-white/45">Logout</button>
            </div>                            
          </header> 
                   
        </div>
      );
    };
    
   

export default Header;


