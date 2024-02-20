import Image from "next/image"

const Banner = ({server}) => {
    
  return (
    <Image src = { server ? server : "" } height = {25} width={25} alt="Picture of the author" className={`${server ? "" : "bg-[#4c4d4f]"}`}/>
  )
}

export default Banner
