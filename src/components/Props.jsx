// ✅ Topic: Props in JSX - Full Guide by Huzaifa Mushtaq

import React from "react";

// 🔰 Parent Component
const ParentComponent = () => {
  const user = {
    name: "Huzaifa Mushtaq",
    age: 20,
    profession: "Software Engineer",
  };

  // Passing props to the child component
  return (
    <div>
      <h2>👨‍💻 Parent Component</h2>
      <ChildComponent user={user} />
    </div>
  );
};

// 🔰 Child Component: Receives props from Parent
const ChildComponent = (props) => {
  // Destructuring props for easier usage
  const { name, age, profession } = props.user;

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", marginTop: "10px" }}>
      <h3>👤 Child Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
};

export default ParentComponent;
// What are Props?
// Props ek object hota hai jo data pass karne ke liye use hota hai — from parent component to child component.

// 🔹 How to Use Props:
// Parent component props ko child component ke through pass karta hai. Yeh props kisi bhi data ko child component tak laate hain, jaise variables, functions, objects, etc.

// 🔹 Destructuring Props:
// Destructuring se hum props ko asani se access kar sakte hain. Jaise { name, age, profession } = props.user mein, hum props ke andar se directly values ko extract kar rahe hain.

// 💬 Explanation (Roman Urdu):
// Parent se Child tak data bhejna:

// Parent component mein hum user object banate hain, jo kuch values rakhta hai (like name, age, profession).

// Fir hum us user ko child component ko prop ke through bhejte hain.

// Props ka Use:

// Child component mein jo props aaye hain unko hum destructure kar ke asani se access karte hain.

// Agar user object mein changes hotay hain to woh child component ko automatically update milta hai.

// 📦 Output:
// Parent Component user ke information ko child component mein pass karega.

// Child Component woh data render karega, jo props se milta hai.

// 📂 File Summary:
// Parent Component: Data define kar ke child ko pass karega.

// Child Component: Props ko receive karega aur display karega.