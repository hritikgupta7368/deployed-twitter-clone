"use client";
import { SessionProvider } from "next-auth/react";
import "../globals.css";



const Navbar_test = () => {
  return (
    <main className=" bg-black  md:w-[275px] md:h-full">


      <div className=" outline outline-blue-300 hidden md:contents md:max-w-[275px] md:w-[275px] md:h-full fixed">
        <div className="outline outline-red-900 md:relative md:h-full  mx-[8px]  md:flex-col md:justify-between  ">
          <div className="outline outline-pink-500 max-h-[674px] h-[674px] max-w-[259px] ">
            <div className="outline outline-green-300 max-h-[52px] max-w-[52px] h-[52px] w-[52px]">
              <div className="h-[50px] w-[50px]">
                <Image
                  height={25}
                  width={27}
                  alt="Picture of the author"
                  src="navbarMenu/premium.svg"
                />
              </div>
            </div>
            <div className="h-[552.75px] outline outline-green-500 max-w-[259px] ">
              {routes.map((route, index) => {
                if (index === 8) {
                  return <Button_PremiumCard src = {route.img} label={route.label} key={route.id}/>
                }
                if (index === 10) {
                  return (<MoreOption src = {route.img} label={route.label} key={route.id}/>)
                }
                if (index === 9) {
                  return (
                    <Link_profile
                      src={route.img}
                      label={route.label}
                      key={route.id}
                    />
                  );
                }
                return (
                  <div
                    key={route.id}
                    className=" cursor-pointer h-[50.25px] w-[259px] max-h-[50.25px] rounded-3xl hover:bg-[#16181c] duration-200 max-w-[259px]"
                  >
                    <Link href={route.href} className="w-full h-full ">
                      <div className="  w-[143px] max-w-[143px] h-[50.25px] flex flex-row items-center">
                        <div className="max-w-[26.25px] max-h-[26.25px]">
                          <Image
                            src={route.img}
                            height={26.25}
                            width={26.25}
                            alt="Picture of the author"
                          />
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
            </div>
            
          </div>
        </div>
      </div>
      






      <div className="md:hidden fixed bottom-0 w-full bg-black h-16">
        <div className="flex flex-row justify-between px-4 items-center h-full">
          <Link href="/home">
            <div className="duration-200 hover:opacity-70 p-2 rounded-full">
              <Image
                src={"/navbarMenu/home.svg"}
                height={26.25}
                width={26.25}
                alt="Picture of the author"
              />
            </div>
          </Link>
          <Link href="/explore">
            <div className="duration-200 hover:opacity-70 p-2 rounded-full">
              <Image
                src={"/navbarMenu/search.svg"}
                height={26.25}
                width={26.25}
                alt="Picture of the author"
              />
            </div>
          </Link>
          <Link href="/home">
            <div className="duration-200 hover:opacity-70 p-2 rounded-full">
              <Image
                src={"/navbarMenu/home.svg"}
                height={26.25}
                width={26.25}
                alt="Picture of the author"
              />
            </div>
          </Link>
          <Link href="/notifications">
            <div className="duration-200 hover:opacity-70 p-2 rounded-full">
              <Image
                src={"/navbarMenu/notifications.svg"}
                height={26.25}
                width={26.25}
                alt="Picture of the author"
              />
            </div>
          </Link>
          <Link href="/messages">
            <div className="duration-200 hover:opacity-70 p-2 rounded-full">
              <Image
                src={"/navbarMenu/messages.svg"}
                height={26.25}
                width={26.25}
                alt="Picture of the author"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-red-300 h-full w-full">
        <SessionProvider>
          <Navbar_test />
        </SessionProvider>
      </body>
    </html>
  );
}
