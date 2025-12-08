import React, { useState } from "react";

const HTTP_SERVER = import.meta.env.VITE_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        className="form-control mb-2"
        id="wd-query-parameter-a"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="form-control mb-2"
        id="wd-query-parameter-b"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a
        className="btn btn-primary me-2"
        id="wd-query-parameter-add"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger me-2"
        id="wd-query-parameter-subtract"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        className="btn btn-success me-2"
        id="wd-query-parameter-multiply"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        className="btn btn-warning"
        id="wd-query-parameter-divide"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}
