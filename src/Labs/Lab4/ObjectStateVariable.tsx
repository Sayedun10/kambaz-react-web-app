import { useState } from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        value={person.firstName}
        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
      />
      <input
        value={person.lastName}
        onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
      />
      <hr />
    </div>
  );
}
