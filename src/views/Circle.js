import React, { useEffect, useState } from 'react'
import HeaderComp from '../components/HeaderComp'
import FooterComp from '../components/FooterComp'

function Circle() {
  const [areaCircle,setAreaCircle] = useState(0)
  const [area,setArea] = useState(0)

  useEffect(()=>{
    cal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[area])

  const getValue = (v) =>{
    v.target.value === '' ? setArea(0) :  setArea(v.target.value)
  }

  const cal = (v) => {
    setAreaCircle( (Math.PI* (parseFloat(area) * parseFloat(area)) ).toFixed(2) )
  }




  return (
    <div style={{textAlign:'center'}}>
    <HeaderComp/>
    <h3>คำนวณพื้นที่วงกลม</h3>
    ป้อนรัศมี : <input onChange={getValue} type='number'/>
    <br/><br/>
    <button onClick={cal}>คำนวณพื้นที่วงกลม</button>
    <br/><br/>
    พื้นที่วงกลม : {areaCircle}
    <FooterComp/>
    </div>
  )
}

export default Circle