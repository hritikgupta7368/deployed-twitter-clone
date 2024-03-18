import {Button_Post,UserSessionCard,Link_profile,} from "@/app/components/navbar/buttons_navbar";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/app/constant/navbar_items";
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Dialog,DialogTrigger,} from "@/components/ui/dialog"
import RegisterModal from "@/app/(register)/signin/registermodal";
import {Sheet, SheetTrigger,} from "@/components/ui/sheet"

const Navbar = () => {
  function LinkButton({src ,label ,key ,href}){
    return (
      <div className=" cursor-pointer h-[50.25px] w-[259px] max-h-[50.25px] rounded-3xl hover:bg-[#16181c] duration-200 max-w-[259px]">
      <Link href={href} className="w-full h-full ">
        <div className="  w-[143px] max-w-[143px] h-[50.25px] flex flex-row items-center ">
          <div className="max-w-[26.25px] max-h-[26.25px]">
            <Image src={src} height={26.25} width={26.25} alt="Picture of the author" />
          </div>
          <div className=" w-[116.75px] h-[24px] ">
            <span className="font-light text-[20px] ml-[20px] ">
              {label}
            </span>
          </div>
        </div>
      </Link>
    </div>
    )
  }
  function Button ({src ,label ,key }){
    return (
      <button className=" cursor-pointer h-[50.25px] w-[259px] max-h-[50.25px] rounded-3xl hover:bg-[#16181c] duration-200 max-w-[259px]">
        
        <div className="  w-[143px] max-w-[143px] h-[50.25px] flex flex-row items-center ">
          <div className="max-w-[26.25px] max-h-[26.25px]">
            <Image src={src} height={26.25} width={26.25} alt="Picture of the author" />
          </div>
          <div className=" w-[116.75px] h-[24px] ">
            <span className="font-light text-[20px] ml-[20px] ">
              {label}
            </span>
          </div>
        </div>
     
    </button>
    )
   

  }
  const PremiumToggle = ({src,label ,key}) => {
    return (
      <Dialog>
         <DialogTrigger asChild><Button src = {src} label={label} key={key} /></DialogTrigger>
          <RegisterModal />
      </Dialog>
    )
  }
  const MoreToggle = ({src,label ,key}) => {
    return (
      <Popover>
        <PopoverTrigger><Button src = {src} label={label} key={key}/></PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    )
  }
  return (
    <main className="hidden md:block  md:w-[275px] md:h-full z-10 text-white  bg-red-300  px-[8px]  md:flex-col md:justify-between ">
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
            <div className="h-[552.75px] max-w-[259px]">
                {routes.map((route, index) => {
                 if (index === 6 ) {
                    return (<PremiumToggle src = {route.img} label={route.label} key={route.id} />)
                 }
                 if (index === 8 ){
                  return (<MoreToggle src = {route.img} label={route.label} key={route.id}/>)
                 }
                 if (index === 9){
                  return (<Link_profile src = {route.img} label={route.label} key={route.id} />)
                 }
                return (
                  <LinkButton href = {route} src = {route.img} label={route.label} key={route.id} />
                );
              })}
           
          </div>
          <Button_Post />
         
          <UserSessionCard />
      



      {/* bottom navabr */}
      <div className="md:hidden flex flex-row justify-between items-center  fixed bottom-0 w-full bg-black border-t-[1px] border-[#2f3336] h-[53.5px]">

          <Link href = {"/home"} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/home.svg" height={26.5} width={26.5} />
              </div>
          </Link>
          <Link href = {"/explore"} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/search.svg" height={26.5} width={26.5} />
              </div>
          </Link>
          <Link href = {""} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/grok.svg" height={26.5} width={26.5} />
              </div>
          </Link>
          <Link href = {"/notifications"} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/notifications.svg" height={26.5} width={26.5} />
              </div>
          </Link>
          <Link href = {"/messages"} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/messages.svg" height={26.5} width={26.5} />
              </div>
          </Link>
      </div>

    </main>
  );
};
const Navbar_side = () => {
  return (
    <Sheet>
      navbar side
    </Sheet>
  )

}
export default Navbar
