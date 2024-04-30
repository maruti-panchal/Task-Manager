import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState(["html", "css", "js"]);
  const [check, setCheck] = useState(null);

  return (
    <ul>
      {data.map((ele) => (
        <>
          <input
            id={ele}
            value={ele}
            type="checkbox"
            checked={check === ele}
            onChange={(e) => setCheck(e.target.checked ? e.target.value : null)}
          ></input>
          <label htmlFor={ele}>{ele}</label>
          {check === ele && (
            <>
              {" "}
              <button>Edit</button>
              <button>Delete</button>
            </>
          )}
          <br />
        </>
      ))}
    </ul>
  );
};

export default Test;
