"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const LoginModal = ({ setModalVisible, setregisterModalVisible }) => {
  const router = useRouter();
  const session = useSession();
  const [step, setStep] = useState(1);
  const [error, setError] = useState();
  const handleChange = () => {
    setregisterModalVisible(true);
    setModalVisible(false);
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
    <main className="bg-black h-full w-full md:w-[600px] md:h-[648px] md:rounded-xl md:fixed md:right-32">
      {/* header */}
      <header className="h-[53px] flex flex-row  px-4 bg-black bg-green-200 ">
        <div className="w-[145px] md:w-[270px] flex flex-row justify-start  ">
        <button className="" onClick={() => setModalVisible(false)}>
          <Image src="/cross.svg" height={20} width={20} />
        </button>
        </div>
       
        <div className="bg-yellow-300">
          <Image
            src="/download.svg"
            height={100}
            width={100}
            className="h-full w-10"
          />
        </div>
      </header>

      {/* formbody */}
      {step === 1 && (
        <div className="h-full w-full bg-black md:rounded-t-xl">
          <form>
            <div className=" bg-red-300">
              <div>
                <p className=" h-[72px] py-5 text-3xl font-bold ">
                  signin to X
                </p>
              </div>
            </div>
          </form>
        </div>
      )}
      {step === 2 && <div>step 2 enter password</div>}
    </main>
  );
};

export default LoginModal;
