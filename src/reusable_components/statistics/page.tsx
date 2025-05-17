import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import Employee from "../../images/statistics/employee.png";
import Services from "../../images/statistics/services_provided.png";
import Rate from "../../images/statistics/rate.png";

const Statistics: React.FC = () => {
    const [startCount, setStartCount] = useState(false);

    // Start counting when the component mounts
    useEffect(() => {
        setStartCount(true);
    }, []); 

    return (
        <div className="flex items-center justify-center mt-24 ">
        {/* Outer container */}
        <div className="flex w-full max-w-md p-4 bg-white rounded-lg shadow-2xl border">
          {/* Three inner boxes in row */}
        <div className="flex flex-row w-full justify-between gap-1 md:gap-3 lg:gap-5">

  {/* BOX 1 */}
<div className="flex-1 h-36 border rounded-md flex items-center justify-center">
    <div className="flex flex-col items-center"> 
      <img src={Employee.src} alt="Employee" className="w-10 h-10 mb-1" /> 
      <h1 className="text-black text-lg">Employee</h1>
        <div className="flex items-baseline">
                            <span className="text-3xl font-extrabold text-black pt-2 md:pt-2 lg:pt-2">
                                <CountUp 
                                    start={10} // Starting count
                                    end={100} // Ending count
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '60px', display: 'inline-block' }}
                                />
                            </span>
        <span className="text-3xl font-extrabold text-black">+</span>
    </div>

    </div>
  </div>


  {/* BOX 2 */}
  <div className="flex-1 h-36 border rounded-md flex items-center justify-center">
    <div className="flex flex-col items-center">
      <img src={Services.src} alt="Services" className="w-10 h-10 mb-1" />
      <h1 className="text-black text-lg">Services</h1> 
      <div className="flex items-baseline">
                            <span className="text-3xl font-extrabold text-black pt-2 md:pt-2 lg:pt-2">
                                <CountUp 
                                    start={10} // Starting count
                                    end={100} // Ending count
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '60px', display: 'inline-block' }}
                                />
                            </span>
                            <span className="text-3xl font-extrabold text-black">+</span>
    </div>

    </div>
    </div>
    {/* BOX 3 */}
    <div className="flex-1 h-36 border rounded-md flex items-center justify-center">
    <div className="flex flex-col items-center">
        <img src={Rate.src} alt="Rate" className="w-10 h-10 mb-1" />
        <h1 className="text-black text-lg">Rate</h1>
        <div className="flex items-baseline">
                            <span className="text-3xl font-extrabold text-black pt-2 md:pt-2 lg:pt-2">
                                <CountUp 
                                    start={10} 
                                    end={100} 
                                    duration={5} 
                                    delay={0} 
                                    style={{ width: '60px', display: 'inline-block' }}
                                />
                            </span>
                            <span className="text-3xl font-extrabold text-black">%</span>
        </div>

    </div>
</div>
</div>

          </div>
        </div>

    );
}

export default Statistics;

