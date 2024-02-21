"use client";
import { useModal } from "@/app/providers/contextprovider";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Edit_profile_Modal = () => {
  const { handleModal } = useModal();
  const hiddenFileInput = useRef(null);
  const [banner, setBanner] = useState("null");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    website: "",
    dob: "",
    logo: null,
    banner: null,
  });

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("api/user/profile");
      if (response.ok) {
        const userData = await response.json();
        setFormData(userData);
      } else {
        console.error("Failed to fetch user profile data");
      }
    } catch (error) {
      console.error("Error fetching user profile data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create FormData object to send multipart/form-data
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("bio", formData.bio);
    formDataToSend.append("userLogo", formData.userLogo);
    formDataToSend.append("banner", formData.banner);

    try {
      // Make API call to update user profile data
      const response = await fetch("api/user/profile", {
        method: "PUT", // Adjust the HTTP method as needed
        body: formDataToSend,
      });
      if (response.ok) {
        console.log("User profile updated successfully");
      } else {
        console.error("Failed to update user profile");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div className=" bg-black w-[600px] h-[650px] absolute rounded-3xl left-[295px] top-[80px] text-white z-10">
      <form onSubmit={handleSubmit} className="fixed">
        <div className=" backdrop-blur-xl py-2 px-10   rounded-t-3xl w-[600px]  text-xl font-bold flex flex-row justify-between items-center">
          <button
            onClick={() => {
              handleModal("editprofile");
            }}
            className=" absolute left-3 top-3"
          >
            <Image
              src="/cross.svg"
              height={25}
              width={25}
              alt="Picture of the author"
            />
          </button>
          <p className="ml-5">Edit Profile</p>
          <button
            type="submit"
            className="bg-white text-black font-semibold w-20 h-8 rounded-full text-base"
          >
            Save
          </button>
        </div>

        <main className=" w-[600px] h-[600px] overflow-y-auto relative px-4">
          {/* banner section */}
          <input
            name="banner"
            ref={hiddenFileInput}
            onChange={handleFileChange}
            accept="image/*"
            type="file"
            className="hidden"
          />
          <div className="  relative h-[200px]  mt-1 w-full  ">
          {formData.banner && <Image height={10} width={10} className="h-full w-full object-fill" src={URL.createObjectURL(formData.banner)} alt="Banner" />}
            <button onClick={handleClick}>
              <Image
                src="/inputs/input.svg"
                height={28}
                width={28}
                className="absolute top-20 left-64 h-10 w-7"
              />
            </button>
          </div>


          {/* userlogo section */}
          <input
            name="userLogo"
            onChange={handleFileChange}
            accept="image/*"
            type="file"
            className=" hidden"
          />
          <div className="  outline outline-white absolute left-7 top-32 w-32 h-32 rounded-full">
            <div className="relative w-full h-full">
            {formData.userLogo && <img src={URL.createObjectURL(formData.userLogo)} alt="User Logo" />}
            <button onClick={handleClick}>
            <Image
                src="/inputs/input.svg"
                height={28}
                width={28}
                className="absolute"
              />
            </button>
            </div>
          </div>


          {/* text input  */}
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            className="h-[58px] peer input bg-black w-full my-5"
          />
          <input
            placeholder="Bio"
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="h-[98px] peer input bg-black  w-full my-5"
          />
          <input
            placeholder="website"
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="h-[56px] peer input bg-black w-full  my-5"
          />
          <input
            type="text"
            placeholder="DOB"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className=" peer input h-[58px] bg-black  w-full my-5 "
          />
        </main>
      </form>
    </div>
  );
};

export default Edit_profile_Modal;
