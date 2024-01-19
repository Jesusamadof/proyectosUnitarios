/*
import { useState } from "react"

useState
function Error({mensaje}) {
  return (
    <div className=" bg-red-800 uppercase mb-3 text-center rounded text-white">
        <p>{mensaje}</p>
        
    </div>
          
    )
}

export default Error
*/
//prop children
import { useState } from "react"

useState
function Error({children}) {
  return (
    <div className=" bg-red-800 uppercase mb-3 text-center rounded text-white">
        <p>{children}</p>
        
    </div>
          
    )
}

export default Error
