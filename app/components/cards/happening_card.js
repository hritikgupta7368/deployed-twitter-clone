"use client"
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";


const Trending_Card = () => {
 

  return (
    <div className="bg-cardsbg w-full  rounded-xl md:flex flex-col justify-evenly hidden ">
      <h1 className="mt-3 pl-5 text-2xl font-bold ">What's happening</h1>
      <section className="w-full pt-3">
        <ShowTrends />
      </section>
      <Link className = "pl-5 h-12 hover:bg-[#4c4d4f] rounded-b-xl text-Button" href=''>Show more</Link>
    </div>
  );
};



const ShowTrends = () => {

  const [trends, setTrends] = useState([]);
 
  async function fetchTrends() {
   try {
     const response = await fetch('/api/gettrends')
     if (!response.ok) {
         throw new Error('Failed to fetch trends');
       }
       const data = await response.json();
       setTrends(data.trends);
 }
 catch(err){
     console.error(err)
 }
 
  }
  useEffect(() => {
   fetchTrends()
 }, []);
  return (
    <div className="py-2">
    {trends.map((link, index) => (
      <div key={link.id} className="hover:bg-[#4c4d4f] duration-100 pl-5 text-gray-500 text-[13px]">
        <div className="h-20 ">
          <div>Trending</div>
          <div className="text-white font-bold text-lg">{link.name}</div>
          <div>{link.usageCount} posts</div>
        </div>
      </div>
    ))}
    </div>
  )
}
export  {ShowTrends,Trending_Card}