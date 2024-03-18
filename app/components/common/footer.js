import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    function Option(){
        <Link href = {"/home"} className="w-1/5 h-full border-b-[2px] border-black">
              <div className="mt-[6px] mx-2 mb-2 p-2 flex flex-row justify-center items-center">
                <Image src = "navbarMenu/home.svg" height={26.5} width={26.5} />
              </div>
          </Link>
    }
  return (
    <Tabs defaultValue="home" className="md:hidden fixed bottom-0 block w-full">
        <TabsContent value="home">home</TabsContent>
        <TabsContent value="explore">explore</TabsContent>
        <TabsContent value="grok">grok</TabsContent>
        <TabsContent value="notifications">notifications</TabsContent>
        <TabsContent value="messages">messages</TabsContent>
        <TabsList className = "w-full  flex flex-row justify-between items-center">
        <TabsTrigger className = "h-[53.5px]" value="home"><Option href = "/home" src ="navbarMenu/home.svg" /></TabsTrigger>
        <TabsTrigger value="explore"><Option href = "/home" src ="navbarMenu/home.svg" /></TabsTrigger>
        <TabsTrigger value="grok"><Option href = "/home" src ="navbarMenu/home.svg" /></TabsTrigger>
        <TabsTrigger value="notifications"><Option href = "/home" src ="navbarMenu/home.svg" /></TabsTrigger>
        <TabsTrigger value="messages"><Option href = "/home" src ="navbarMenu/home.svg" /></TabsTrigger>
        </TabsList>
       
    </Tabs>
  )
}

export default Footer
