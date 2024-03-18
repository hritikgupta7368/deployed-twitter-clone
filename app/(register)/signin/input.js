"use client"
import { useState } from "react"
import "../globals.css"


const Input1 = ({
    type,
    name,
    label,
    validation,
    error,
    disabled,
    value

}) => {
    const [Input, setInput] = useState({ value: "", error: false });

    
    function handleChange(e) {
        const input = e.target.value;
        setInput({ value: input, error: !validation(input) })
    }

    return (
       <label className="parent ">
            <input  disabled = {disabled} name={name} type={type} className={`${disabled? " bg-gray-800 opacity-50":""} peer input ${Input.error=== true ? " focus:outline-red-500":" "}`} value={value? value : Input.value} required onChange={handleChange}/>
            <label className={` ${disabled? " bg-gray-800 opacity-50":""} ${value || Input.value.length > 0 ? `label1 ${Input.error === true ? "text-red-500 ":""}`:"label"}`}>{label}</label>
            <span className= "error">
                {Input.error === true && name === 'email' && "Please input valid email"}
                {Input.error === true && name === 'name' && "Please input valid name"}
                {Input.error === true && name === 'password' && "Please input valid password"}
                {Input.error === true &&name === 'userid' && "Please input valid userid"}
            </span>
            <span className=" text-sm text-red-500 absolute left-1 top-[70px]">{Input.error === false && error?.state === true && name === 'email' && error?.message}</span>
       </label>
      );
}

const DateInput = ({ type,
    name,
    label,}) => {
    const [date , setdate] = useState('')

   function handleChange(e){
    const dateObj = new Date(e.target.value);
    const dateString = dateObj.toISOString().split('T')[0];
    setdate(dateString);
   }

    return (
      <div className=" w-full py-3 min-w-[300px] max-w-[450px] text-gray-600 ">
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

 const SubmitForm = ({disabled}) => {
    return (
      <div className="absolute bottom-0 w-full h-[100px] px-8 py-6">
        <button type="submit" disabled = {disabled} className={` ${disabled === true ? "opacity-70":""} bg-white text-black h-full w-full rounded-full font-bold`}>
        Next
      </button>
      </div>
    )
}

export {Input1,DateInput,SubmitForm}
