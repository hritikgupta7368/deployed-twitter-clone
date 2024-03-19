import Header from "./components/header";
import CardSection from "@/app/components/container/cardsection";
import Homeposts from "@/app/components/post/posts";
import "./globals.css"
const Home = async () => {

  return (
    <main className=" bg-black  h-full w-full overflow-y-auto ">
    <Header />
    <div className=" w-full h-full pt-[114px] md:pt-[54px]">
        {/* <Homeposts /> */}
    </div>
   </main>
  );
};

export default Home;
