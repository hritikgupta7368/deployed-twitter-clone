"use client";
import MediaComponent from "./media";
import TimeElapsed from "@/app/utils/timeago";
import UserLogo from "../../common/userLogo";
import Link from "next/link";
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
  mediaSrc
}) => {
 const link = `/${userId}`
  return (
    <div className="z-20 w-full md:max-w-[598px] md:w-[598px] border-b-[1px] border-x-[1px] border-[#2f3336]">
      <div className="mx-[8px] pt-[12px] flex flex-row justify-between">
        <UserLogo logo = {userlogo} />
        
        <div className="md:max-w-[518px] md:w-[518px] bg-black">
          <div className="md:max-w-[518px] md:max-h-[20px] md:h-[20px] flex flex-row justify-between">
            <div className="h-[20px] flex flex-row gap-[1px] items-center">
              <div className="font-bold hover:underline duration-150"><Link href={userId ? `/${userId}` : '/'} >{username}</Link></div>
              <Image src="post/verified.svg" height={20} width={20}  alt="Picture of the author" />
              <div className="text-medium text-gray-400/70">{userId}</div>
              <div className="ml-1 text-medium text-gray-400/70">
                <TimeElapsed createdAt={date} />
              </div>
            </div>
            <button>
              <Image src="post/dots.svg" height={20} width={18.75}  alt="Picture of the author" />
            </button>
          </div>
          <div className="md:max-w-[518px]">
            <peek>{content}</peek>
          </div>
          <div className="md:mt-[26px]">
            <MediaComponent
              count={2}
              mediaArray={media}
              mediaArraySrc={mediaSrc}
            /> 
            
          </div>
          <div className="max-h-[32px] max-w-[518px]">
            <div className="mt-[16] ">
              <div className="flex flex-row   text-sm text-[#a9a9a9]">
                <button className="max-h-[20px] md:w-[129.5px] hover:text-blue-500 duration-150">
                  <div className="flex flex-row gap-[2px]">
                    <Image src="post/comments.svg" height={18.75} width={18.75}  alt="Picture of the author" />
                    <span className=" w-[32.78px] max-h-[20px]">
                      {comments}
                    </span>
                  </div>
                </button>
                <button className="max-h-[20px] md:w-[129.5px] hover:text-green-500 duration-150">
                  <div className="flex flex-row gap-[2px]">
                    <Image src="post/reposts.svg" height={18.75} width={18.75}  alt="Picture of the author" />
                    <span className="w-[32.78px] max-h-[20px]">{reposts}</span>
                  </div>
                </button>
                <button className="max-h-[20px] md:w-[129.5px] hover:text-red-500 duration-150">
                  <div className="flex flex-row gap-[2px]">
                    <Image src="post/likes.svg" height={18.75} width={18.75}  alt="Picture of the author" />
                    <span className="w-[32.78px] max-h-[20px]">{likes}</span>
                  </div>
                </button>
                <button className="max-h-[20px] w-[129.5px] hover:text-blue-500 duration-150">
                  <div className="flex flex-row gap-[2px]">
                    <Image src="post/views.svg" height={18.75} width={18.75} alt="Picture of the author"/>
                    <span className="w-[32.78px] max-h-[20px]">{views}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostStructure;
