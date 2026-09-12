function Favouritelist(props){
    const newlist=props.newlist;
    const setnewlist=props.setnewlist

    function handleDelete(id){
        var temdelete=newlist.filter(function(item){
            if(item.id===id){
                return false
            }
            else{
                return true
            }
        })
        setnewlist(temdelete)
    }

    return(<>
    {newlist.lenght!==0?
        newlist.map(function(item,index){
        return(<div className="bg-red-300 flex justify-center p-3 relative items-center">
            <li className="list-none p-3 font-medium text-xl absolute left-96">{index+1}.{item.name}</li>
            <button onClick={()=>{handleDelete(item.id)}} className="bg-red-600 border border-none rounded-lg px-3 ml-96 ">Remove</button>
        </div>)    
        
        }
        )
         :" "}
    </>)
}

export default Favouritelist