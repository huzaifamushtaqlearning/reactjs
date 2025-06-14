   // What are Conditional Values in JSX?
// Conditional Values ka matlab hota hai React component ke andar koi value ya HTML tab render karwana jab koi shart (condition) true ho.

// Jaise:

// User login hua to dashboard dikhana

// Admin role hai to admin panel show karna

// Cart khali hai to "No Items" dikhana

// React mein hum JSX ke andar JavaScript expressions {} ke through conditions handle karte hain.

// 🧠 JSX mein Conditional Rendering ke 5 Powerful Tareeqay:

// Ternary Operator (? :) – Most Common
//
// const isLoggedIn = true;

// return (
//   <div>
//     {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
//   </div>
// );


// ✅ Topic: Conditional Values in JSX - Full Guide by Huzaifa Mushtaq

// import React, { useState, useEffect } from "react";

// // 🔰 Sample User Object
// const user = {
//   name: "Huzaifa",
//   role: "admin", // Try: 'user' or 'guest'
// };

// const ConditionalRendering = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [cart, setCart] = useState([]);

//   // 🔁 1. Ternary Operator
//   const renderLoginStatus = isLoggedIn ? (
//     <p>✅ Welcome back!</p>
//   ) : (
//     <p>🔐 Please log in.</p>
//   );

//   // 🔁 2. Logical AND Operator
//   const renderAdminNote = user.role === "admin" && (
//     <p>🛡️ You have admin access.</p>
//   );

//   // 🔁 3. if-else (outside JSX)
//   let greeting;
//   if (isLoggedIn) {
//     greeting = "👋 Hello, " + user.name;
//   } else {
//     greeting = "🙅 Please login first.";
//   }

//   // 🔁 4. IIFE — Multiple conditions
//   const renderRoleBasedView = (() => {
//     if (user.role === "admin") return <p>⚙️ Admin Panel</p>;
//     if (user.role === "user") return <p>👤 User Dashboard</p>;
//     return <p>👀 Guest View</p>;
//   })();

//   // 🔁 5. Cart Conditional Rendering (ternary + map)
//   const renderCart = cart.length === 0 ? (
//     <p>🛒 Your cart is empty.</p>
//   ) : (
//     <ul>
//       {cart.map((item, i) => (
//         <li key={i}>{item}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
//       <h2>🔄 Conditional Rendering in JSX</h2>
//       <hr />

//       {/* Ternary Operator */}
//       {renderLoginStatus}

//       {/* Logical AND */}
//       {renderAdminNote}

//       {/* if-else greeting */}
//       <p>{greeting}</p>

//       {/* IIFE rendering */}
//       {renderRoleBasedView}

//       {/* Cart rendering */}
//       <h3>🧺 Cart Items</h3>
//       {renderCart}
//     </div>
//   );
// };

// export default ConditionalRendering;

///

// Conditionalvalue.jsx ik or example hai jo conditional rendering ko dikhata hai. Isme humne ek variable "age" define kiya hai aur uske basis par "watch" variable ki value set ki gayi hai. Agar age 19 ya usse zyada hai, to "watch" ki value "available" hogi, warna "not available".
// Ye ek simple example hai jo dikhata hai ke kaise hum conditional rendering kar sakte hain React mein.

// export function Conditionalvalue() {
//     let age = 20;
//   let watch ="not available"
// if(age>=19){
//     watch="available"
// }
//   return (
//     <div>{watch}</div>
//   )
// }

// ///


// export function Ternery() {
//     let age = 20;
//   return (
//     <div>
//         <p>{age>=18?"watch now":"not available"}</p>
//     </div>
//   )
// }


// export function Function() {
//     let age = 15;
//     const watchnow = () => {
//             if(age>=18){
//                 return "watch now"
//             }else{
//                 return "not available"
//             }
//         }

//   return (
//     <div>
//         <p>{watchnow()}</p>
//     </div>
//   )
// }

// if also used in this type


import React from 'react';

function Conditionalvalue() {
  let age = 18;
  let watch = 'not available';

  if (age >= 18) {
    watch = 'available';
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        className={`px-6 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300 ${
          watch === 'available' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
        }`}
      >
        {watch}
      </button>
    </div>
  );
}

export default Conditionalvalue;


//ap && oprator ka use karke bhi conditional rendering kar sakte hain. Ye operator tab use hota hai jab aapko sirf ek condition check karni ho aur agar wo true ho to kuch render karna ho. Agar condition false ho to kuch nahi hoga.
