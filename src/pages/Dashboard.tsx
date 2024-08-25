import Header from "./Header";


const Dashboard = () => {
  return (
    <div className="p-10 space-y-8 bg-gradient-to-b from-gray-400 to-gray-600 w-full ">
        <Header/> 
      {/* Section 1 */}
      <div className="bg-gradient-to-b from-gray-300 to-gray-400 pt-1 mt-7">
      <section className="flex gap-8 justify-between items-center space-x-[-2rem] bg-gradient-to-b from-gray-300 to-gray-400 p-6 rounded-md  mt-3">
        <div className="text-center ml-6 md:text-left md:ml-[5rem] font-sans ">
          <h1 className="text-2xl lg:text-3xl ml-[-3rem] font-bold text-gray-800">Where Finance Meets <br/>Innovation</h1>
          <p className="mt-5 text-lg text-gray-700 ml-[-3rem]">I love innovations and productivity.</p>
          <button className="mt-4 px-2 ml-[-3rem] md:px-6 py-2 bg-gray-800 text-white rounded">Get Started</button>
        </div>
        <div className="bg-white p-3 pl-[1rem] md:mr-16 rounded-md shadow-md md:w-1/3">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-bold text-gray-700 ">Investment Overview</h2>
            <button className="text-gray-500 pr-4 font-bold">⋮</button>
          </div>          
          <div className=" my-3">
            <div className="relative w-32 h-32 animate-pulse">       
            <div className="absolute inset-0 w-full h-full rounded-full bg-green-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0)' }}></div>      
            <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500" style={{ clipPath: 'polygon(50% 50%, 0 100%, 0 0)' }}></div>
            <div className="absolute inset-0 w-full h-full rounded-full bg-orange-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}></div>
            <div className="absolute inset-0 w-full h-full rounded-full bg-red-500" style={{ clipPath: 'polygon(50% 50%, 0 100%, 100% 100%)' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full"></div>
          </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-xl md:text-2xl font-bold">50%</span>
                  <p className="text-gray-600">Each</p>
                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-end mb-8 ml-4">
            <div className="flex flex-col items-center justify-center mr-8 md:mr-8 mt-[-5px] md:mt-[-130px]"> 
             <p className="flex justify-center items-center md:flex md:items-center md:justify-center text-gray-600">Total Investment</p>
             <h3 className=" text-xl font-bold">$12,000</h3>             
            </div>
            <hr className="my-4 border-gray-700 " />         
            
          </div>          
        </div>
      </section>

      {/* Section 2 begins here [18rem] */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
        <div className="bg-white p-4 rounded-md shadow-md  mx-4 md:ml-16 lg:ml-20 lg:mr-[8rem]">
          <h2 className="text-2xl font-bold">Order List</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">All Revenue and Expenses</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex justify-between">
                <span>Revenue 1</span>
                <span>$1,200</span>
              </li>
              <li className="flex justify-between">
                <span>Expense 1</span>
                <span>$500</span>
              </li>
              <li className="flex justify-between">
                <span>Revenue 2</span>
                <span>$3,200</span>
              </li>
            </ul>
          </div>
        </div>

        {/*Second card of section 2 mr-[18rem] ml-[-14rem] w-30 h-[50vh] */}
        <div className="bg-white p-6 rounded-md lg:ml-[-6rem] shadow-md mx-4 lg:mr-[17rem]">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-700">Daily Activities</h2>
            <button className="text-gray-500 pr-4 font-bold">⋮</button>
          </div>
          <div className="flex justify-between mt-4 h-60">
         <div className="flex flex-col items-center mt-[5rem] lg:mt-[8rem]">
         <div className="w-4 bg-blue-500 rounded-sm" style={{ height: '40%' }}></div>
         <span>Sat</span>
         </div>
        <div className="flex flex-col items-center mt-[4rem] lg:mt-[7rem]">
          <div className="w-4 bg-green-500 rounded-sm" style={{ height: '50%' }}></div>
          <span>Sun</span>
        </div>        
          <div className="flex flex-col items-center mt-[4rem] lg:mt-[5rem]">
           <div className="w-4 bg-red-500 rounded-sm" style={{ height: '60%' }}></div>
          <span>Mon</span>
          </div>
          <div className="flex flex-col items-center mt-[6rem] lg:mt-[8rem]">
          <div className="w-4 bg-orange-500 rounded-sm" style={{ height: '45%' }}></div>
          <span>Tue</span>
        </div>
        <div className="flex flex-col items-center mt-[3rem] lg:mt-[0rem]">
          <div className="w-4 bg-purple-500 rounded-sm " style={{ height: '75%' }}></div>
          <span>Wed</span>
        </div>
        <div className="flex flex-col items-center pt-12 mr-2 lg:mt-[-1rem]">
          <div className="w-4 bg-pink-500 mb-0 mt-4 rounded-sm " style={{ height: '65%' }}></div>
          <span>Thu</span>
        </div>
        </div>          
        </div>
           {/*circle image  */} 
        <div className=" absolute hidden lg:block bottom-8 right-0 justify-end lg:justify-end lg:mr-[4rem]">
            <div className="flex space-x-[-8px]">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full  bg-cover bg-center"
                style={{ backgroundImage: "url('src/assets/img1.jpg')" }}> </div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cover bg-center"
                style={{ backgroundImage: "url('src/assets/img2.jpg')" }}> </div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cover bg-center pl-3"
                style={{ backgroundImage: "url('src/assets/img3.jpg')" }}></div>
            </div>
          </div>
      </section> 
      </div>
    </div>
  );
};

export default Dashboard;