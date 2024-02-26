
import { Header ,Navbar_side } from "@/app/components/header/header";
import CardSection from "@/app/components/container/cardsection";
import Homeposts from "@/app/components/post/posts";


const Home = async () => {

  return (
    <main className="md:ml-[275px]  h-full w-full overflow-y-auto">
    <Navbar_side />
    <Header />
    <div className=" w-full h-full pt-[114px] md:pt-[54px]">
        <Homeposts />
    </div>
    <CardSection />
   </main>
  );
};

export default Home;
