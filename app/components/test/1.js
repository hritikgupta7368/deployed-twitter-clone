import {
  Button_Post,
  UserSessionCard,
  Button_PremiumCard,
  MoreOption,
  Link_profile,
} from "@/app/components/navbar/buttons_navbar";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/app/constant/navbar_items";

const Navbar_test = () => {
  return (
    <main className="fixed md:w-[275px] z-30 md:h-full">
      <div className="hidden md:contents md:max-w-[275px] md:w-[275px] md:h-full fixed">
        <div className=" md:relative md:h-full  mx-[8px]  md:flex-col md:justify-between  ">
          <div className=" max-h-[674px] h-[674px] max-w-[259px] ">
            <div className=" max-h-[52px] max-w-[52px] h-[52px] w-[52px]">
              <div className="h-[50px] w-[50px]">
                <Image
                  height={25}
                  width={27}
                  alt="Picture of the author"
                  src="navbarMenu/premium.svg"
                />
              </div>
            </div>
            <div className="h-[552.75px] max-w-[259px] ">
            <nav>
              {routes.map((route, index) => {
                 if (index === 8 ) {
                    return (<Button_PremiumCard src = {route.img} label={route.label} key={route.id}/>)
                 }
                 if (index === 10 ){
                  return (<MoreOption src = {route.img} label={route.label} key={route.id}/>)
                 }
                 if (index === 9){
                  return (<Link_profile src = {route.img} label={route.label} key={route.id} />)
                 }
                return (
                  <div className=" cursor-pointer h-[50.25px] w-[259px] max-h-[50.25px] rounded-3xl hover:bg-[#16181c] duration-200 max-w-[259px]">
                    <Link href={route.href} className="w-full h-full ">
                      <div className="  w-[143px] max-w-[143px] h-[50.25px] flex flex-row items-center">
                        <div className="max-w-[26.25px] max-h-[26.25px]">
                          <Image src={route.img} height={26.25} width={26.25} alt="Picture of the author" />
                        </div>
                        <div className=" w-[116.75px] h-[24px] ">
                          <span className="font-light text-[20px] ml-[20px] ">
                            {route.label}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
          <div className=" h-[52px] w-[233px]">
            <Button_Post />
          </div>

          </div>
          <UserSessionCard />
        </div>
      </div>
              {/* bottom navabr */}
      <div className="md:hidden flex flex-row justify-between items-center  fixed bottom-0 w-full bg-black border-t-[1px] border-[#2f3336] h-[53.5px]">
          <Link href = {""} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/home.svg" height={26.5} width={26.5} />
              </div>
          </Link>
          <Link href = {""} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/search.svg" height={26.5} width={26.5} />
              </div>
          </Link>
          <Link href = {""} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/grok.svg" height={26.5} width={26.5} />
              </div>
          </Link>
          <Link href = {""} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/notifications.svg" height={26.5} width={26.5} />
              </div>
          </Link>
          <Link href = {""} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/messages.svg" height={26.5} width={26.5} />
              </div>
          </Link>
      </div>
    </main>
  );
};
export default Navbar_test
