import React from 'react'
import  './BGChanger.css'
import  IndividualColor from './IndividualColor'
function BGChanger() {
  return (
    <div id='temp'>
      <IndividualColor bgColor="Red" textColor = "White"/>
      <IndividualColor bgColor="Yellow"textColor = "black"/>
      <IndividualColor bgColor="Green"textColor/>
      <IndividualColor bgColor="Black"textColor="White"/>
      <IndividualColor bgColor="Orange"textColor/>
      <IndividualColor bgColor="Cyan"textColor/>
      </div>
  )
}
export default BGChanger