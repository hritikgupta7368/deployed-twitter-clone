"use client";
import { useState } from "react";


const Input = ({ type, label, placeholder ,name}) => {
  const [value, setValue] = useState("");

  if (label === "Name") {
    return (
      <div className=" w-full  py-3 min-w-[300px] text-gray-600 ">
        <div className="h-full w-full min-h-[58px] relative ">
          <label
            className={`z-10 absolute transition duration-75 ${
              value.length > 0
                ? "text-sm top-[2px] left-2 text-Button"
                : " text-lg translate-x-3 translate-y-4"
            }   `}
          >
            {label}
          </label>
          <input
            name={name}
            type={type}
            value={value}
            className="bg-black text-xl text-white h-full pt-2 w-full absolute bottom-0 px-2 border-[1px] border-slate-600 focus:border-none outline-2 focus:outline focus:outline-Button rounded-md"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  }
  if (label === "Email") {
    const [input, setInput] = useState({ value: "", error: false });

    function validateEmail(email) {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return regex.test(email);
    }

    const handleChange = (e) => {
      const email = e.target.value;
      setInput({ value: email, error: !validateEmail(email) });
    };

    return (
      <div className=" w-full py-3 min-w-[300px] text-gray-600 ">
        <div className="h-full w-full min-h-[58px] relative ">
          <label
            className={`z-10 absolute transition duration-75 ${
              input.value.length > 0
                ? "text-sm top-[2px] left-2 text-Button"
                : " text-lg translate-x-3 translate-y-4"
            } ${input.error && input.value.length > 0? 'text-red-500':''}`}
          >
            {label}
          </label>
          <input
            name={name}
            type={type}
            required
            value={input.value}
            onChange={handleChange}
            className={` bg-black text-xl text-white h-full pt-2 w-full absolute bottom-0 px-2 border-[1px] border-slate-600 rounded-md outline-none focus:border-2 focus:border-Button ${
              input.error && input.value.length > 0
                ? "  focus:border-red-500 border-red-500"
                : ""
            } `}
          />
        </div>
        <p
          className={` text-red-500 text-sm ${
            input.error && input.value.length > 0 ? " display:block" : "hidden"
          }`}
        >
          Please enter a valid email
        </p>
      </div>
    );
  }
  if (label === "Phone") {
    const [input, setInput] = useState({ value: "", error: false });

    function validatePhoneNumber(phoneNumber) {
      const regex = /^[6-9]\d{9}$/;
      return regex.test(phoneNumber);
    }

    const handleChange = (e) => {
      const phoneNumber = e.target.value;
      setInput({
        value: phoneNumber,
        error: !validatePhoneNumber(phoneNumber),
      });
    };

    return (
      <div className=" w-full py-3 min-w-[300px] text-gray-600 ">
        <div className="h-full w-full min-h-[58px] relative ">
          <label
            className={`z-10 absolute transition duration-75 ${
              input.value.length > 0
                ? "text-sm top-[2px] left-2 text-Button"
                : " text-lg translate-x-3 translate-y-4"
            }`}
          >
            {label}
          </label>
          <input
            name={name}
            type={type}
            value={input.value}
            required
            onChange={handleChange}
            className={` bg-black text-xl text-white h-full pt-2 w-full absolute bottom-0 px-2 border-[1px] border-slate-600 rounded-md outline-none focus:border-Button${
              input.error && input.value.length > 0
                ? " focus:border-red-500"
                : ""
            } `}
          />
        </div>
        <p
          className={` text-red-500 text-sm ${
            input.error && input.value.length > 0 ? " display:block" : "hidden"
          }`}
        >
          Please enter a valid phone no.
        </p>
      </div>
    );
  }
  if (label === "Date of Birth") {
   const [date , setdate] = useState('')

   function handleChange(e){
    const dateObj = new Date(e.target.value);
    const dateString = dateObj.toISOString().split('T')[0];
    setdate(dateString);
   }

    return (
      <div className=" w-full py-3 min-w-[300px] text-gray-600 ">
        <div className="h-full w-full min-h-[58px] relative ">
          <label
            className={`z-10 absolute transition duration-75 ${
              date.length > 0
                ? "text-sm top-[2px] left-2 text-Button"
                : " text-lg translate-x-3 translate-y-1"
            }`}
          >
            {label}
          </label>
          <input
            name={name}
            type={type}
            value={date}
            required
            onChange={handleChange}
            
            className={`text-white  bg-black text-lg  h-full pt-2 w-full absolute bottom-0 px-2 border-[1px] border-slate-600 rounded-md outline-none focus:border-Button`}
          />
        </div>
       
      </div>
    );
  }
};

export default Input;
