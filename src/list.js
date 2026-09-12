import { useContext } from "react";
import {lists} from "./App.js"


function Listitem(props) {
    const studentlist=useContext(lists)
    //const [, setisfavoriteid] = useState()
    
    const setnewlist=props.setnewlist
    const newlist=props.newlist

   

    function handleAdd(addid) {
       // setisfavoriteid(addid)
        setnewlist([...newlist,addid])
        
    }

    return (<>
        {
            studentlist.map(function (item) {
                return (<div className='flex justify-center relative p-4 items-center'>
                    <li className='p-3 list-none absolute left-96'>{item.id}.{item.name}</li>

                    <button disabled={newlist.some(function(isfavoriteid){ return  isfavoriteid.id === item.id} )} className={newlist.some(function(isfavoriteid){ return  isfavoriteid.id === item.id} )? 'p-1 text-lg font-medium rounded-lg border-none text-white bg-orange-400 ml-96':
                        'p-1 text-lg font-medium rounded-lg border-none text-white bg-black ml-96'
                    } onClick={() => { handleAdd(item) }} >{newlist.some(function(isfavoriteid){ return  isfavoriteid.id === item.id} )?"Added to Favourite":"Add to Favourite"}</button>
                </div>)
            })
        }
    </>)
}

export default Listitem
