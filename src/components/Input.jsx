import { useRef } from "react";
import { useCallback } from "react";
import Handlecomplete from "../hooks/Handlecompelete";

function Input (){
   const inputRef = useRef()

   const handlevalue = () => {
    const text = inputRef.current;
    // setValue([...value,text])
    console.log(text)
    // inputRef.current= "fdls";
  }
  handlevalue()
    return(
        <div className="w-fit sm:col-span-4 flex flex-col justify-center items-center text-center m-auto p-3 px-12 bg-white rounded shadow-xl" style={{marginTop:'-60px'}}>
        <div className="mt-2">
        <div className="flex  shadow-sm  ring-inset ring-gray-300 sm:max-w-md border-0 border-b-2 transition-all ease-in-out duration-200 focus-within:border-purple-500">
          <input
            type="text"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-700 focus:ring-0 sm:text-sm sm:leading-6 outline-none md:w-96 p-2"
            placeholder="What would you like to do?" ref={inputRef} />
        </div>
      </div>
          <button className="mt-5 block m-auto bg-red-400 px-12 py-2 rounded text-white shadow-lg" onClick={useCallback(Handlecomplete)}>Add</button>
        </div>
        
    )
}
export default Input;