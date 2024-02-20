"use client";
import { useState } from "react";
import { useModal } from "@/app/providers/contextprovider";
import Image from "next/image";

const PremiumModal = () => {
  const [plan, setPlan] = useState("left");
  const {handleModal} = useModal();
  

  return (
    <div className=" bg-black w-[600px] h-[550px] absolute rounded-3xl left-[295px] top-[110px] text-white z-10">
      <button
        onClick={() => {handleModal('premium')}}
        className="absolute left-3 top-3"
      >
        <Image src="/cross.svg" height={25} width={25} alt="Picture of the author" />
      </button>

      <div className="flex flex-col items-center mt-28">
        <h1 className="heading">Who are you ?</h1>
        <h1 className="subheading">Choose the right subscription for you:</h1>
        <div className="flex flex-row mt-10 gap-5">
          <button
            onClick={() => {
              setPlan("left");
            }}
            className={`premium_box ${plan === "left" ? "outline outline-2 outline-blue-600" : ""}`}
          >
            <h1 className="gray_body_text">Premium</h1>
            <h1 className="white_bold_text">I am an individual</h1>
            <h1 className="gray_body_text">For individuals and creators</h1>
          </button>
          <button
            onClick={() => {
              setPlan("right");
            }}
            className={`premium_box  ${plan === "right" ? "outline outline-2 outline-blue-600" : ""}`}
          >
            <h1 className="gray_body_text">Premium</h1>
            <h1 className="white_bold_text">I am an organization</h1>
            <h1 className="gray_body_text">For businessess,government</h1>
          </button>
        </div>
        <button className="white_button">Subscribe</button>
        <div className="mt-3  ">
          Learn more about <span className="link">Premium</span> and{" "}
          <span className="link">Verified Organizations</span>
        </div>
        {<button className="text-white">{blur}</button>}
      </div>
    </div>
  );
};

export default PremiumModal;
