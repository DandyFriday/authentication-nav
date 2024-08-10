import BackArrow from '../components/BackArrow';

const Success = () => {  
    return (
        <div className="flex items-center justify-center h-screen w-full
         bg-gray-400">
                  
                 
          <div className="h-[500px] w-[600px]  
           items-center justify-center
           bg-gray-900  mt-2 pr-[12px] p-8 
           rounded-lg shadow-md text-center ">
            <BackArrow  /> 
             
            <h1 className="mb-9 pb-6 text-2xl text-white font-bold mt-2">Login Successful</h1> 
            <p className="mt-20 pt-20 text-white ml-2">Welcome to the dashboard!</p>
            
          </div>
        </div>
      );
    };
    
   

export default Success;