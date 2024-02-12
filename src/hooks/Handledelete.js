function Handledelete (props){
    console.log(props);
    const handledelete = (index) =>{
        const todos = [...props.e];
        todos.splice(index,1)
        props.st(todos)
    }
    return <td ><button className="bg-red-500 p-1 px-2 rounded shadow-xl text-white font-bold" onClick={()=> handledelete(props.e.index)} >X</button></td>

}
export default Handledelete;