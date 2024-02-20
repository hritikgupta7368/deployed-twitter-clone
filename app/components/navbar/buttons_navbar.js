"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useModal } from "@/app/providers/contextprovider";
import { useState } from "react";
import Link from "next/link";
import UserLogo from "../common/userLogo";
import Image from "next/image";

function Button_Post() {
  const { handleModal } = useModal();

  return (
    <button
      onClick={() => handleModal("createPost")}
      className="mt-2 blue_button w-full text-xl rounded-full h-full"
    >
      Post
    </button>
  );
}

function Button_PremiumCard({ src, label, key }) {
  const { handleModal } = useModal();
  if (true) {
    return (
      <div
        onClick={() => handleModal("premium")}
        className="h-[50.25px] w-[259px] max-h-[50.25px]  max-w-[259px]"
        key={key}
      >
        <div className="w-full h-full rounded-3xl hover:bg-[#16181c] duration-200">
          <div className="w-[143px] max-w-[143px] h-[50.25px] flex flex-row items-center ">
            <div className="max-w-[26.25px] max-h-[26.25px]">
              <Image src={src} height={26.25} width={26.25} alt="Picture of the author"/>
            </div>
            <div className=" w-[116.75px] h-[24px] ">
              <span className="font-light text-[20px] ml-[20px] ">{label}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
function UserSessionCard() {
  const { data: session, status } = useSession();
  const [showButton, setShowButton] = useState(false);
  if (session) {
    return (
      <>
        <div className="hover:bg-[#16181c] rounded-full duration-200 h-[65.5px] max-h-[65.5px] w-[259px] ">
          <div className="flex flex-row items-center h-full w-full py-[12.5px]">
            <UserLogo logo={session?.user.image} />
            <div className=" flex flex-col justify-center h-[40px] w-[151px]  px-[12px]">
              <div className="font-bold">{session?.user.name}</div>
              <div className="text-medium text-gray-400/70">
                {session?.user.userId}
              </div>
            </div>
            <div
              onClick={() => {
                setShowButton(!showButton);
              }}
              className="cursor-pointer h-[40px] w-[43px] flex flex-row justify-end items-center"
            >
              <Image src="post/dots.svg" height={18.75} width={18.75} alt="Picture of the author" />
            </div>
          </div>
        </div>
        {/* floating card for navbar useSession */}
        <div
          className={` ${
            showButton ? "" : "hidden"
          } border-[1px] border-slate-700/80 text-[17px] font-bold  rounded-xl absolute left-[25px] h-[112px] bottom-[75px]  w-[300px] bg-black py-2`}
        >
          <button className="pl-2 text-left duration-200 w-full h-[44px] hover:bg-[#2f3336]">
            Add an existing account
          </button>
          <button
            onClick={() => {
              signOut();
            }}
            className=" pl-2 text-left duration-200 w-full h-[44px] hover:bg-[#2f3336]"
          >
            Log out {session?.user.userId}
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
}
function MoreOption({ src, label, key }) {
  const [showButton, setShowButton] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setShowButton(!showButton);
        }}
        className="h-[50.25px] w-[259px] max-h-[50.25px]  max-w-[259px]"
        key={key}
      >
        <div className="w-full h-full rounded-3xl hover:bg-[#16181c] duration-200">
          <div className="w-[143px] max-w-[143px] h-[50.25px] flex flex-row items-center ">
            <div className="max-w-[26.25px] max-h-[26.25px]">
              <Image src={src} height={26.25} width={26.25} alt="Picture of the author" />
            </div>
            <div className=" w-[116.75px] h-[24px] ">
              <span className="font-light text-[20px] ml-[20px] ">{label}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          showButton ? "" : "hidden"
        } border-[1px] border-slate-700/80 text-[17px] font-bold  rounded-xl absolute left-[25px]  bottom-[225px]  w-[300px] bg-black py-2`}
      >
        <div
          onClick={() => {
            setShowButton(!showButton);
          }}
          className="pl-2 text-left duration-200 w-full h-[44px] hover:bg-[#2f3336]"
        >
          <Link href="settings/account">Settings and Privacy</Link>
        </div>
      </div>
    </>
  );
}
function Link_profile({ src, label, key }) {
  const { data: session, status } = useSession();
 
  return (
    <div id = {key} className=" cursor-pointer h-[50.25px] w-[259px] max-h-[50.25px] rounded-3xl hover:bg-[#16181c] duration-200 max-w-[259px]">
      <Link href={`/${session?.user?.userId}`} className="w-full h-full ">
        <div className="  w-[143px] max-w-[143px] h-[50.25px] flex flex-row items-center">
          <div className="max-w-[26.25px] max-h-[26.25px]">
            <Image src={src} height={26.25} width={26.25} alt="Picture of the author" />
          </div>
          <div className=" w-[116.75px] h-[24px] ">
            <span className="font-light text-[20px] ml-[20px] ">{label}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Edit_profile(){
  const { isModalOpen , handleModal ,modalType} = useModal();
  return(
  
    <button  onClick={() => {handleModal('editprofile')}} className="absolute right-4 w-24 rounded-xl border-[2px] border-white">Edit profile</button>
   
  )
}

export {
  Button_Post,
  Button_PremiumCard,
  UserSessionCard,
  MoreOption,
  Link_profile,
  Edit_profile
};
