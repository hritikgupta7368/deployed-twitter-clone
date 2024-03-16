"use client"
import Image from "next/image"
const Register = ({setModalVisible ,setregisterModalVisible}) => {
    
  return (
 
  <main className="w-full h-full p-4 ">
    <div className="p-5 font-extrabold">
      <div className="w-full h-14 ">
        <Image src = "/download.svg" height={56} width = {55}  />
      </div>
      <p className="w-full h-[104px] text-5xl my-10 " >Happening now</p>
      <p className="w-full h-7 text-3xl mb-5 " >Join today</p>
    </div>
    <div className="w-full ">
    <button className='border-[1px] border-gray-500 rounded-full text-black bg-white font-semibold hover:opacity-75 duration-150 h-10 w-full max-w-[328px]'>Sign up with google</button>
    <div className="text-gray-600 w-full h-7 flex flex-row py-1 ">
      <div className="w-1/2">---------------------</div>
      <p className="w-3">or</p>
      <div className="w-1/2">---------------------</div>
    </div>
    <button onClick = {() => (setregisterModalVisible(true))} className='w-full blue_button h-10'>Create account</button>
    <div className="mt-10 h-[84px] ">
      <p className="h-10 font-extrabold">Already have an account ?</p>
      <div className="w-full  h-10"><button onClick={() => (setModalVisible(true))} className=" blue_button bg-black border-[1px] border-gray-500 text-Button h-10 w-full">Sign in</button></div>
    </div>
    </div>
  </main>
  )
}

export default Register
