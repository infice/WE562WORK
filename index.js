import React from "react";
import ReactDOM from "react-dom/client"; /* 2 อันนี้จำเป็น */

const rootElemtnt =
  document.getElementById(
    "root"
  ); /* const คือ ค่าคงที่ ค่าที่กำหนดค่านี้ค่าเดียวเท่านั้น | let ประกาศตัวแปร สามารถเอาค่าอื่นมาแทนได้ */
const root = ReactDOM.createRoot(rootElemtnt); /* ประกาศว่าอะไรเป็น root */
root.render(<h1>Hello World</h1>);
