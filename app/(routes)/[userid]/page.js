import { links } from "@/app/constant/profile_items";
import Homeposts from "@/app/components/post/posts";
import Button_function from "@/app/utils/button_generator";
import prisma from "@/app/lib/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Search from "@/app/components/common/search";
import { Trending_Card } from "@/app/components/cards/happening_card";
import FollowRecommend_Card from "@/app/components/cards/follow_card";
import { Edit_profile } from "@/app/components/navbar/buttons_navbar";
import Image from "next/image";
import { Header } from "@/app/components/header/header";




const Profile = async ({ params }) => {
 
    const session = await getServerSession(authOptions);
    const userId = session?.user?.userId;
    const userid = decodeURIComponent(params.userid);

    let user
    if (userid !== userId) {
       user = await prisma.user.findUnique({
        where: {
          userId: userid,
        },
        include: {
          posts: true,
        },
      });
    }
    else {
      user = await prisma.user.findUnique({
        where: {
          userId: userId,
        },
        include: {
          posts: true,
        },
      });
    }
    const posts = user?.posts;

    return (
      <main className="w-full h-full  md:pl-[275px]">
        
      
         <div className="bg-red-300"><Header /></div>
        <Body />
        <div className=" w-full h-full  md:pt-[54px]">
        <Homeposts />
      </div>
      </main>
    );
  }

  const Body = async() => {
    const session = await getServerSession(authOptions);
    return (
      <div className="pt-[53px] w-full ">

        {/* section 1 */}
        <section className="relative w-full min-h-[312px]">
          {/* banner */}
          <div className="min-h-[119px] bg-[#333639]"></div>

          {/* section 1.1 */}
          <div className="h-full w-full mb-4 px-4 pt-3 text-gray-500 text-sm">
            <div className="min-h-12"><Edit_profile /></div>
            <div className="mt-1 mb-3">
              <p className="text-white text-xl font-bold">{session?.user?.name}</p>
              <p className="text-base">{session?.user?.userId}</p>
            </div>
            <div className="mb-3 text-base">
              joined date
            </div>
            <div className="h-5 flex flex-row justify-start ">
            <p className="">
                <span className="text-white font-bold">
                  {session?.user?.following || 0}
                </span>{" "}
                Following
              </p>
              <p className="ml-3">
                <span className="text-white font-bold">
                {session?.user?.followers || 0}
                </span>{" "}
                Followers
              </p>
            </div>
          </div>

        {/* userlogo */}
        <div>
          <Image src = {session?.user?.image} height={90} width={90} className="rounded-full absolute top-20 left-4" />
        </div>
        </section>

        {/* navigation bar */}
        <section className="w-full h-[54px] border-b">
        <div className="flex flex-row"> {Button_function(links)}</div>
        </section>



      </div>
    )
  }

export default Profile;
