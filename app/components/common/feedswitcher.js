"use client";
import Image from "next/image";




const UserSwitchButton = () => {
  return (
    <div className="w-[40px] h-[40px] bg-red-400 rounded-full">
      
    </div>
  )
}
const FeedSwitcher = () => {
  function handleFeedChange(){

  }
  let feed = "foryou"
  return (
    <section className="bg-black fixed top-0 w-full md:w-[46%] border-x-[1px] border-b-[1px] border-[#2f3336] h-20 md:h-14   ">
     <header className="md:hidden w-full flex flex-row justify-between px-2 items-center bg-black">
        <UserSwitchButton />
        <div className=""><Image src = "/download.jpg" height={50} width={50}/></div>
        <div>settings</div>
     </header>
     <div className="flex flex-row items-center w-full h-10 md:h-14">
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
          handleFeedChange("followers");
        }}
        className="w-1/2 link_button"
      >
        <h1
          className={`link_button_child ${
            feed === "followers"
              ? "text-white border-b-[5px] h-full border-Button rounded-sm"
              : ""
          }`}
        >
          Following
        </h1>
      </button>
      </div>
    </section>
  );
};

export default FeedSwitcher;
