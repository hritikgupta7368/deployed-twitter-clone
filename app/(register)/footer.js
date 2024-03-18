import React from 'react'

const Footer = () => {
  const links = ["About", "X app" , "Help Center" , "Terms of Service" , "Privacy Policy" , "Cookie Policy","Accessibility "]
  return (
    <div className='md:h-[72px] md:max-w-full w-full bg-black mt-5 md:mt-0 flex flex-row justify-between text-wrap '>
      {
        links.map(link => (
          <span className='text-slate-500 hover:underline text-wrap '>{link}</span>
        ))
      }
    </div>
  )
}

export default Footer
