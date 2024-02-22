import FeedSwitcher from "@/app/components/common/feedswitcher";
import PostsType from "@/app/components/post/posts";
import Search from "@/app/components/common/search";
import PremiumCard from "@/app/components/cards/premium_card";
import { Trending_Card } from "@/app/components/cards/happening_card";
import FollowRecommend from "@/app/components/cards/follow_card";
import Newpost from "@/app/components/post/createnewpost/newpost";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserLogo from "@/app/components/common/userLogo";
import { Navbar_side } from "@/app/components/header/header";
import { Header } from "@/app/components/header/header";
import CardSection from "@/app/components/container/cardsection";
const Home = async () => {
  const session = await getServerSession(authOptions);
 
 

  return (
    // <div className="md:ml-[275px] w-full h-full  ">
    //   <div className="bg-Button fixed bottom-24 md:hidden right-12 z-50 h-[60px] w-[60px] rounded-full">
        
    //   </div>
    //   <section className="overscroll-none w-full h-full flex flex-row ">
    //     <section className="w-full ">
    //       <FeedSwitcher />

    //       <section className="hidden md:block w-full mt-14  border-x-[1px] border-b-[1px] border-[#2f3336]">
    //         <div className="pt-4 pl-4 flex flex-row gap-3">
    //           <UserLogo logo = {session?.user.image}/>
    //           <Newpost />
    //         </div>
    //       </section>

    //       <section className="mt-20 w-full h-full overflow-y-auto">
    //         <PostsType />
    //       </section>
    //     </section>

    //     <section className="w-full h-full hidden md:contents">
    //       <div className="h-full pt-3 px-5  ">
    //         <div className="h-full w-full  flex flex-col items-center gap-4">
    //           <Search />
    //           <section className="overflow-y-auto w-full h-[850px] flex flex-col items-center gap-4 ">
    //             {session?.user.accountType === "basic" && <PremiumCard />}
    //             <Trending_Card />
    //             <FollowRecommend />
    //           </section>
    //         </div>
    //       </div>
    //     </section>
    //   </section>
    // </div>
    <main className="md:ml-[275px] relative h-full w-full overflow-y-auto">
    <Navbar_side />
    <Header />
    <CardSection />
   </main>
  );
};

export default Home;
