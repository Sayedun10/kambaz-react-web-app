import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { add } from "./addReducer";

export default function AddRedux() {
  const [addValue, setAddValue] = useState(0);
  const { sum } = useSelector((state: RootState) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-add-redux">
      <h3>Add Redux</h3>
      <h4>Sum: {sum}</h4>
      <input
        type="number"
        value={addValue}
        onChange={(e) => setAddValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(add(addValue))} id="wd-add-redux-click">
        Add
      </button>
      <hr />
    </div>
  );
}
