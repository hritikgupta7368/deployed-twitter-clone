
import Search from "@/app/components/common/search";
import FollowRecommend from "@/app/components/cards/follow_card";
import Homeposts from "@/app/components/post/posts";
import Options_explore from "@/app/components/options/explore";
import { ShowTrends } from "@/app/components/cards/happening_card";

const Explore = async() => {
  
 


 

 
  return (
    <main className="w-full h-full md:ml-[275px]">
        <div className = " h-full w-full overflow-y-auto">
          <div className="fixed right-5 w-[350px] top-3"> <FollowRecommend /></div>

          <div className = " w-[598px] h-full ">

            <div className="  backdrop-blur-md z-10 fixed w-[598px] border-x-[1px] border-b-[1px] border-[#2f3336] pt-2 ">
              <div className="px-3 w-full"><Search /></div>
             <Options_explore />              
            </div>

            <div className="pt-[105px] h-full w-full">
            <div className="border-x-[1px] border-b-[1px] border-[#2f3336]">
              <ShowTrends />
            </div>
            <div>
            <Homeposts />
           
            </div>
            </div>

          </div>

      </div>
    </main>
  );
};

export default Explore;
