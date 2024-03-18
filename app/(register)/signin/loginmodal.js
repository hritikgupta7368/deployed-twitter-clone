"use client"
import { useState , useMemo } from "react"
import {DialogContent,} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {Input1,DateInput,SubmitForm} from "./input"
import Image from "next/image"
import "../globals.css"
import { Separator } from "@/components/ui/separator"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const LoginModal = () => {
    const [error , setError] = useState({message : "" , state : false})
    const [step , setStep] = useState(1)
    const [FORMDATA, setFormData] = useState({
      PRIMARY : "",
      PASSWORD: "",
  
    });
    const SavedStep = useMemo(() => step, [step]);
    const router  = useRouter()

    const handleStepChange = (newStep) => {
      setStep(newStep);
    };
   
    const validate = (input) => {
        const regex = /^(?:@[A-Za-z0-9_]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)$/;
        return regex.test(input);
      }
    
     function Step1(){
      async function handleChange(e){
        try{
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const primary = formData.get("primary");

          if(primary.length <=0 ){
            throw new Error("please enter details")
          }
          const response = await fetch(`/api/login`, {
            method: "POST",
            body: JSON.stringify({
              primary : primary,
              step: "1",
            }),
          });
          const responseData = await response.json();

          if (!response.ok || responseData.error) {
            setError({message : "no user exists" , state : true})
            throw new Error(responseData.error);
          }
          if(responseData.user === "success"){
            setFormData({
              ...FORMDATA,
              PRIMARY : primary
            });
           
              handleStepChange(2)
         
           
          }
        }
        catch(error){
          console.log(error)
          setError({message : error , state : true})
        }
      }
      return (
        <div className='mt-12 px-2 md:px-28 '>
        <p className="text-3xl md:text-3xl font-bold mb-8 ">Sign in to X</p>
        <Button variant="provider" className = "w-full rounded-full h-10 my-4" size = "lg">Sign in with Google</Button>
        <Button variant="provider" className = "w-full rounded-full h-10 my-4" size = "lg">Sign in with Apple</Button>
        <Separator className = "my-4"/>
        <form onSubmit={handleChange}>
        <Input1 type="text" label="Email, or Username" name="primary" validation = {validate} error = {error} />
        <Button variant="provider" className = "w-full rounded-full h-10 my-6" size = "lg">Next</Button>
        <Button className = "w-full rounded-full h-10 my-6 text-white text-base" variant="submitForm" size = "lg">Forgot Password?</Button>
        <p className="text-slate-500  inline">Don't have an account?</p>
        <Button type = "submit" variant = "default" className = "bg-black inline text-[#38bdf8] pl-1 py-0">Sign up</Button>
        </form>
        </div>
      )
     }
     function Step2(){
      async function handleSubmit(e){
        try{
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const password = formData.get("password");
          if(password.length <=0 ){
            throw new Error("please enter password")
          }

          const response = await fetch(`/api/login`, {
            method: "POST",
            body: JSON.stringify({
              primary : FORMDATA.PRIMARY,
              password : password,
              step: "2",
            }),
          });

          const responseData = await response.json();

          if (!response.ok || responseData.error) {
            setError({message : responseData.error, state : true})
            throw new Error(responseData.error);
          }
          if(responseData.user === "success"){
            setFormData({
              ...FORMDATA,
              PASSWORD : password
            });
           if(FORMDATA.PASSWORD.length > 0 && FORMDATA.PRIMARY.length > 0){
            const response = await signIn("credentials", {
              Primary: FORMDATA.PRIMARY,
              Password: FORMDATA.PASSWORD,
              redirect: false,
            });
            console.log(response);
            if (response?.error) {
                throw new Error(response?.error)
            }
            if (response.ok) {
              router.replace("/home");
            }
           }
          }

        } catch(error){
          console.log(error)
        }

      }
      const validatationDummy = (input) => {
        return true
      }
      return (
        <div className="px-2 md:px-16 mt-5">
         <p className="text-3xl md:text-3xl font-bold mb-8 ">Enter your password</p>
         <form onSubmit={handleSubmit}>
         <Input1 disabled = {true} type="text" label="Email, or Username" name="name" value = {FORMDATA?.PRIMARY} error = {error} />
         <Input1 type="text" label="Password" name="password" validation = {validatationDummy} error = {error} />
         <footer className="fixed bottom-6 left-0 px-10 md:px-24 w-full h-[100px] py-4"><Button type = "submit" className = "h-[80%] rounded-full bg-white text-black" variant="submitForm" size = "lg">Log in</Button></footer>
         </form>
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

      
     
    </DialogContent>
  )
}

export default LoginModal
