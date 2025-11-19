import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div>
      <div className='mt-5 border rounded-xl flex w-full mx-auto my-auto gap-9 bg-[#222052] text-white justify-center items-center h-16'>
        <div>About Me</div>
        <div>Tech Stack</div>
        <div>Logo</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default Navbar
