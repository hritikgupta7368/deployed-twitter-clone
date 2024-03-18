import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Header = () => {
  return (
    <div>
      <Tabs defaultValue="foryou" className="md:max-w-[600px]  w-full text-white bg-green-200">
        <TabsList>
        <TabsTrigger className = "md:hidden" value="navbarside">navbarside</TabsTrigger>
        <TabsTrigger value="foryou">For you</TabsTrigger>
        <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent value="foryou">Make changes to your account here.</TabsContent>
        <TabsContent value="following">Change your password here.</TabsContent>
        </Tabs>
    </div>
  )
}

export default Header
