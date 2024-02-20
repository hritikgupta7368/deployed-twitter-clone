import Image from "next/image";
const imageExtensions = ["jpeg", "jpg", "png", "gif", "pdf"];
const videoExtensions = ["mp4", "avi", "avi", "mov", "webm"];


const MediaComponent = ({ count, mediaArray = [], mediaArraySrc = [] }) => {
  if (count === 0 || mediaArray.length === 0) {
    return null;
  }
  if (
    count > 0 &&
    mediaArray.length > 0 &&
    mediaArraySrc.length > 0 &&
    mediaArraySrc.length === mediaArray.length
  ) {
    if(count === 1 &&
      mediaArray.length === 1 &&
      mediaArraySrc.length === 1) {
        let mediaType = mediaArray[0].split(".")[1]
        return (
          <div className="my-5 h-[518px] max-w-[518px] max-h-[518px] ">
            <div className="w-full rounded-xl border-r-[1px] border-[#2f3336]">
              {
               imageExtensions.includes(mediaType)? 
               <Image  height={300} width={300} alt="Picture of the author" src = {mediaArraySrc} className="w-full rounded-xl"/>
               : 
               <video controls loop className="w-full rounded-xl">
                <source src = {mediaArraySrc} />
               </video>
              }
            </div>
          </div>
        );
      }
      else if(count === 2 &&
        mediaArray.length === 2 &&
        mediaArraySrc.length === 2)
        { let firstmediaType = mediaArray[0].split(".")[1]
        let secondmediaType = mediaArray[1].split(".")[1]
          return (
            <div className="my-5  max-w-[518px] max-h-[518px] ">
               <div className="w-full  rounded-xl border-[1px] border-[#2f3336]">
                <div className="flex flex-row">
                {
               imageExtensions.includes(firstmediaType)? 
               <Image  height={300} width={300} alt="Picture of the author" src = {mediaArraySrc[0]} className="w-1/2 rounded-l-xl"/>
               : 
               <video controls  loop className="w-1/2  rounded-l-xl">
                <source src = {mediaArraySrc[0]} />
               </video>
              }
               {
               imageExtensions.includes(secondmediaType)? 
               <Image  height={300} width={300} alt="Picture of the author" src = {mediaArraySrc[1]} className="w-1/2 rounded-r-xl"/>
               : 
               <video controls  loop className="w-1/2 rounded-r-xl">
                <source src = {mediaArraySrc[1]} />
               </video>
              }
                </div>
               </div>
            </div>
          )
        }
        else if(count === 3 &&
          mediaArray.length === 3 &&
          mediaArraySrc.length === 3){
           
            let firstmediaType = mediaArray[0].split(".")[1]
        let secondmediaType = mediaArray[1].split(".")[1]
        let thirdmediaType = mediaArray[2].split(".")[1]
          
    return (
      <div className=" h-[518px] max-w-[518px] max-h-[518px] border-2 border-white">
        <div className="w-full rounded-xl ">
          <div className="flex flex-row">
          <div className="w-1/2">
          {
               imageExtensions.includes(firstmediaType)? 
               <Image  height={300} width={300} alt="Picture of the author" src = {mediaArraySrc[0]} className=" rounded-l-xl"/>
               : 
               <video controls loop className=" rounded-l-xl">
                <source src = {mediaArraySrc[0]} />
               </video>
              }
          </div>
          <div className="w-1/2 flex flex-col">
          {
               imageExtensions.includes(secondmediaType)? 
               <Image  height={300} width={300} alt="Picture of the author" src = {mediaArraySrc[1]} className="h-1/2 rounded-r-xl"/>
               : 
               <video controls loop className=" h-1/2 rounded-r-xl">
                <source src = {mediaArraySrc[1]} />
               </video>
              }
              {
               imageExtensions.includes(thirdmediaType)? 
               <Image height={300} width={300} alt="Picture of the author" src = {mediaArraySrc[2]} className="h-1/2 rounded-r-xl"/>
               : 
               <video controls loop className="h-1/2 rounded-r-xl">
                <source src = {mediaArraySrc[2]} />
               </video>
              }

          </div>
          </div>

        </div>
      </div>
    );
  }
}
};
export default MediaComponent;
