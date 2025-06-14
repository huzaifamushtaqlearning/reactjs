// dynamic values woh hoti hain jo run-time pe change hoti hain — like:

// Variables

// Expressions

// Functions

// Conditional values

// Arrays/Objects content

// API Data

// Aur JSX ke andar {} curly braces use karke hum JavaScript ki values inject kar sakte hain.
// const name = "Huzaifa";
// return <h1>Welcome, {name}!</h1>;  // Output: Welcome, Huzaifa!
// Notes:
// JSX mein {} ke andar koi bhi JavaScript expression likh sakte ho, statements nahi (e.g., if-else nahi chalega, use ternary).
//lakin function call kr shakty ho,{fuctionname()} }
// console.log() JSX mein direct nahi likh sakte.

// Always provide key props when rendering list dynamically.


/// aslo call function in dynamic value

import React from 'react'

function Dynamic() {
const lakh=()=>{
 let  huzaifa="lakhwera"

  return huzaifa;

}
  return (
    <div>
    lakhwera:{lakh()}
    </div>
  )
}

export default Dynamic



