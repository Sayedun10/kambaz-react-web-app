import { useLocation } from "react-router-dom";

export default function TOC() {
  return (
    <ul>
      <li>
        <a href="#/Labs">Home</a>
      </li>
      <li>
        <a href="#/Labs/Lab1">Lab 1</a>
      </li>
      <li>
        <a href="#/Labs/Lab2">Lab 2</a>
      </li>
      <li>
        <a href="#/Labs/Lab3">Lab 3</a>
      </li>
      <li>
        <a href="#/">Kambaz</a>
      </li>
      <li>
        <a href="https://github.com/Sayedun10" id="wd-github">My GitHub</a>
      </li>
    </ul>
  );
}