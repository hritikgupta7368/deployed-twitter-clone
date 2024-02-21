"use client";
import Image from "next/image";




const userSwitchButton = () => {
  return (
    <div className="w-[40px] h-[40px] bg-red-400 rounded-full">
      ddcdcs
    </div>
  )
}
const FeedSwitcher = () => {
  function handleFeedChange(){

  }
  let feed = "foryou"
  return (
    <section className="fixed top-0 w-[46.71%]  border-x-[1px] border-b-[1px] border-[#2f3336] h-20 md:h-14   ">
     <header className="md:hidden w-10 flex flex-row justify-between bg-yellow-300">
     <userSwitchButton />
      <div className=""><Image src = "/download.jpg" height={50} width={50}/></div>
      <div>settings</div>
     </header>
     <div className="flex flex-row bg-red-700 items-center w-full h-10 md:h-14">
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
