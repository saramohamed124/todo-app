import { useState,useRef } from "react";
import Handledelete from "../hooks/Handledelete";
import Handlecomplete from "../hooks/Handlecompelete";

function Todob(){
  console.log()
   const [value,setValue] = useState([])
 const inputRef = useRef()
    const handlevalue = () => {
      const text = inputRef.current.value;
      setValue([...value,text])
      inputRef.current.value = " ";
    }
   
  
    return(
    <>
    <div className="w-fit sm:col-span-4 flex flex-col justify-center items-center text-center m-auto p-3 px-12 bg-white rounded shadow-xl" style={{marginTop:'-60px'}}>
          <div className="mt-2">
            <div className="flex  shadow-sm  ring-inset ring-gray-300 sm:max-w-md border-0 border-b-2 transition-all ease-in-out duration-200 focus-within:border-purple-500">
              <input
                type="text"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-700 focus:ring-0 sm:text-sm sm:leading-6 outline-none md:w-96 p-2"
                placeholder="What would you like to do?" ref={inputRef} />
            </div>

          </div>
          <button className="mt-5 block m-auto bg-red-400 px-12 py-2 rounded text-white shadow-lg" onClick={handlevalue}>Add</button>
        </div>
            <div className="mt-6 w-fit flex flex-col justify-center items-center text-center m-auto bg-white rounded shadow-xl py-5">
    <h1 className="p-4 font-bold">To do List</h1>

    <table className="table-fixed  flex flex-col justify-between gap-3 items-center">
  <thead>
    <tr className="bg-gray-300 flex justify-between items-center gap-11 py-4 px-12">
      <td>List</td>
      <td>Status</td>
      <td>Close</td>
    </tr>
  </thead>
  <tbody className="pt-3" id="par">
    {
    value.map((e,index)=>{
 return(
  <tr key={index} className="flex justify-between gap-11 items-center" id="list">
 <td className="" >{e}</td>
 {/* <Handlecomplete key={e.id} /> */}
 <td ><button className="bg-green-500 p-1 text-white rounded font-bold" onClick={(e)=>{e = "compeleted"}}>pending</button></td>
 
{/* <td onClick={(el)=>{el.value = "pending"}}>pend</td> */}
<Handledelete key = {e.id} e={value} st={setValue}/>
  </tr>
 )})
}

  </tbody>
</table>
        </div>
        </>
    )
}
export default Todob;