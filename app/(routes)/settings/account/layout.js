"use client"
import Link from "next/link"
import { useState } from "react"
import Search from "@/app/components/common/search"

const options = [
    {
      label : 'Your account'
    },
    {
      label : 'Monetization'
    },
    {
      label : 'Premium'
    },
    {
      label : 'Creator Subscriptions'
    },
    {
      label : 'Security and account access'
    },
    {
      label : 'Privacy and Safety'
    },
    {
      label : 'Notifications'
    },
    {
      label : 'Accessibility,display, and languages'
    },
    {
      label : 'Additional resources'
    },
    {
      label : 'Help center'
    },
  ]

  export default function SettingsLayout({children}) {
   
  return (
    <div className="h-full">
     {children}
     <MenuSelector />
   
    </div>
  )
}



const MenuSelector = () => {
    const [selectedoption , setSelectedoption] = useState('Your account')
    return (
        <div className="h-full ml-[275px] w-[390px] border-r-[1px] border-[#2f3336]">
        <div className="h-[53px] pl-3 font-bold text-xl mt-2">Settings</div>
        <div className="h-[540px]">
          <div className="h-[60px]  px-3"><Search /></div>
          <div className="h-[480px]">
            {
              options.map((option,index) => {
                return(
                  <div key = {option} onClick = {() => {setSelectedoption(option.label)}} className={`${selectedoption === option.label?'bg-[#2f3336] border-r-[2px] border-Button':''} duration-200 h-[48px] hover:bg-[#2f3336]`}>
                    <div className="pl-3">
                      <div className="">
                        {option.label}
                      </div>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>
  
      </div>
    )
}