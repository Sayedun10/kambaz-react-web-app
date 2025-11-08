export default function PassingDataOnEvent() {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <div id="wd-passing-data-on-event">
      <h2>Passing Data on Event</h2>
      <button
        onClick={() => handleClick("Hello World!")}
        id="wd-pass-data-click"
      >
        Pass Data
      </button>
      <hr />
    </div>
  );
}
