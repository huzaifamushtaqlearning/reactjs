import React from 'react'

function ImportantQuestion() {
const student=[1]//agr arry na hota or null hota to bhi kuch nahi dikhata
  return (
    <div>
      <p>{!student.length &&"No student found"}</p>
      <p>No of Student :{student.length}</p>
      {/* <p>{student.length=0 &&"No student found"}</p>
      <p>No of Student :{student.length}</p> */}
       {/* <p>{boolon(!student.length) &&"No student found"}</p>
      <p>No of Student :{student.length}</p> */}
    </div>
  )
}

export default ImportantQuestion