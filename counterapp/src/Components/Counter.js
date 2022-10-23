import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import
{AddCounterAction,MinusCounterAction} from "../store/Action/Action"
const Counter = () => {
    // const [counter , setCounter]= useState(0)


    const dispatch = useDispatch();
    const selector = useSelector((state)=>state.counterReducer);



    const addCounter = ()=>{
        // setCounter(counter +1)
        dispatch(AddCounterAction());
    }

    const minusCounter = ()=>{
        // setCounter(counter-1)
        dispatch(MinusCounterAction())
    }
  return (
    <div className='container'>

        <div className='main'>
        <h1>Counter App</h1>
            <h1>{selector.counterReducer}</h1>
            
            <div className='button'>
        <button onClick={addCounter} value="+" >+</button>
        <button onClick={minusCounter} value="-" >-</button>
        </div>

        </div>
    </div>
  )
}

export default Counter