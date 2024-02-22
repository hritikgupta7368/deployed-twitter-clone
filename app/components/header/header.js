"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import UserLogo from "../common/userLogo";
import { useModal } from "@/app/providers/contextprovider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "../common/search";
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
    img: "common/settings.svg",
  },
];

const Header1 = () => {
    const path = usePathname()
    const session = useSession();
    const { handleNavbarSide } = useModal();
  return (
    <div className="md:hidden flex flex-row justify-between items-center px-5 py-2 w-full">
      <button onClick={handleNavbarSide}>
        <UserLogo logo={session.data?.user?.image} />
      </button>
      <div>
      {path === '/home' && <Image src="/download.jpg" height={35} width={35} quality={100} />}
      {path === '/explore' && <Search />}
      {path === '/notifications' && <div>Notifications</div>}
      {path === '/messages' && <div>Messages</div>}
      </div>
      <button>
        <Image src="/common/settings.svg" height={25} width={25} quality={10} />
      </button>
    </div>
  );
};
const MainHeader = () => {
  let feed = "foryou";
  return (
    <main className="w-full h-[54px]  flex flex-row">
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
};

const Navbar_side = () => {
  const session = useSession();
  const { handleNavbarSide, showNavbar } = useModal();

  return (
    <div
      className={`${
        showNavbar ? "translate-x-0 z-50 " : "-translate-x-[273px]"
      } h-full w-[70%] absolute bg-black duration-300 transition-all`}
    >
      <div className="w-full py-3 px-4">
        <button onClick={handleNavbarSide}>
          <UserLogo logo={session.data?.user?.image} />
        </button>
        <p>{session.data?.user?.name}</p>
        <p>{session.data?.user?.userId}</p>
        <div className="flex flex-row gap-4">
          <p>{session.data?.user?.following || 0} Following</p>
          <p>{session.data?.user?.followers || 0} Followers</p>
        </div>
      </div>
      <div className="w-full -2">
        {routes.map((route, index) => {
          return (
            <div className="px-4 cursor-pointer h-[50.25px] w-[259px] max-h-[50.25px] rounded-3xl hover:bg-[#16181c] duration-200 max-w-[259px]">
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
  );
};

const Header = () => {
  return (
    <div className="fixed w-full md:w-[46.8%] md:h-[54px] min-w-[40%] ">
      <Header1 />
      <MainHeader />
    </div>
  );
};

export { Header, Navbar_side };
