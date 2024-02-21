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
      <main className="w-full h-full pl-[275px]">
        <div className=" h-full w-full overflow-y-auto">
          {/* search bar */}
          <div className="z-20 fixed right-0 w-[408px] h-[53px] py-1 px-[30px] top-0 bg-black">
            <Search />
          </div>

          <div className="px-3 flex flex-row backdrop-blur-lg z-10 fixed h-[53px] w-[598px] border-x-[1px] border-b-[1px] border-[#2f3336] ">
              <div className="w-[56px] my-auto"><Image src = "common/return.svg" height={20} width={20}/></div>
              <div className="w-[510px] font-extrabold my-auto">{user?.name}</div>
          </div>

          <main className="mt-[53px] flex flex-row ">

            <div className="w-[598px] h-full">
              <div className="relative w-[598px] h-[423px] border-x-[1px] border-b-[1px] border-[#2f3336]">

                <div className="h-[200px] w-full bg-gray-800"><div className="absolute top-32 left-5 w-32 h-32 rounded-full  outline outline-black"><Image src = {user?.image} height = {128} width = {128} alt="Picture of the author" className="max-w-32 max-h-32 rounded-full" /></div></div>
                  <Edit_profile />
                <main className="pt-16 pl-5">
                 <div>
                    <p className=" text-2xl font-bold">{user?.name}</p>
                    <p className=" text-gray-400/70 font-medium">{user?.userId}</p>
                 </div>
                 <p className="text-gray-400/70">joined {user?.birthDate}</p>
                 <div className="flex flex-row gap-3 text-gray-400/70 ">
                 <p className="hover:underline"><span className="text-white font-medium">{user?.following}</span> Following </p>
                  <p className="hover:underline"><span className="text-white font-medium">{user?.followers}</span> Followers </p>
                 </div>
                </main>
                <div className="flex flex-row"> {Button_function(links)}</div>
                <Homeposts />
              </div>
             
            </div>


            <div className="sticky top-[53px] w-[408px] h-[800px] px-[30px]" >
              <div className="mt-3"><FollowRecommend_Card /></div>
              <div className="mt-3"><Trending_Card /></div>
            </div>
          </main>
        </div>
      </main>
    );
  }


export default Profile;
