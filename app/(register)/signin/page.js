"use client"

const Register = ({setModalVisible ,setregisterModalVisible}) => {
    
  return (
   <main>
    <div className=' mr-2 '>
    <h1 className='text-6xl font-bold'>Happening now</h1>
    <h1 className='text-3xl font-bold'>Join today.</h1>
    <div className='flex flex-col gap-3 px-40'>
    <button className='border-[1px] border-gray-500 rounded-full text-white font-semibold hover:opacity-75 duration-150 h-10'>Sign up with google</button>
    <button className='border-[1px] border-gray-500 rounded-full text-white font-semibold hover:opacity-75 duration-150 h-10'>Sign up with Apple</button>
    <button onClick = {() => (setregisterModalVisible(true))} className='blue_button h-10'>Create account</button>
    </div>
    <p className='text-sm'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
    <p>Already have an account?</p>
    <div className="flex flex-row justify-center h-10"><button onClick={() => (setModalVisible(true))} className=" blue_button h-10 w-60">Sign in</button></div>
    </div>
   </main>
  )
}

export default Register
