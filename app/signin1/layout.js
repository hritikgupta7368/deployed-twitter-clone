import "./globals.css";
import Image from "next/image";

export default function RootLayout() {
  return (
    <main className="main">
        <div className="body">
            <div className="md:w-[40%] sm:pl-7 md:h-full md:flex md:flex-row md:items-center">
                <Image src = "/download.jpg" height={100} width={100} quality={100} className="h-[50px] w-[50px] md:h-[80%] md:w-full"/>
            </div>
            <div  className="pl-10 md:w-[60%] md:h-full md:py-10 ">
                <div className="mt-10 text-5xl md:text-6xl font-bold">Happening Now</div>
                <div className=" text-2xl md:text-3xl font-bold">Join today</div>

                <div className="mt-10 md:w-[60%]  md:h-[85%] flex flex-col">
                <button className='provider_button'>Sign up with google</button>
                <button className='provider_button'>Sign up with github</button>
                <button  className='submit_button provider_button'>Create account</button>
                <div> <p className='mt-10 text-sm text-gray-500 w-[300px]'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p></div>
                <p className="mt-2 text-center pr-10">Already have an account?</p>
               <button className=" mt-3 provider_button bg-black text-white">Sign in</button>
                </div>

            </div>
        </div>
        <footer className="footer">footer</footer>
    </main>
  );
}
