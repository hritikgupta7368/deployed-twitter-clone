"use client"
import { useState ,useMemo} from "react"
import {DialogContent} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {Input1,DateInput,SubmitForm} from "./input"
import Image from "next/image"
import "../globals.css"

const RegisterModal = () => {
  const [secondaryCredentials, setsecondaryCredentials] = useState("email");
  const [error , setError] = useState({message : "" , state : false})
  const [step , setStep] = useState(1)
  const [FORMDATA, setFormData] = useState({
    NAME: "",
    EMAIL: "",
    DOB: "",
    PASSWORD: "",
    USERID: "",
  });

  const SavedStep = useMemo(() => step, [step]);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };
  function handleSecondaryInputChange() {
    setsecondaryCredentials(
      secondaryCredentials === "email" ? "phone" : "email"
    );
  }

    function Step1(){
      
        const validateName = (input) => {
          const regex = /.{1,}/;
          return regex.test(input);
        }
        function validateEmail(input) {
          const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{1,7}$/;
          return regex.test(input);
        }
        function Switch(){
          return (
            <div className="w-full h-5  relative  ">
            <button type="button" onClick={handleSecondaryInputChange} className=" absolute right-8 font-medium text-sm text-[#38bdf8] ">
                  {secondaryCredentials === "email"? "Use phone instead" : "Use email instead"}
            </button>
            </div>
          )
        }
        function Date(){
          return (
            <div className="h-[170px] mt-5 ">
            <p>Date of Birth</p>
            <div
              style={{ fontSize: 15, lineHeight: 1.2 }}
              className="text-gray-500"
            >
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </div>
            <DateInput
              type="date"
              label="Date of Birth"
              placeholder="dd/mm/yyyy"
              name="date"
            />
          </div>
          )
        }
        const handleSubmit = async (e) => {
          try {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name");
            const email = formData.get("email");
            const dob = formData.get("date");
      
            const response = await fetch(`/api/register`, {
              method: "POST",
              body: JSON.stringify({
                email: email,
                step: "1",
              }),
            });
      
            const responseData = await response.json();
            if (!response.ok || responseData.error) {
              setError({message : "email already exists" , state : true})
              throw new Error(responseData.error);
            }
      
            if ( name && email && dob && responseData.message === "success unique email") {
              setFormData({
                ...FORMDATA,
                NAME: name,
                EMAIL: email,
                DOB: dob,
              });
              const response = await fetch(`/api/verify`, {
                method: "POST",
                body: JSON.stringify({
                  action: "send",
                  email: email,
                }),
              });
              const responseData = await response.json();
              if (responseData.message === "sent") {
                handleStepChange(2)
              }
          }
        }
          catch(error){
            console.log(error)
            setError({message : error.message , state : true})
          }
        }
  
      
      return (
        <div className='mt-4 px-4 md:px-10'>
        <p className="text-2xl md:text-3xl font-bold mb-6">Create your account</p>
        <form onSubmit={handleSubmit}>
        <Input1 type="text" label="Name" name="name" validation = {validateName} error = {error}/>
        {secondaryCredentials === "email" ? <Input1 type="email" label="Email" name="email" validation = {validateEmail} error = {error} setError = {setError}/> :<Input1 type="text" label="Phone" name="phone" validation = {validateEmail} error = {error}/>}
        <Switch />
        <Date />
        <footer className="fixed bottom-0 left-0 px-10 md:px-24 w-full h-[100px] py-4"><Button type ="submit" className = "h-[80%] rounded-full bg-white text-black" variant="submitForm" size = "lg">Next</Button></footer>
        </form>
    </div>
      )

    }
    function Step2(){
      function validatecode(input) {
        const regex = /^\d{6}$/;
        return regex.test(input);
      }
      const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const CODE = formData.get("code");
    
          const response = await fetch(`/api/verify`, {
            method: "POST",
            body: JSON.stringify({
              action: "verify",
              code: CODE,
            }),
          });
          const responseData = await response.json();
    
          if (!response.ok || responseData.error) {
            throw new Error(responseData.error);
          }
          if (responseData.message === "code matched") {
            handleStepChange(3)
          }
          return;
        } catch (error) {
          console.log(error);
        }
      };
      return (
        <div className='mt-4 px-4 md:px-10'>
           <p className="text-2xl md:text-3xl font-bold ">We sent you a code</p>
           <p className="mb-6">Enter it below to verify</p>
           <form onSubmit={handleSubmit}>
           <Input1 type="text" label="Verification code" name="code" validation = {validatecode} />
           <footer className="fixed bottom-0 left-0 px-10 md:px-24 w-full h-[100px] py-4"><Button type ="submit" className = "h-[80%] rounded-full bg-white text-black" variant="submitForm" size = "lg">Next</Button></footer>
           </form>
        </div>
      )
    }
    function Step3(){
      function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get("password");
        if(password && password.length > 0){
          setFormData({
            ...FORMDATA,
            PASSWORD: password,
          });
          handleStepChange(4)
        }
      }
      function validatepassword(input) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        return regex.test(input);
      }
      return (
        <div className='mt-4 px-4 md:px-10'>
        <p className="text-2xl md:text-3xl font-bold ">You'll need a password</p>
        <p className="mb-6">Make sure it’s 8 characters or more.</p>
        <form onSubmit={handleSubmit}>
        <Input1 type="text" label="Password" name="password" validation = {validatepassword} />
        <footer className="fixed bottom-0 left-0 px-10 md:px-24 w-full h-[100px] py-4"><Button type ="submit" className = "h-[80%] rounded-full bg-white text-black" variant="submitForm" size = "lg">Next</Button></footer>
        </form>
     </div>
      )

    }
    function Step4(){
      async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        var userid = formData.get("userid");
        userid = "@"+ userid
    
        if(!userid && userid.length <= 0){
          throw new Error("Please enter userid")
        }
        setFormData({
          ...FORMDATA,
          USERID:userid
        });
       
          try{
            if(FORMDATA.NAME.length <= 0 || FORMDATA.EMAIL.length <= 0 || FORMDATA.DOB.length <= 0 || FORMDATA.PASSWORD.length <= 0 || FORMDATA.USERID.length <= 0){
              return 
            }
            const response = await fetch(`/api/register`, {
              method: "POST",
              body: JSON.stringify({
                NAME: FORMDATA.NAME,
                EMAIL: FORMDATA.EMAIL,
                DOB: FORMDATA.DOB,
                PASSWORD: FORMDATA.PASSWORD,
                USERID: FORMDATA.USERID,
                step: "final"
              }),
            });
            const responseData = await response.json();
            
            if (!response.ok || responseData.error) {
              throw new Error(responseData.error);
            }
            if (responseData.message === "user created successfully") {
             handleStepChange(5)
            }
            
          }
          catch(e){
            console.error(e)
          }
        }
        function validatecode(input) {
          const regex = /^[a-zA-Z0-9_]{3,20}$/;
          return regex.test(input);
        }
      return (
        <div className='mt-4 px-4 md:px-10'>
        <p className="text-2xl md:text-3xl font-bold ">Choose your userId</p>
        <p className="mb-6">Make sure it’s 8 characters or more.</p>
        <form onSubmit={handleSubmit}>
        <Input1 type="text" label="User Id" name="userid" validation = {validatecode} />
        <footer className="fixed bottom-0 left-0 px-10 md:px-24 w-full h-[100px] py-4"><Button type ="submit" className = "h-[80%] rounded-full bg-white text-black" variant="submitForm" size = "lg">Submit</Button></footer>
        </form>
     </div>
      )
      
    }
  function Step5(){
    return (
      <div className='mt-4 px-4 md:px-10'>
      <p className="text-2xl md:text-3xl font-bold ">Account successfully created</p>
      <p className="mb-6">close this window to sign  </p>
      </div>
    )
  }
      
    
  return (
    <DialogContent className="md:w-[600px] w-full h-full md:h-[90%] text-white bg-black border-none gap-0">
        <header className="h-[53px] flex flex-row justify-center">
          <Image
            src="/download.svg"
            height={100}
            width={100}
            className="h-full w-10"
            alt = {"logo"}
          />
        </header>
       
        {SavedStep === 1 && <Step1 />}
        {SavedStep === 2 && <Step2 />}
        {SavedStep === 3 && <Step3 />}
        {SavedStep === 4 && <Step4 />}
        {SavedStep === 5 && <Step5 />}

      
     
    </DialogContent>
  )
}

export default RegisterModal;
