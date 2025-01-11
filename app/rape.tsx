"use client"
import React, { useState } from 'react'
import { countcontaxt } from './contaxt'

const Rapedata = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [val , setVal] = useState([])
  return (
    <>
    <countcontaxt.Provider value={{val , setVal}}>
      {children}
    </countcontaxt.Provider>
    </>
  )
}

export default Rapedata