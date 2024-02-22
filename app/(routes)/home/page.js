import { getServerSession } from "next-auth";
import { Navbar_side } from "@/app/components/header/header";
import { Header } from "@/app/components/header/header";
import CardSection from "@/app/components/container/cardsection";
const Home = async () => {
 
 
  return (
    <main className="md:ml-[275px]  h-full w-full overflow-y-auto">
    <Navbar_side />
    <Header />
    <CardSection />
   </main>
  );
};

export default Home;
