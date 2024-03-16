"use client";
import MediaComponent from "./media";
import TimeElapsed from "@/app/utils/timeago";
import Image from "next/image";

const PostStructure = ({
  content,
  userlogo,
  username,
  userId,
  comments,
  reposts,
  likes,
  views,
  date,
  media,
  mediaSrc,
}) => {
  const link = `/${userId}`;
  return (
    <main className="z-0 w-full border-b-[1px] border-[#2f3336]">
    <div className="mx-[1px] px-[16px] pt-[12px] flex flex-row  ">
      {/* userlogo */}
      <div className=" w-[40px]">
        <div className="w-[40px] h-[40px] ">
        <img
          src={userlogo}
         
          className="h-[40px] w-[40px] rounded-full"
        />
        </div>
      </div>

      <div className=" ml-[4px] w-full">
        {/* first line */}
        <div className="text-[15px]  text-gray-400/70 h-[20px] w-full flex flex-row justify-between items-center">
          <div className=" h-full  flex flex-row ">
            <div className="text-white  h-full truncate flex flex-row items-center font-bold">
              {username}
            </div>
            <div className="h-full flex flex-row items-center pl-[2px]">
              <Image
                src="post/verified.svg"
                height={20}
                width={10}
                alt="Picture of the author"
                className="h-[20px] w-[20px]"
              />
            </div>
            <div className="overflow-hidden h-full flex flex-row items-center pl-[4px]">
              {userId}
            </div>
            <div className="truncate h-full flex flex-row items-center pl-[4px]">
            
              <TimeElapsed createdAt={date} />
            </div>
          </div>
          <div className="ml-[8px] hover:text-Button">...</div>
        </div>

        {/* content */}
        <div className="text-[15px]  h-[20px] min-h-5 max-w-full w-full">{content}</div>



        {/* media */}
        <div className=" min-h-5 max-w-full w-full">
          {" "}
          <MediaComponent
            count={3}
            mediaArray={media}
            mediaArraySrc={mediaSrc}
          />{" "}
        </div>
        {/* footer */}
        <div className=" text-gray-400/70 h-[32px] w-full pt-[12px]  flex flex-row  justify-between mb-3">
                <button className="max-h-[20px]  w-1/4 hover:text-blue-500 duration-150">
                  <div className="flex flex-row gap-[2px]">
                    <Image src="post/comments.svg" height={18.75} width={18.75}  alt="Picture of the author" />
                    <span className=" w-[32.78px] max-h-[20px]">
                      {comments}
                    </span>
                  </div>
                </button>
                <button className="max-h-[20px]  w-1/4 hover:text-green-500 duration-150">
                  <div className="flex flex-row gap-[2px]">
                    <Image src="post/reposts.svg" height={18.75} width={18.75}  alt="Picture of the author" />
                    <span className="w-[32.78px] max-h-[20px]">{reposts}</span>
                  </div>
                </button>
                <button className="max-h-[20px]  w-1/4 hover:text-red-500 duration-150">
                  <div className="flex flex-row gap-[2px]">
                    <Image src="post/likes.svg" height={18.75} width={18.75}  alt="Picture of the author" />
                    <span className="w-[32.78px] max-h-[20px]">{likes}</span>
                  </div>
                </button>
                <button className="max-h-[20px]  w-1/4 hover:text-blue-500 duration-150">
                  <div className="flex flex-row gap-[2px]">
                    <Image src="post/views.svg" height={18.75} width={18.75} alt="Picture of the author"/>
                    <span className="w-[32.78px] max-h-[20px]">{views}</span>
                  </div>
                </button>
        </div>
      </div>
    </div>
    </main>
  );
};

export default PostStructure;
