"use client"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import Search from "../common/search"
import { Trending_Card } from "../cards/happening_card"
import Premium_Card from "../cards/premium_card"

const CardSection = () => {
  const path = usePathname()
  const session = useSession()
  return (
  <div className='absolute hidden md:block w-[40.3%] h-full right-0 top-0 bg-red-300 px-2'>
    {path === '/home' &&
    <div className="w-full">s
      <div className="fixed">
        <Search />
      </div>
      {session?.user?.accountType === "basic" && <Premium_Card />}
      <Trending_Card />
    </div>
    }
  </div>
  )
}

export default CardSection
