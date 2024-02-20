import Link from "next/link"

const FollowRecommend_Card = () => {
    const testdata = [
        {
            label: '',
            userid : '',
        },
        {
            label: '',
            userid : '',
        },
        {
            label: '',
            userid : '',
        },
        {
            label: '',
            userid : '',
        },
    ]
  return (
    <div className='bg-cardsbg w-full h-full  rounded-xl flex flex-col justify-evenly'>
       <h1 className="mt-3 pl-5 text-2xl font-bold ">Who to follow</h1>
       <section className="w-full">
        {testdata.map((link, index) => (
          <div key={link.id} className="hover:bg-[#4c4d4f] duration-100 pl-5 text-gray-500 text-[13px]">
            <div className="h-10 ">
              
              <div className="text-white font-bold text-lg">{link.label}</div>
             
            </div>
          </div>
        ))}
      </section>
      <Link className = "pl-5 h-12 hover:bg-[#4c4d4f] rounded-b-xl text-Button" href=''>Show more</Link>
    </div>
  )
}

export default FollowRecommend_Card
