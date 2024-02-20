"use client"
import { explore_items } from "@/app/constant/explore_items";
import { useEffect, useState } from "react";

const Options_explore = () => {
    const [selectedfeed , setSelectedFeed] = useState('For You')
   
    const fetchPosts = async() => {
        
    }
  useEffect(() => {
    fetchPosts()
  },[selectedfeed])
  

  return (
    <div className="flex flex-row w-full h-12  mt-1">
       
    {explore_items.map((items) => {
        return (
          <button onClick = {() => {setSelectedFeed(items.label)}} key={items.id} className=" link_button  text-[15px]">
            <h1  key={items.id}
              className={`link_button_child ${
                selectedfeed === items.label
                  ? "text-white border-b-[5px] h-full border-Button rounded-sm "
                  : ""
              }`}
            >
              {items.label}
            </h1>
          </button>
        );
      })}
      </div>
  )
}

export default Options_explore
