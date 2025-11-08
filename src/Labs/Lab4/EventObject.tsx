import React, { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState<React.MouseEvent | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setEvent(e);
  };

  return (
    <div id="wd-event-object">
      <h2>Event Object</h2>
      <button onClick={handleClick} id="wd-trigger-event-click">
        Display Event Object
      </button>
      {event && (
        <div>
          <h4>Event Details:</h4>
          <p>clientX: {event.clientX}</p>
          <p>clientY: {event.clientY}</p>
          <p>screenX: {event.screenX}</p>
          <p>screenY: {event.screenY}</p>
          <p>button: {event.button}</p>
        </div>
      )}
      <hr />
    </div>
  );
}
