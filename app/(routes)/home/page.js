import { Navbar_side } from "@/app/components/header/header";
import Header from "@/app/components/common/header";
import CardSection from "@/app/components/container/cardsection";
import Homeposts from "@/app/components/post/posts";
import Footer from "@/app/components/common/footer";

const Home = async () => {

  return (
    <main className=" bg-black  h-full w-full overflow-y-auto ">
   
    <Header />
    <div className=" w-full h-full pt-[114px] md:pt-[54px]">
        {/* <Homeposts /> */}
    </div>
    <Footer />
   </main>
  );
};

export default Home;
