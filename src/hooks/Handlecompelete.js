import Todob from "../components/Todob"
import { useState } from "react"


function Handlecomplete (props){
    const [status,setStatus] = useState(true)
if(status){
    setStatus("compeleted")
}else{
    setStatus("pending")
}
return  <td ><button className="bg-green-500 p-1 text-white rounded font-bold" >{status}</button></td>
}

export default Handlecomplete