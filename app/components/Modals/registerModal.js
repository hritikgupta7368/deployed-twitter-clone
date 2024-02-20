
import { useState } from "react";
import Image from "next/image";
const RegisterModal = ({ setregisterModalVisible, setModalVisible }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [step, setStep] = useState(1);
  const [loading ,setLoading] = useState(false);
  const [localformData, setLocalFormData] = useState({
    email: '',
    name: '',
    password: '',
  });


  const handleChange = () => {
    setModalVisible(true);
    setregisterModalVisible(false);
  };
  try {
    const handleSubmit1 = async (e) => {
      try {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let name =  formData.get("name")
        let email= formData.get("email")
        let password = formData.get("password")
        const response = await fetch(`/api/register`, {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            step: "1"
            
          }),
        });
        const responseData = await response.json();

        if (!response.ok) {
          setLoading(false)
          throw new Error(
            responseData.error || "server error kindly try again"
          );
        }
        if (responseData.message === "success proceed to step 2") {
          setSuccess("next step");
          
          setTimeout(() => {
            setStep(2)
            setLocalFormData({...formData,email,name,password});
            setLoading(false)
            setSuccess(null)
          }, 3000);
          
        }
      } catch (error) {
        setError(error.message);
      }
    };
    const handleSubmit2 = async(e) => {
      try {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let userId = formData.get('userId');

        const response = await fetch(`/api/register`, {
          method: "POST",
          body: JSON.stringify({
            name: localformData.name,
            email: localformData.email,
            password: localformData.password,
            userId :userId,
            step: "2"
            
          }),
        });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(
            responseData.error || "server error kindly try again"
          );
        }
        if (responseData.message === "user created successfully"){
          setTimeout(() => {
           
           handleChange()
            setLoading(false)
            setSuccess(null)
          }, 3000);
        }
      }
      catch(error){
        setError(error.message);
      }
    }
    return (
      <main className="relative w-[600px] h-[740px]  bg-black rounded-xl">
        <div className="flex flex-col items-center mt-2 ">
          <Image src="/download.jpg" height={60} width={60} alt="Picture of the author" />
          <h1 className="text-3xl font-bold ">Create a new account</h1>
          {error && <p className="text-red-500 font-mono text-sm">{error}</p>}
          {success && <p className=" font-mono">{success}</p>}
         
          {loading && <p>Loading ....</p>}
          {step === 1 && <form onSubmit={handleSubmit1}>
            <div className="relative m-2">
              <input
                name="name"
                type="text"
                id="name"
                required
                className="peer input"
              />
              <label className="label" >
                Name
              </label>
            </div>
            <div className="relative m-2">
              <input
                name="email"
                type="text"
                id="email"
                required
                className="peer input"
              />
              <label className="label" >
                Email
              </label>
            </div>
            <div className="relative m-2">
              <input
                name="password"
                type="password"
                id="password"
                className="peer input"
                required
              />
              <label className="label" >
                Password
              </label>
            </div>
            
            <button
              type="submit"
              className="submit mt-2 ml-[75px] font-semibold  w-40 h-10"
            >
              Next
            </button>
          </form>}

          {step === 2 && (
          <form onSubmit={handleSubmit2}>
            <div className="relative m-2">
              <input
                name="userId"
                type="text"
                id="userId"
                className="peer input"
                required
              />
              <label className="label" for="userId">
                choose userId
              </label>
            </div>
            <button
              type="submit"
              className="submit mt-2 ml-[75px] font-semibold w-40 h-10"
            >
              Create Account
            </button>
          </form>
        )}




          <div className="border-t-2 border-gray-400 w-[50%] text-center mt-3">
            Or
          </div>
          <div className="flex flex-col">
            <button className="provider" disabled>Sign up with Google</button>
            <button className="provider" disabled>Sign up with Github</button>
          </div>
          <div className="mt-3">
            Having an account already ?{" "}
            <button
              onClick={handleChange}
              className="inline hover:underline text-blue-400"
            >
              Log in
            </button>
          </div>
        </div>
        <button
          className="absolute top-3 left-4 w-5 font-bold text-xl hover:bg-slate-800 duration-150"
          onClick={() => setregisterModalVisible(false)}
        >
          X
        </button>
      </main>
    );
  } catch (error) {
    console.log(error);
  }
};

export default RegisterModal;
