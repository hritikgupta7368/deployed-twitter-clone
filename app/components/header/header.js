"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import UserLogo from "../common/userLogo";
import { useModal } from "@/app/providers/contextprovider";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Search from "../common/search";
import { explore_items } from "@/app/constant/explore_items";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const routes = [
  {
    label: "Profile",
    href: "/userId",
    img: "navbarMenu/premium.svg",
  },
  {
    label: "Premium",
    href: "",
    img: "navbarMenu/premium.svg",
  },
  {
    label: "Lists",
    href: "/messages",
    img: "navbarMenu/messages.svg",
  },
  {
    label: "Bookmarks",
    href: "/messages",
    img: "navbarMenu/messages.svg",
  },
  {
    label: "Communities",
    href: "/messages",
    img: "navbarMenu/messages.svg",
  },
  {
    label: "Settings and privacy",
    href: "",
    img: "common/settings.svg",
  },
  {
    label: "Log out",
    href: "",
    img: "common/logout.svg",
  },
];

const Header1 = () => {
  const path = usePathname()
  const session = useSession();
  const { handleNavbarSide } = useModal();

  if(path === `/${session.data?.user?.userId}`){
    return null
  }
  if (path === "/home"){
    return <div className="md:hidden flex flex-row justify-between items-center px-4  h-14 w-full">
      <div className="w-14 h-full flex flex-row items-center">
        <button onClick={handleNavbarSide}>
          <Image
            src={session.data?.user?.image}
            height={32}
            width={32}
            className="rounded-full"
          />
        </button>
      </div>
      <div className="h-full w-9 flex flex-row items-center "><Image src = "/download.jpg" height={20} width={22} quality={100} className="w-full"/></div>
      <div className="w-14 h-full flex flex-row justify-end items-center">
        {" "}
        <Image src="/common/settings.svg" height={20} width={20} quality={10} />
      </div>
    </div>
  }
  return (
    <div className="md:hidden flex flex-row justify-between items-center px-4  h-14 w-full">
     
      <div className="w-14 h-full flex flex-row items-center">
        <button onClick={handleNavbarSide}>
          <Image
            src={session.data?.user?.image}
            height={32}
            width={32}
            className="rounded-full"
          />
        </button>
      </div>

      <div className="w-full  h-full flex flex-row items-center">
        <Search />
      </div>
      <div className="w-14 h-full flex flex-row justify-end items-center">
        {" "}
        <Image src="/common/settings.svg" height={20} width={20} quality={10} />
      </div>
     
    </div>
  );
};




const MainHeader = () => {
  const path = usePathname();
  const session = useSession();
  if (path === "/home") {
    let feed = "foryou";
    return (
      <main className="w-full  h-[54px]  flex flex-row">
        <button
          onClick={() => {
            handleFeedChange("foryou");
          }}
          className="w-1/2 link_button"
        >
          <h1
            className={`link_button_child ${
              feed === "foryou"
                ? "text-white border-b-[5px] h-full border-Button rounded-sm"
                : ""
            }`}
          >
            For You
          </h1>
        </button>
        <button
          onClick={() => {
            handleFeedChange("following");
          }}
          className="w-1/2 link_button"
        >
          <h1
            className={`link_button_child ${
              feed === "following"
                ? "text-white border-b-[5px] h-full border-Button rounded-sm"
                : ""
            }`}
          >
            Following
          </h1>
        </button>
      </main>
    );
  }
  if (path === "/explore") {
    const [selectedfeed, setSelectedFeed] = useState("For You");
    return (
      <main
        className="overflow-x-auto w-full h-[53px]  flex flex-row  "
        style={{ scrollbarWidth: "none" }}
      >
        {explore_items.map((items) => {
          return (
            <button
              onClick={() => {
                setSelectedFeed(items.label);
              }}
              key={items.id}
              className=" link_button  text-[15px]"
            >
              <h1
                key={items.id}
                className={`link_button_child min-w-[100px] p-2 ${
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
      </main>
    );
  }
  if(path === `/${session.data?.user?.userId}`){
    const router = useRouter()
    function handleClick(){
      router.back()
    }
    return <div className="w-full h-[53px]  flex flex-row">
      <div onClick = {handleClick} className="h-full flex flex-row items-center px-3 cursor-default"><Image src = "/common/return.svg" height={100} width={100} className="w-6 h-6"/></div>
      <div className="h-full flex flex-row items-center px-3 font-bold">{session.data?.user?.name}</div>
    </div>
  }
  else return null;
};





const Navbar_side = () => {
  const session = useSession();
  const router = useRouter();
 

  function handleButtonClick(){
    handleNavbarSide()
    router.push(session.data?.user?.userId)
  }

  return (
    // <div  className={`md:hidden  ${showNavbar ? "fixed z-[15] w-full h-full bg-slate-700/70" : " "} duration-200`}>
    //   <div onClick = {handleNavbarSide} className={`md:hidden ${showNavbar ? "z-20 absolute right-0  w-[30%] h-full ":""}`}></div>
        
    //     <div className={`md:hidden absolute  w-[77.7%]  h-full  z-20 max-w-[77.7%]  bg-black border-r-[1px] border-white/40 ${showNavbar ? "" : "-translate-x-[280px]"} duration-300 transition-all`}>
    //       <div className=" p-4">
    //         <div onClick = {handleButtonClick} className="h-10  flex flex-row justify-between">
             
    //           <Image
    //             src={session.data?.user?.image}
    //             height={40}
    //             width={40}
    //             className="rounded-full"
    //           />
             
    //           <div className="h-full  w-8">+</div>
    //         </div>

    //         <div className=" mt-2">
    //           <Link href={""} className="text-white font-bold">
    //             {session.data?.user?.name}
    //           </Link>
    //           <p className="text-gray-500">{session.data?.user?.userId}</p>
    //         </div>

    //         <div className="mt-3 flex flex-row justify-start text-gray-500 text-sm">
    //           <p className="">
    //             <span className="text-white font-bold">
    //               {session.data?.user?.following || 0}
    //             </span>{" "}
    //             Following
    //           </p>
    //           <p className="ml-3">
    //             <span className="text-white font-bold">
    //               {session.data?.user?.followers || 0}
    //             </span>{" "}
    //             Followers
    //           </p>
    //         </div>
    //       </div>
    //       <div className=" ">
    //         {routes.map((route, index) => {
    //           if (index === 6) {
    //             return (
    //               <div className="w-full h-14 ">
    //                 <button
    //                   onClick={signOut}
    //                   className="p-4 flex flex-row justify-start"
    //                 >
    //                   <Image src={route.img} height={24} width={24} />
    //                   <p className="h-6 ml-6 text-white font-bold text-xl">
    //                     {route.label}
    //                   </p>
    //                 </button>
    //               </div>
    //             );
    //           }
    //           return (
    //             <div className="w-full h-14 ">
    //               <Link href="" className="p-4 flex flex-row justify-start">
    //                 <Image src={route.img} height={24} width={24} />
    //                 <p className="h-6 ml-6 text-white font-bold text-xl">
    //                   {route.label}
    //                 </p>
    //               </Link>
    //             </div>
    //           );
    //         })}
    //       </div>


    //   </div> 
      
    //   </div>
    <div></div>
   
  );
};









const Header = () => {
  return (
    <div className="z-10 backdrop-blur-xl fixed w-full md:w-[46.8%] md:h-[54px] min-w-[40%] ">
      <Header1 />
      <MainHeader />
    </div>
  );
};

export { Header, Navbar_side };
