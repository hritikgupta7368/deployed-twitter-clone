import { Header , Navbar_side } from "@/app/components/header/header"
import CardSection from "@/app/components/container/cardsection"

const TestPage = () => {
  
  return (
   <main className="md:ml-[275px] relative h-full w-full overflow-y-auto">
    <Navbar_side />
    <Header />
    <CardSection />
   </main>
  )
}

export default TestPage
