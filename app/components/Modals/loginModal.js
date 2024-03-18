"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input1,SubmitForm} from "@/app/(test)/testpage/input";


function Step1(){
  const [error , setError] = useState({message : "" , state : false})

  function validateField(){
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{1,7}$/;
  }
return (
  <div className="h-full w-full bg-black">
      <form>
        <div className="px-8">
          <p className=" h-[72px] py-5 text-3xl font-semibold my-5 ">
          Sign in to X
          </p>
         <button type = "button" className="my-2 w-full bg-white text-black h-9 font-bold rounded-full">Sign in with google</button>
          <Input1 type="text" label="Email, or username" name="field" validation = {validateField} error = {error}/>
          <button type="submit" className="my-2 w-full bg-white text-black h-9 font-bold rounded-full">Next</button>
          <p>Don't have an account? <button className="text-Button inline my-3">Sign up</button></p>
        </div>
      
       
          
       
      </form>
    </div>
)
}
function Step2(){
  
}

const LoginModal = ({ setModalVisible, setregisterModalVisible }) => {
  const router = useRouter();
  const session = useSession();
  const handleChange = () => {
    setregisterModalVisible(true);
    setModalVisible(false);
  };
  const [step, setStep] = useState(1)
  const [finalData, setFormData] = useState({
    EMAIL: "",
    PASSWORD: "",
    USERID: "",
  });

  const handleButtonClick = () => {
    setregisterModalVisible(false);
   
    setFormData({
      EMAIL: "",
      PASSWORD: "",
      USERID: "",
    });
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/home");
    }
  }, [session, router]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let userId = formData.get("userId");
    let password = formData.get("password");
    e.target.reset();
    const response = await signIn("credentials", {
      userId: userId,
      password: password,
      redirect: false,
    });

    if (response?.error) {
      setError(response.error);
      return;
    }
    if (response.ok) {
      router.replace("/home");
    }
    async function handleSubmit1() {}
  }
  return (
    <main className="bg-black h-full w-full">
    <header className="h-[53px] flex flex-row justify-start px-4 bg-black">
      <button className="w-[145px]" onClick={handleButtonClick}>
        <Image src="/cross.svg" height={20} width={20} />
      </button>
      <div>
        <Image
          src="/download.svg"
          height={100}
          width={100}
          className="h-full w-10"
        />
      </div>
    </header>

    {/* formbody */}
    {step === 1 && <Step1 setStep={setStep} finalData = {finalData} setFormData={setFormData} />}
    {step === 2 && <Step2 setStep={setStep} finalData = {finalData} setFormData={setFormData}/>}
   
  </main>
  );
};

export default LoginModal;
