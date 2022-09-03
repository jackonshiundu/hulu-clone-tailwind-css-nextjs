import requests from "../utils/requests"
import { useRouter } from "next/router"
const Nav = () => {
    const router=useRouter()
  return (
    <nav className="relative">
        <div className="flex px-10 text-2xl whitespace-nowrap space-x-10  sm:space-x-20 overflow-x-scroll scrollbar-hide">
           {
               Object.entries(requests).map(([key,{gener,url,title}])=>(
                <h2 key={key} 
                onClick={()=>router.push(`/?gener=${gener}`) }
                className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
               ))
           }  
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"/>
    </nav>
  )
}

export default Nav