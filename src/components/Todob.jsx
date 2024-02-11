import { useState } from "react";

function Todob(){
    const [value,setValue] = useState()
    let [status,setStatus ] = useState(false)
    if(status){
        status = 'completed'
    }else{
        status = 'Pending'
    }

  const parent = <tr className="flex justify-between gap-11 items-center" id="list">
  <td>{value}</td>
  <td><button className="bg-green-500 p-1 text-white rounded font-bold"onClick={()=>{setStatus(true)}}>{status}</button></td>
  <td><button className="bg-red-500 p-1 px-2 rounded shadow-xl text-white font-bold" onClick={()=>{parent.remove()}} >X</button></td>
</tr>;
    
    return(
    <>
    <div className="w-fit sm:col-span-4 flex flex-col justify-center items-center text-center m-auto p-3 px-12 bg-white rounded shadow-xl" style={{marginTop:'-60px'}}>
          <div className="mt-2">
            <div className="flex  shadow-sm  ring-inset ring-gray-300 sm:max-w-md border-0 border-b-2 transition-all ease-in-out duration-200 focus-within:border-purple-500">
              <input
                type="text"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-700 focus:ring-0 sm:text-sm sm:leading-6 outline-none md:w-96 p-2"
                placeholder="What would you like to do?"onChange={(e)=>{setValue(e.target.value)}} />
            </div>
          </div>
          <button className="mt-5 block m-auto bg-red-400 px-12 py-2 rounded text-white shadow-lg" onClick={()=>{document.body.querySelector('.par').appendChild(parent)}}>Add</button>
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
    
  </tbody>
</table>
        </div>
        </>
    )
}
export default Todob;