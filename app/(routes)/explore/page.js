
import Search from "@/app/components/common/search";
import FollowRecommend from "@/app/components/cards/follow_card";
import Homeposts from "@/app/components/post/posts";
import Options_explore from "@/app/components/options/explore";
import { ShowTrends } from "@/app/components/cards/happening_card";
import { Navbar_side } from "@/app/components/header/header";
import { Header } from "@/app/components/header/header";



const CardSection = () => {
  return (
    <div className='absolute hidden md:block w-[31.7%] h-full right-0 top-0  '>
      <div className="fixed w-[31.7%] top-5 right-0 px-3 "><FollowRecommend /></div>
    </div>
  )
}

const Explore = async() => {

  return (
    <main className="md:pl-[275px] relative h-full w-full overflow-y-auto">
    <Navbar_side />
    <Header />
    <div className=" w-full h-full pt-[114px] md:pt-[54px]">
      <Homeposts />
    </div>
    <CardSection />
   </main>
  );
};

export default Explore;
