import { useEffect } from "react";

function Lost() {
  useEffect(()=>{document.title = '404 Not Found | Dispensar'})
  return(
    <div className="h-dvh w-full bg-[#5fdf85] flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="text-gray-900 mt-4">Page Not Found</p>
    </div>
  )
}

export default Lost;