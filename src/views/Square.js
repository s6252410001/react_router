import React, { useEffect, useState } from 'react'
import HeaderComp from '../components/HeaderComp'
import FooterComp from '../components/FooterComp'

function Square() {
  const [aA,setaA] = useState(0)
  const [aB,setaB] = useState(0)
  const [resultArea,setResultArea] = useState(0)

  useEffect(()=>{
    cal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[aA,aB])


  const setA = (v) =>{
    v.target.value === '' ? setaA(0) :  setaA(v.target.value)
  }

  const setB = (v) =>{
    v.target.value === '' ? setaB(0) :  setaB(v.target.value)
  }
  

  const cal = (v) => {
    setResultArea( (aA*aB).toFixed(2))
  }
  return (
    <div style={{textAlign:'center'}}>
    <HeaderComp/>
    <h3>คำนวณหาพื้นที่สี่เหลี่ยม</h3>
    ป้อนกว้าง : <input onChange={setA} type='number'/>
    <br/><br/>
    ป้อนยาว : <input onChange={setB} type='number'/>
    <br/><br/>

    <button onClick={cal}>คำนวณพื้นที่สี่เหลี่ยม</button>
    <br/><br/>
    พื้นที่สี่เหลี่ยม : {resultArea}
    <FooterComp/>
    </div>
  )
}

export default Square