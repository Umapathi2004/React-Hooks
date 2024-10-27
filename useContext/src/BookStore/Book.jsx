import React, { useContext } from 'react'
import {BookNum} from "./BookStore"
const Book = () => {
  const {Bookno,setBookno} = useContext(BookNum);
  console.log(Bookno)
  setBookno(3)
  return (
    <div>{`The Book number is ${Bookno}`}</div>
  )
}

export default Book