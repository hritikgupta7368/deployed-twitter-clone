"use client";
import LoginModal from "../components/Modals/loginModal";
import "../globals.css";
import { useState } from "react";
import Register from "./signin/page";
import RegisterModal from "../components/Modals/registerModal";
import SessionProvider from '../providers/provider'
import Image from "next/image";

export default function RootLayout() {
  const [loginmodalVisible, setModalVisible] = useState(false);
  const [registermodalVisible, setregisterModalVisible] = useState(true);
  
  return (
    <html lang="en">
      <body className="bg-black relative">
      <SessionProvider>
        {!registermodalVisible && loginmodalVisible && (
          <div className=" absolute w-full h-full bg-slate-700/55">
            <div className="absolute left-[320px] top-14">
              <LoginModal
                setregisterModalVisible={setregisterModalVisible}
                setModalVisible={setModalVisible}
              />
            </div>
          </div>
        )}
        
        {registermodalVisible && !loginmodalVisible && (
          <div className=" absolute w-full h-full bg-slate-700/55">
            <div className="absolute left-[320px] top-10">
              <RegisterModal
                setModalVisible={setModalVisible}
                setregisterModalVisible={setregisterModalVisible}
              />
            </div>
          </div>
        )}
        <section className="flex flex-row pt-8">
          <div className="h-[650px] w-[650px]">
           
            <Image
      src="/download.jpg"
      width={650}
      height={650}
      alt="Picture of the author"
    />
          </div>
          <div>
            <Register
              setregisterModalVisible={setregisterModalVisible}
              setModalVisible={setModalVisible}
            />
          </div>
        </section>
        </SessionProvider> 
      </body>
    </html>
  );
}