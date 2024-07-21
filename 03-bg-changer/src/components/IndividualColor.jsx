import React,{useState} from 'react'

function IndividualColor({bgColor,textColor}) {
  console.log("Component is rendered")
  const [num,setNum]=useState(8);
  const bgChanger=(bgColor)=>{
    console.log("bgChanger called")
    // Directly access the body element
  const bodyElement = document.body;

  // Change the background color
  bodyElement.style.backgroundColor = bgColor;

  }
  return (
    <div className='individual' style={{backgroundColor:bgColor,color:textColor}} onClick={()=>bgChanger(bgColor)}>{bgColor}</div>
  )
}

export default IndividualColor