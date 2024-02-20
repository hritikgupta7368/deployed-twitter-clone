import Newpost from "../post/createnewpost/newpost";
import { useModal } from "@/app/providers/contextprovider";
import Image from "next/image";

const PostButtonModal = () => {
  const { isModalOpen , handleModal ,modalType} = useModal();
  return (
    <div className=" bg-black max-w-[600px] w-[600px]   absolute rounded-3xl left-[295px] top-[110px] text-white z-10 ">
      <div >
      <button
        onClick={() => {handleModal('createPost')}}
        className="absolute left-3 top-3"
      >
        <Image src="/cross.svg" height={25} width={25} alt="Picture of the author" />
      </button>
      </div>


      <div className="mt-14 w-full  rounded-b-3xl p-3 flex flex-row gap-3 ">
       
        <Newpost />
      </div>
    </div>
  );
};

export default PostButtonModal;
