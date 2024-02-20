
import Image from "next/image"
const UserLogo = ({logo}) => {
  return (
    <div className="w-[40px] h-[40px]">
          <Image src={logo} height={40} width={40} alt="Picture of the author" className="hover:opacity-60 duration-200 rounded-full" />
    </div>
  )
}

export default UserLogo
