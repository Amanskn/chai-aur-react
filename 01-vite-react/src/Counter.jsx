import {useState} from 'react'
function Counter(){
    console.log("Page loaded")
    const [counter,setCounter] =useState(0) 
    const increaseCounter=()=>{
        if(counter<=19){

            setCounter((counter)=>counter+1)
            setCounter((counter)=>counter+1)
            setCounter((counter)=>counter+1)
            setCounter((counter)=>counter+1)
            setCounter((counter)=>counter+1)
        }
    // counter+=1;
    // console.log(counter)
    }
    const decreaseCounter=()=>{
        if(counter>=1) {
             setCounter(counter-1)
        }
    }
    return(
        <>
        {counter}
        <br />
        {counter}
        <br />
        {counter}
        <br />
        <button onClick={increaseCounter}>Increase counter by 1 </button>
        <br />
        <br />
        <button onClick={decreaseCounter}>Decrease counter by 1</button>
        <br />
        {/* {counter} */}

        </>
    )
}
export {Counter}