import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import "./globals.css"

const Footer = () => {
  
  return (
    <Tabs defaultValue="home" className="footer">
        <TabsList className ="footer_container">

        <TabsTrigger className = "footer_trigger" value="home">
            <Link href = "/home" className="footer_trigger_link">
                <div className="footer_trigger_child">
                    <Image src = "navbarMenu/home.svg"  height={26.5} width={26.5} />
                </div>  
            </Link>
        </TabsTrigger>
        <TabsTrigger className = "footer_trigger" value="explore">
            <Link href = "/explore" className="footer_trigger_link">
                <div className="footer_trigger_child">
                    <Image src = "navbarMenu/search.svg" height={26.5} width={26.5} />
                </div>  
            </Link>
        </TabsTrigger>
        <TabsTrigger className = "footer_trigger" value="grok">
            <Link href = "/grok" className="footer_trigger_link">
                <div className="footer_trigger_child">
                    <Image src = "navbarMenu/grok.svg" height={26.5} width={26.5} />
                </div>  
            </Link>
        </TabsTrigger>
        <TabsTrigger className = "footer_trigger" value="notifications">
            <Link href = "/notifications" className="footer_trigger_link">
                <div className="footer_trigger_child">
                    <Image src = "navbarMenu/notifications.svg" height={26.5} width={26.5} />
                </div>  
            </Link>
        </TabsTrigger>
        <TabsTrigger className = "footer_trigger" value="messages">
            <Link href = "/messages" className="footer_trigger_link">
                <div className="footer_trigger_child">
                    <Image src = "navbarMenu/messages.svg" height={26.5} width={26.5} />
                </div>  
            </Link>
        </TabsTrigger>
       

        </TabsList>
       
    </Tabs>
  )
}

export default Footer
