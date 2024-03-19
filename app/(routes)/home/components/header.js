"use client";
import { useSession } from "next-auth/react";
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import Link from "next/link"
import { signOut } from "next-auth/react";

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

const Navbar_side = () => {
  const session = useSession();
  
    return (
      <SheetContent side = "left" className=" w-[80%] md:hidden bg-black text-white border-none">
        <div className="h-10 flex flex-row justify-between">
          <Image
            src={session.data?.user?.image}
            height={40}
            width={40}
            className="rounded-full"
            alt="userlogo"
          />
          <div className="h-full  w-8">+</div>
        </div>
        <div className=" mt-2">
          <Link href={""} className="text-white font-bold">
              {session.data?.user?.name}
          </Link>
          <p className="text-gray-500">{session.data?.user?.userId}</p>
        </div>
         <div className="mt-3 flex flex-row justify-start text-gray-500 text-sm">
               <p className="">
                 <span className="text-white font-bold">
                   {session.data?.user?.following || 0}
                 </span>{" "}
                 Following
               </p>
               <p className="ml-3">
                 <span className="text-white font-bold">
                   {session.data?.user?.followers || 0}
                 </span>{" "}
                 Followers
               </p>
        </div>
        
        {/* navbar links */}
          <div >
            {routes.map((route, index) => {
              if (index === 6) {
                return (
                  <div className="w-full h-14 ">
                    <button
                      onClick={signOut}
                      className="pr-4 py-4 flex flex-row justify-start"
                    >
                      <Image src={route.img} height={24} width={24} />
                      <p className="h-6 ml-6 text-white font-bold text-xl">
                        {route.label}
                      </p>
                    </button>
                  </div>
                );
              }
              return (
                <div className="w-full h-14 ">
                  <Link href="" className="pr-4 py-4 flex flex-row justify-start">
                    <Image src={route.img} height={24} width={24} />
                    <p className="h-6 ml-6 text-white font-bold text-xl">
                      {route.label}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
    </SheetContent>
    )
  
  }
const Header =  () => {
    const HeaderTop = () => {
      const session = useSession();
        return (
            <div className="header_top_container">
                    <Sheet >
                    <SheetTrigger asChild>
                    <button className="header_top_container_child1">
                    <Image
                        src={session.data?.user?.image}
                        height={32}
                        width={32}
                        className="rounded-full"
                    />
                    </button>
                    </SheetTrigger>
                    <Navbar_side />
                    </Sheet>
               <div className="h-full w-9 flex flex-row items-center "><Image src = "/download.jpg" height={20} width={22}  className="w-full"/></div>
               <div className="header_top_container_child3"><Image src="/common/settings.svg" height={20} width={20} quality={10} /></div>
            </div>
        )
    }
  return (
    <div>
        <HeaderTop />
      <Tabs defaultValue="foryou" className="header">
        <TabsList className ="header_container">
            <TabsTrigger value="foryou" className = "header_trigger"><span className="header_trigger_child">For you</span></TabsTrigger>
            <TabsTrigger value="following" className = "header_trigger"><span className="header_trigger_child">Following</span></TabsTrigger>
        </TabsList>
        </Tabs>
    </div>
  )
}

export default Header
