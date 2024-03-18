import { Button } from "@/components/ui/button"
import { Dialog,DialogTrigger,} from "@/components/ui/dialog"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import RegisterModal from "./registermodal"
import LoginModal from "./loginmodal"

const Logo = () => {
    return (
        <div className="h-[55px] w-[55px] md:h-[664px] md:w-[515px] mb-10 md:m-0">
            <Image src = "/download.svg" height={56} width = {55}  className="h-full w-full max-h-[664px] max-w-[515px]" />
        </div>
    )
}
const Form = () => {
    return (
        <main className=" md:w-[60%] w-full h-full md:pt-20 md:px-16">
          
           <p className="text-5xl md:text-7xl font-bold pb-10">Happening now</p>
           <p className="text-3xl font-bold pb-5 md:text-4xl">Join today.</p>
           <div className="w-full md:max-w-[350px]">
           <Button variant="provider" className = "w-full rounded-full h-10" size = "lg">Sign in with Google</Button>
           <Button variant="provider" className = "w-full rounded-full h-10 " size = "lg">Sign in with Apple</Button>
           <Separator className = "my-4"/>
           <Dialog>
           <DialogTrigger asChild><Button variant="submit" className = "w-full rounded-full h-10 " size = "lg">Create account</Button></DialogTrigger>
            <RegisterModal />
            </Dialog>
           
           
            <Dialog>
            <LoginModal />
           <p className="text-slate-500 text-xs mb-14">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
           <p className="font-bold text-lg mb-3">Already have an account?</p>
           <DialogTrigger asChild><Button variant="submitForm" size = "lg" className = "w-full rounded-full h-10">Signin</Button></DialogTrigger>
           </Dialog>
           </div>
        </main>
    )
}
const page = () => {
    return (
        <main className="h-full w-full md:h-full md:flex md:flex-row px-9 md:p-0 pt-7 ">
            <Logo />
            <Form />
        </main>
    )
}

export default page
