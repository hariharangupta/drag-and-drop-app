import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import Card from "react-bootstrap/Card";

const FormTable = () => {
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  console.log(formData);

  // const cardsData = [
  //   {
  //     name: "test",
  //     age: 12,
  //     email: "test@gamil.com",
  //   },
  //   {
  //     name: "test1",
  //     age: 23,
  //     email: "test1@gamil.com",
  //   },
  //   {
  //     name: "test2",
  //     age: 30,
  //     email: "test2@gamil.com",
  //   },
  //   {
  //     name: "test3",
  //     age: 46,
  //     email: "test3@gamil.com",
  //   },
  //   {
  //     name: "test4",
  //     age: 25,
  //     email: "test4@gamil.com",
  //   },
  // ];

  // const card1 =
  //   data?.length &&
  //   data.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         {item.age >= 1 && item.age <= 18 && (
  //           <Card style={{ width: "15rem", margin: "1rem" }}>
  //             <Card.Body>
  //               <div>
  //                 <p>Name: {item.name}</p>
  //                 <p>Age: {item.age}</p>
  //                 <p>Email: {item.email}</p>
  //               </div>
  //             </Card.Body>
  //           </Card>
  //         )}
  //       </div>
  //     );
  //   });
  // const card2 =
  //   data?.length &&
  //   data.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         {item.age >= 19 && item.age <= 25 && (
  //           <Card style={{ width: "15rem", margin: "1rem" }}>
  //             <Card.Body>
  //               <div>
  //                 <p>Name:{item.name}</p>
  //                 <p>Age: {item.age}</p>
  //                 <p>Email: {item.email}</p>
  //               </div>
  //             </Card.Body>
  //           </Card>
  //         )}
  //       </div>
  //     );
  //   });
  // const card3 =
  //   data?.length &&
  //   data.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         {item.age >= 26 && item.age <= 45 && (
  //           <Card style={{ width: "15rem", margin: "1rem" }}>
  //             <Card.Body>
  //               <div>
  //                 <p>Name:{item.name}</p>
  //                 <p>Age: {item.age}</p>
  //                 <p>Email: {item.email}</p>
  //               </div>
  //             </Card.Body>
  //           </Card>
  //         )}
  //       </div>
  //     );
  //   });
  // const card4 =
  //   data?.length &&
  //   data.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         {item.age >= 45 && (
  //           <Card style={{ width: "15rem", margin: "1rem" }}>
  //             <Card.Body>
  //               <div>
  //                 <p>Name:{item.name}</p>
  //                 <p>Age: {item.age}</p>
  //                 <p>Email: {item.email}</p>
  //               </div>
  //             </Card.Body>
  //           </Card>
  //         )}
  //       </div>
  //     );
  //   });

  const ageGroups = {
    group1: { min: 1, max: 18, header: "Age 1-18" },
    group2: { min: 19, max: 25, header: "Age 19-25" },
    group3: { min: 26, max: 45, header: "Age 26-45" },
    group4: { min: 46, max: Infinity, header: "Age 45+" },
  };

  const ItemType = "CARD";

  const dataCards = (group) => {
    return (
      formData?.length &&
      formData.map((item, index) => {
        if (item.age >= group.min && item.age <= group.max) {
          return (
            <CustomComponent
              key={index}
              id={item.id}
              name={item.name}
              age={item.age}
              email={item.email}
              setFormData={setFormData}
            />
          );
        }
        return null;
      })
    );
  };

  const CustomComponent = ({ id, name, age, email, setFormData }) => {
    const [, dragRef] = useDrag({
      type: ItemType,
      item: { id, name, age, email },
    });

    const handleAgeChange = (draggedId, newAge) => {
      const newCards = formData?.map((card) =>
        card?.id === draggedId ? { ...card, age: newAge } : card
      );
      setFormData(newCards);
    };

    const [, dropRef] = useDrop({
      accept: ItemType,
      drop: (item) => {
        handleAgeChange(item.id, age);
      },
    });

    return (
      <div ref={(node) => dragRef(dropRef(node))}>
        <Card style={{ width: "15rem", margin: "1rem" }}>
          <Card.Body>
            <div>
              <p>Name: {name}</p>
              <p>Age: {age}</p>
              <p>Email: {email}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "50rem",
        margin: "2rem auto",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {formData?.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Object.values(ageGroups).map((group, index) => (
            <div key={index}>
              <h2>{group.header}</h2>
              {dataCards(group)}
            </div>
          ))}
        </div>
      ) : (
        <h2>No records found</h2>
      )}
    </div>
  );
};

export default FormTable;
