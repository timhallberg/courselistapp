import React, { useState } from "react";
import data from "../mock-data.json";

const List = () => {
  const [contacts] = useState(data);
 
    <table>
      <thead>
        <th>Name</th>
        <th>Credit</th>
        <th>Year</th>
        <th>Short Description</th>
        <th>Course Code</th>
      </thead>

      <tbody>
        {contacts.map((contact) => (
          <tr key="{i}" >
            <td>{contact.name}</td>
            <td>{contact.credit}</td>
            <td>{contact.year}</td>
            <td>{contact.shortDescription}</td>
            <td>{contact.courseCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ;
};

export default List;

//   const courseArray = [
//     {
//       name: "Tim Hallberg",
//       credit: "30",
//       shortDescription: "Snygg kille",
//       courseCode: "ABC123",
//       year: "2008",
//     },
//     {
//       name: "Felicia",
//       credit: "29",
//       shortDescription: "Snygg tjej",
//       courseCode: "123ABC",
//       year: "2022",
//     },
//   ];
