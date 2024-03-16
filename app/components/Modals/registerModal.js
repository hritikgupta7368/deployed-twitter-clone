"use client"
import Useridrecommend from "@/app/services/algo/useridrecommend";
import { Input1,SubmitForm,DateInput} from "@/app/services/input/input";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";


function Step1({ setStep, setFormData , finalData }) {
  const [secondaryCredentials, setsecondaryCredentials] = useState("email");
  const [error , setError] = useState({message : "" , state : false})

  function handleSecondaryInputChange() {
    setsecondaryCredentials(
      secondaryCredentials === "email" ? "phone" : "email"
    );
  }
  const Form = ({secondaryCredentials}) => {
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
        <div className="w-full relative mb-8">
        <button type="button" onClick={handleSecondaryInputChange} className=" absolute right-2 font-medium text-sm text-Button ">
              {secondaryCredentials === "email"? "Use phone instead" : "Use email instead"}
        </button>
        </div>
      )
    }
    function Date(){
      return (
        <div className="h-[170px]">
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
    return (
      <>
       <Input1 type="text" label="Name" name="name" validation = {validateName} error = {error}/>
       {secondaryCredentials === "email" ? <Input1 type="email" label="Email" name="email" validation = {validateEmail} error = {error} setError = {setError}/> :<Input1 type="text" label="Phone" name="phone" validation = {validateEmail} error = {error}/>}
        <Switch />
        <Date />
      </>
    )
  }

  const handleSubmit1 = async (e) => {
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

      if (
        name &&
        email &&
        dob &&
        responseData.message === "success unique email"
      ) {
        setFormData({
          ...finalData,
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

        // if (!response.ok || responseData.error) {
        //   throw new Error(responseData.error);
        // }

        if (responseData.message === "sent") {
          setStep(2);
        }
       
      }
    } catch (error) {
      console.log(error);
    }
  
  };
  
  return (
    <div className="h-full w-full bg-black">
      <form onSubmit={handleSubmit1}>
        <div className="px-8">
          <p className=" h-[72px] py-5 text-3xl font-bold ">
            Create your account
          </p>
         <Form secondaryCredentials = {secondaryCredentials}/>
        </div>
        {/* next button */}
       
          <SubmitForm disabled={false}/>
       
      </form>
    </div>
  );
}

function Step2({ setStep ,finalData}) {
  const handleSubmit2 = async (e) => {
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
        setStep(3);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };
  const Form = () => {
   
    function validatecode(input) {
      const regex = /^\d{6}$/;
      return regex.test(input);
    }
    return (
       <Input1 type="text" label="Verification code" name="code" validation = {validatecode} />
    )
  }
  return (
    <div className="h-full w-full bg-black">
      <form onSubmit={handleSubmit2}>
        <div className="px-8">
          <p className=" h-[72px] py-5 text-3xl font-bold ">
            We sent you a code
          </p>
          <span>Enter it below to verify</span>
          <p>{finalData?.EMAIL || "temporary38637@gmail.com"}</p>
         <div className="mt-5">
          <Form />
          </div>
        </div>
          <SubmitForm disabled={false}/>
      </form>
    </div>
  );
}

function Step3({ setStep , setFormData , finalData}) {

  function handleSubmit3(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    if(password && password.length > 0){
      setFormData({
        ...finalData,
        PASSWORD: password,
      });
      setStep(4)
    }
  }
  const Form = () => {
   
    function validatepassword(input) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
      return regex.test(input);
    }
    return (
       <Input1 type="text" label="Password" name="password" validation = {validatepassword} />
    )
  }
  return (
    <div className="h-full w-full bg-black">
    <form onSubmit={handleSubmit3}>
      <div className="px-8">
        <p className=" h-[72px] py-5 text-3xl font-bold text-wrap">
          You'll need a password
        </p>
        <p className="mt-8">Make sure it’s 8 characters or more.</p>
       <div className="mt-5">
        <Form />
        </div>
      </div>
        <SubmitForm disabled={false}/>
    </form>
  </div>
  );
}



function Step4({ setFormData , finalData , handleLogin}) {
  const [error , setError] = useState(false)
 
 

  useEffect(() => {
      const timeout = setTimeout(() => {
        setError(false);
      }, 3000);
      return () => clearTimeout(timeout);
   
  }, [error]);

  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    var userid = formData.get("userid");
    userid = "@"+ userid

    if(!userid && userid.length <= 0){
      throw new Error("Please enter userid")
    }
    setFormData({
      ...finalData,
      USERID:userid
    });
   
      try{
        if(finalData.NAME.length <= 0 || finalData.EMAIL.length <= 0 || finalData.DOB.length <= 0 || finalData.PASSWORD.length <= 0 || finalData.USERID.length <= 0){
          return 
        }
        const response = await fetch(`/api/register`, {
          method: "POST",
          body: JSON.stringify({
            NAME: finalData.NAME,
            EMAIL: finalData.EMAIL,
            DOB: finalData.DOB,
            PASSWORD: finalData.PASSWORD,
            USERID: finalData.USERID,
            step: "final"
          }),
        });
        const responseData = await response.json();
        
        if (!response.ok || responseData.error) {
          throw new Error(responseData.error);
        }
        if (responseData.message === "user created successfully") {
          handleLogin()
        }
        
      }
      catch(e){
        setError(true)
        console.error(e)
      }
    }
  
  const Form = () => {
   
    function validatecode(input) {
      const regex = /^[a-zA-Z0-9_]{3,20}$/;
      return regex.test(input);
    }
    return (
       <Input1 type="text" label="User Id" name="userid" validation = {validatecode} />
    )
  }
  return (
    <div className="h-full w-full bg-black">
      <form onSubmit={handleSubmit}>
        <div className="px-8">
          <p className=" h-[72px] py-5 text-3xl font-bold ">
           Choose your userId
          </p>
    
         <div className="mt-5">
          <Form />
          </div>
          <Useridrecommend username = {finalData?.NAME} />
        </div>
          <SubmitForm disabled={false}/>
      </form>
    </div>
  )

}



const RegisterModal = ({ setregisterModalVisible ,setModalVisible}) => {
  // const [step, setStep] = useState(() => {
  //   // if (typeof window !== 'undefined') {
  //   // const savedStep = localStorage.getItem("step");
  //   // return savedStep ? parseInt(savedStep, 10) : 1;
  //   // }
  //   return 1
  // });
  const [step, setStep] = useState(1)
  const [finalData, setFormData] = useState({
    NAME: "",
    EMAIL: "",
    DOB: "",
    PASSWORD: "",
    USERID: "",
  });

  

  const handleButtonClick = () => {
    setregisterModalVisible(false);
   
    setFormData({
      NAME: "",
      EMAIL: "",
      DOB: "",
      PASSWORD: "",
      USERID: "",
    });
  };
  const handleLogin = () => {
    setModalVisible(true)
    setregisterModalVisible(false);
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
      {step === 3 && <Step3 setStep={setStep} finalData = {finalData} setFormData={setFormData}/>}
      {step === 4 && <Step4  finalData = {finalData} setFormData={setFormData} handleLogin = {handleLogin}/>}
    </main>
  );
};

export default RegisterModal;
