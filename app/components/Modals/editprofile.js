"use client"
import { useModal } from "@/app/providers/contextprovider";
import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";

const Edit_profile_Modal = () => {
    const [formdata , setFormdata] = useState({
        name: '',
        bio: '',
        website : '',
        logo: null,
        banner:null
      })

    const {handleModal } = useModal();
    const hiddenFileInput = useRef(null);

    const handleChange = event => {

        // if (event.target.files && event.target.files[0]) {
        //   const i = event.target.files[0];
        //   const body = new FormData();
        //   body.append("image", i);
    
    
        // }
        setFormdata((prevFormData) => ({
            ...prevFormData,
            logo: e.target.files[0]
        }))
      };
    
    
      const handleClick = event => {
        hiddenFileInput.current.click();
      };
    
    
  return (
    <div className=" bg-black w-[600px] h-[650px] absolute rounded-3xl left-[295px] top-[80px] text-white z-10">
            <div className=" backdrop-blur-sm py-2 px-10  rounded-t-3xl w-[600px] fixed h-[53px] text-xl font-bold flex flex-row justify-between items-center">
                <button onClick={() => {handleModal('editprofile')}} className="absolute left-3 top-3">
                    <Image src="/cross.svg" height={25} width={25} alt="Picture of the author" />
                </button>
                <p className="ml-5">Edit Profile</p>
                <button className="bg-white text-black font-semibold w-20 h-8 rounded-full text-base">Save</button>
            </div>

            <main className=" mt-[53px] w-[600px] h-[600px] overflow-y-auto relative px-4" >
                <input   ref={hiddenFileInput} onChange={handleChange} accept="image/*"  type = "file" className="hidden" />
                <div className="relative h-[200px]  mt-1 w-full outline outline-white "><button onClick={handleClick}><img src = "/inputs/input.svg" className="absolute top-20 left-64 h-7 w-7"/></button></div>
                <input  accept="image/*" type = "file" className=" hidden" />
                <div className="bg-red-300 absolute left-7 top-32 w-32 h-32 rounded-full"><button ></button></div>
                <input  placeholder = "Name" type = "text" className="h-[86px] bg-black w-full my-5" />
                <input  placeholder = "Bio" type = "text" className="h-[120px] bg-black  w-full my-5" />
                <input placeholder = "website" type = "text" className="h-[86px] bg-black w-full  my-5" />
                <input type = "text" className="h-[48px] bg-black  w-full my-5 " />
               
            </main>
    </div>
  )
}

export default Edit_profile_Modal
