import Image from "next/image";
const Search = ({ size }) => {


  return (
    <div className="w-full h-11 rounded-full flex flex-row relative bg-cardsbg focus:outline focus:outline-2 focus:outline-Button">
      <div className=" absolute h-full w-[20%] left-3 top-3"><Image src = "/search_white.svg" width={20} height={20} alt="Picture of the author"/> </div>
      <input
        className="ml-[50px] bg-cardsbg h-full w-[75%] outline-none"
        type="text"
        placeholder=" Search "
      />
      <button
      className=" h-[90%]  rounded-r-full"
      
      ></button>
    </div>
  );
};

export default Search;
