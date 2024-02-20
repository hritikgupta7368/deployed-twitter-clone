
import Link from "next/link"
import FollowRecommend from "@/app/components/cards/follow_card";
import Search from "@/app/components/common/search";
import { Trending_Card } from "@/app/components/cards/happening_card";


const notification_items = [
  {
    label: "All",
  },
  {
    label: "Verified",
  },
  {
    label: "Mentions",
  },
 
];



const Notifications = () => {
 
  let feed = "All";
  return (
    <main className="w-full h-full pl-[290px]">
        <container className = " h-full w-full overflow-y-auto">
          <div className="fixed right-5 w-[350px] top-3  flex flex-col gap-4"> 
          <Search />
          <Trending_Card />
          <FollowRecommend />
          
          </div>

          <section className = "w-[600px]  border-r-[1px] border-[#2f3336] h-full ">

            <div className="backdrop-blur-md z-10 fixed w-[600px] border-b-[1px] border-r-[1px] border-[#2f3336] pt-2 ">
              <div className="pl-3 w-full text-xl font-bold">Notifications</div>
              <div className="flex flex-row w-full h-12  mt-1">
            {notification_items.map((items) => {
              return (
                <button key={items.id} className=" link_button  text-[15px]">
                  <h1
                    className={`link_button_child ${
                      feed === "All"
                        ? "text-white border-b-[5px] h-full border-Button rounded-sm "
                        : ""
                    }`}
                  >
                    {items.label}
                  </h1>
                </button>
              );
            })}
              </div>
            </div>

            <div className="pt-[110px] h-full w-full">
            <div className=" border-b-[1px] border-[#2f3336]">trending</div>
            <div>
            
            </div>
            </div>

          </section>

      </container>
    </main>
  )
}

export default Notifications
