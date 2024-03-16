"use client";
import LoginModal from "../components/Modals/loginModal";
import "../globals.css";
import { useState } from "react";
import Register from "./signin/page";
import RegisterModal from "../components/Modals/registerModal";
import SessionProvider from "../providers/provider";
import { Providers } from "../providers/nextuiprovider";

export default function RootLayout() {
  const [loginmodalVisible, setModalVisible] = useState(false);
  const [registermodalVisible, setregisterModalVisible] = useState(true);

  return (
    <html lang="en">
      <body className="w-full h-full">
        <SessionProvider>
          <Providers>
            <main className="w-full h-full overflow-y-auto">
              <Register
                setregisterModalVisible={setregisterModalVisible}
                setModalVisible={setModalVisible}
              />
              <footer>footer</footer>
            </main>

            {registermodalVisible && !loginmodalVisible && (
              <div className=" fixed bg-slate-600/70 inset-0">
                <RegisterModal
                  setModalVisible={setModalVisible}
                  setregisterModalVisible={setregisterModalVisible}
                />
              </div>
            )}
            {!registermodalVisible && loginmodalVisible && (
              <div className=" fixed bg-slate-600/70 inset-0">
                <LoginModal
                  setregisterModalVisible={setregisterModalVisible}
                  setModalVisible={setModalVisible}
                />
              </div>
            )}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
