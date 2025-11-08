import { useState } from "react";

export default function DateStateVariable() {
  const [date, setDate] = useState(new Date());

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variable</h2>
      <p>{date.toDateString()}</p>
      <input
        type="date"
        value={date.toISOString().split("T")[0]}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
      <hr />
    </div>
  );
}
