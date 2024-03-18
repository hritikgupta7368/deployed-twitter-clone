import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet"

const Navbar_side = () => {
    return (
      <SheetContent side = "left" className="w-[270px] md:hidden bg-black text-white border-none">
      navbar
    </SheetContent>
    )
  
  }
const Header =  () => {
    const HeaderTop = () => {
        return (
            <div className="header_top_container">
                    <Sheet >
                    <SheetTrigger asChild>
                    <button className="header_top_container_child1">
                    <Image
                        src=""
                        height={32}
                        width={32}
                        className="rounded-full"
                    />
                    </button>
                    </SheetTrigger>
                    <Navbar_side />
                    </Sheet>
               <div className="header_top_container_child2"><Image src = "/download.jpg" height={20} width={22} quality={100} className="w-full"/></div>
               <div className="header_top_container_child3"><Image src="/common/settings.svg" height={20} width={20} quality={10} /></div>
            </div>
        )
    }
  return (
    <div>
        <HeaderTop />
      <Tabs defaultValue="foryou" className="header">
        <TabsList className ="header_container">
            <TabsTrigger value="foryou" className = "header_trigger"><span className="header_trigger_child">For you</span></TabsTrigger>
            <TabsTrigger value="following" className = "header_trigger"><span className="header_trigger_child">Following</span></TabsTrigger>
        </TabsList>
        </Tabs>
    </div>
  )
}

export default Header
