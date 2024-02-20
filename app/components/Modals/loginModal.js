"use client";
import { signIn,useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const LoginModal = ({ setModalVisible, setregisterModalVisible }) => {
  const router = useRouter();
  const session = useSession()
  const [error , setError] = useState();
  const handleChange = () => {
    setregisterModalVisible(true);
    setModalVisible(false);
  };

  useEffect(()=>{
    if(session?.status === 'authenticated'){
      router.replace("/home")
    }
  },[session,router])

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let userId = formData.get("userId");
    let password = formData.get("password");
    e.target.reset()
    const response = await signIn("credentials", {
      userId: userId,
      password: password,
      redirect: false,
    });
    
    if (response?.error) {
      setError(response.error);
      return
    }
    if(response.ok){
      router.replace("/home");
    }
   
  }
  return (
    <div className=" w-[600px] h-[670px]  bg-black rounded-xl ">
      {error && <p className="text-red">{error}</p>}
      <div className="pt-3  ml-3 flex flex-row justify-between w-[50%] ">
        <button
          className="font-mono text-xl"
          onClick={() => setModalVisible(false)}
        >
          X
        </button>
        <Image src="/download.jpg" height={40} width={40} alt="Picture of the author" />
      </div>
      <div className=" ml-[150px] w-[52%]   mt-5 ">
        <h1 className="text-4xl font-semibold mb-7">Sign in to X </h1>

        <div className="flex flex-col">
          <button className="provider">Sign in with Google</button>
          <button className="provider">Sign in with Github</button>
          <div className="border-t-[1px] border-gray-600  text-center mt-3 mx-3">
            Or
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative m-2">
            <input
              name="userId"
              type="text"
              id="username"
              className="peer input"
              required
            />
            <label className="label" >
              UserName
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

          <button className="submit">Submit</button>
        </form>
        <div className="text-center mt-3">
          Don't have an account?{" "}
          <button
            onClick={handleChange}
            className="inline hover:underline text-blue-400"
          >
            Sign-Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
