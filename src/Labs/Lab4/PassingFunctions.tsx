export default function PassingFunctions({
  theFunction,
}: {
  theFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button onClick={theFunction} id="wd-passing-function-click">
        Click Me!
      </button>
      <hr />
    </div>
  );
}
