// import React, { useState } from "react";
// import { useDrag, useDrop } from "react-dnd";

// const ItemType = "CARD";

// const Card = ({ id, age, onAgeChange }) => {
//   const [, dragRef] = useDrag({
//     type: ItemType,
//     item: { id, age },
//   });

//   const [, dropRef] = useDrop({
//     accept: ItemType,
//     drop: (item) => {
//       onAgeChange(item.id, age);
//     },
//   });

//   return (
//     <div ref={(node) => dragRef(dropRef(node))}>
//       <p>ID: {id}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// };

// const CustomComponent = () => {
//   const [cards, setCards] = useState([
//     { id: 1, age: 25 },
//     { id: 2, age: 30 },
//   ]);

//   const handleAgeChange = (id, newAge) => {
//     const updatedCards = cards.map((card) =>
//       card.id === id ? { ...card, age: newAge } : card
//     );

//     setCards(updatedCards);
//   };

//   return (
//     <div>
//       {cards.map((card) => (
//         <Card
//           key={card.id}
//           id={card.id}
//           age={card.age}
//           onAgeChange={handleAgeChange}
//         />
//       ))}
//     </div>
//   );
// };

// export default CustomComponent;
