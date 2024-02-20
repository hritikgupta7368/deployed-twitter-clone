"use client";



const FeedSwitcher = () => {
  function handleFeedChange(){

  }
  let feed = "foryou"
  return (
    <section className="absolute top-0 w-[598px] flex flex-row border-x-[1px] border-b-[1px] border-[#2f3336] h-14 items-center ">
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
    </section>
  );
};

export default FeedSwitcher;
