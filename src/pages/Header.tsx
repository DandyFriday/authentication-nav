import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import BackArrow from '../components/BackArrow';

const Header = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
    return (
        <div className="w-full">
                           
          <header className="fixed top-0 left-0 right-0 z-10 flex justify-between w-auto ml-20 mr-20 px-4 pt-3 ">  
           <div className="flex items-center gap-6">
            <MdOutlineMenuOpen 
            color='#1f4b43' 
            className="text-white cursor-pointer md:hidden"
            size={32}            
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            /> 
            <BackArrow /> 
            <h1 className="text-white ">DANDY</h1>
            </div>
                       
           
            <nav className={`fixed inset-0 bg-gray-800/90 flex flex-col justify-center items-center gap-8 text-white transition-transform transform ${
               isMenuOpen ? 'translate-x-0' : 'translate-x-full'
             } md:translate-x-0 md:relative md:flex-row md:space-x-8 md:bg-transparent md:text-base`}>
             <a href="#" className="md:inline-block hidden">Home</a>
             <a href="#" className="md:inline-block hidden">Solution</a>
             <a href="#" className="md:inline-block hidden">Pricing</a>
              <a href="#" className="md:inline-block hidden">Enterprise</a>
            </nav>
            <div className="w-auto space-x-6 mr-3">
              <button className="px-5 py-1 bg-gray-900 text-white 
                rounded-2xl hover:bg-white/45">Login</button>
              <button className="px-4 py-1 bg-red-500
             text-white rounded-2xl hover:bg-white/45">Logout</button>
            </div>                            
          </header> 
                   
        </div>
      );
    };
    
   

export default Header;


