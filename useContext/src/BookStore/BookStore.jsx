import React, { createContext, useState } from 'react'
import BookRow from './BookRow'

export const BookNum = createContext();
const BookStore = () => {
  const [Bookno,setBookno] = useState(1);
  
  return (
    <BookNum.Provider value={{Bookno,setBookno}}>
    <BookRow/>
    </BookNum.Provider>
  )
}

export default BookStore