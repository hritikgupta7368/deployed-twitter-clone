"use client";
import { useState ,useEffect} from "react";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import Image from "next/image";

const Newpost = () => {
  const [content, setContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [hashtags, setHashtags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const session = useSession();


  async function fetchTrends() {
    try {
      const response = await fetch('/api/gettrends')
      if (!response.ok) {
          throw new Error('Failed to fetch trends');
        }
        const data = await response.json();
        const trends = data.trends.map(trend => trend.name)
        setHashtags(trends);
        
  }
  catch(err){
      console.error(err)
  }
  
   }
   useEffect(() => {
    fetchTrends()
  }, []);


  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setContent(inputValue);

    const words = inputValue.split("");
    const lastWord = words[words.length - 1];
    if (lastWord && lastWord.startsWith("#")) {
    
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };


  const handleHashtagSelect = (hashtag) => {
    setContent(content + "" + hashtag.split("#")[1]);
    setShowDropdown(false);
  };

  const handleTextareaKeyDown = (event) => {
    if (event.key === "Backspace" && content.endsWith("#")) {
      setShowDropdown(false);
    }
  };

  const calculateRows = (content) => {
    const lines = content.split("\n");
    return Math.max(lines.length, 1);
  };

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return {
        src: URL.createObjectURL(file),
        images: file,
      };
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  function FindHashTag(inputString) {
    const hashtagRegex = /#(\w+)/g;
    const hashtags = [];
    let match;

    while ((match = hashtagRegex.exec(inputString)) !== null) {
      hashtags.push(match[1]);
    }
    return hashtags;
  }

  const handleSubmit = async () => {
    if (!content && !selectedImages) {
      setError("empty fields");
      return;
    }
    let postid = "";

    const hashtag = FindHashTag(content);

    try {
      setloading(true);
      const post = new FormData();
      let userId = session.data.user.id;
      let filesName = selectedImages.map((file) => file.images.name);
      post.append("userId", userId);
      post.append("content", content);
      post.append("filesName", filesName);
      post.append("hashTag", hashtag);

      const res = await fetch("/api/createpost", {
        method: "POST",
        body: post,
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData);
        setloading(false);
        return;
      } else {
        const data = await res.json();
        postid = data.postid;
        console.log(postid);
      }
      if (postid === "" || !postid) {
        setloading(false);
        return;
      }
      for (let i = 0; i < selectedImages.length; i++) {
        const file = selectedImages[i].images;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("userId", session.data.user.userId);
        formData.append("postid", postid);

        const response = await fetch("/api/uploadfiles", {
          method: "POST",
          body: formData,
        });

        if (response.status && response.status == 500) {
          throw new Error(`Failed to upload file ${file.name}`);
        }
        if (response.status && response.status == 200) {
          console.log(`File ${file.name}} uploaded successfully`);
        }
      }
      setloading(false);
      revalidatePath('/home')
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  
  

  return (
    <div className=" pb-2 w-full min-h-[150px]">
      <div className=" max-w-[94%] w-[94%]">
        <textarea
          name="content"
          style={{ fontSize: "24px", whiteSpace: "pre-line" }}
          type="text"
          rows={calculateRows(content)}
          placeholder="what is happening?!"
          className=" text-white bg-black overflow-visible w-full outline-none "
          onChange={handleInputChange}
          value={content}
          onKeyDown={handleTextareaKeyDown}
        />
      
        {showDropdown && (
          <HashtagList
            hashtags={hashtags}
            handleHashtagSelect={handleHashtagSelect}
          />
        )}
        <div className="text-Button text-sm font-bold w-full border-b-[1px] border-gray-600">
          <Image
            src="/earth.svg"
            height={14}
            width={14}
            alt="Picture of the author"
            className="inline mb-[5px] mr-1"
          />
          Everyone can reply
        </div>

        <section className=" w-full  overflow-x-auto">
          <input
            id="file-upload"
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            className="hidden"
          />
          <section className="w-full  overflow-x-auto mt-5 ">
            <div className="flex flex-row gap-3">
              {selectedImages.map((image, index) => {
                return (
                  <div key={image} className="relative">
                    <Image
                      src={image.src}
                      height={400}
                      width={400}
                      alt="Picture of the author"
                      className="rounded-xl  max-h-[400px] max-w-[400px] "
                    />
                    <button
                      className="absolute top-[5px] right-[5px] h-8 w-8 hover:opacity-[80%] rounded-full bg-[#4c4d4f]"
                      onClick={() =>
                        setSelectedImages(
                          selectedImages.filter((e) => e !== image)
                        )
                      }
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
          <div className="  w-full flex flex-row justify-between ">
            <button
              onClick={() => document.getElementById("file-upload").click()}
            >
              <Image src="/createpost/input_image.svg" height={20} width={20} alt="Picture of the author" />
            </button>
            <button
              onClick={handleSubmit}
              disabled={content.length === 0 && selectedImages.length === 0}
              className={` ${loading ? "w-28 " : ""} ${
                content.length === 0 && selectedImages.length === 0
                  ? "opacity-[70%]"
                  : ""
              }  bg-Button hover:opacity-55 text-white font-bold text-base rounded-full duration-100  w-20 h-10`}
            >
              {loading ? (
                <span>
                  <svg
                    aria-hidden="true"
                    className="inline w-5 h-6 text-white font-bold animate-spin dark:text-white fill-[#1d9bf0]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="pl-2 font-bold">Posting</span>
                </span>
              ) : (
                "post"
              )}
            </button>
          </div>
        </section>
      </div>
      {error && <p className="text-red-400 ">{error}</p>}
    </div>
  );
};

export default Newpost;

const HashtagList = ({hashtags, handleHashtagSelect}) => {
  return (
    <div className="absolute overflow-y-auto py-1 bg-black border-[1px] max-w-[400px] max-h-[400px] h-[200px] w-[400px]  rounded-xl border-slate-700/80">
      {hashtags.map((hashtag, index) => (
        <div
          className="pl-4 h-12 align-middle text-white text-xl cursor-pointer hover:bg-[#16181c]"
          key={index}
          onClick={() => handleHashtagSelect(hashtag)}
        >
          {hashtag}
        </div>
      ))}
    </div>
  );
};
