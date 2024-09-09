"use client"
import Counter from "@/components/Counter";
import { useState } from "react";
const AboutPage = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Counter</h1>
      <div className="flex flex-col gap-4">
      <Counter counter={count}/>
      <div className="flex flex-row gap-4">
      <button disabled={count === 0}className="btn btn-accent max-w-40" onClick={()=> setCount(count-1)}>
        -
      </button>
      <button className="btn btn-accent max-w-40" onClick={()=> setCount(count+1)}>
        +
      </button>
      <button className="btn btn-accent max-w-40" onClick={()=> setCount(0)}>
        איפוס
      </button>
      </div>
     
      </div>
    
    </div>
  );
};

export default AboutPage;
