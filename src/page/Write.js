import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Write = (fn) => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  function pageChage() {
    nav("/");
  }
  function writeFn(e) {
    e.preventDefault();
    let { name, value } = e.target;
    setData(`${name}: ${value}`);
  }
  console.log(data);
  return (
    <div>
      <form>
        <p>
          <input
            onChange={writeFn}
            type="text"
            name="id"
            placeholder="아이디"
          ></input>
        </p>
        <p>
          <button onClick={writeFn}>저장</button>
        </p>
      </form>
      <button onClick={pageChage}>리스트</button>
    </div>
  );
};

export default Write;
