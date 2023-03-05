import React, { useEffect, useState } from "react";

function Retreive() {
  const [searchInput, setSearchInput] = useState("");
  // var query;
  // const handleInput = (e) => {
  //   query = e.target.value;
  //   setSearchInput(query);
  //   console.log(query);

  //   const session_storage = JSON.parse(sessionStorage.getItem("data"));
  //   console.log(session_storage);

  //   console.log("retreive handle" + query);
  // };

  const handleRetreive = () => {
    console.log("clicked");
  };

  return (
    <div className="container_display">
      <h1>Retreive Data</h1>

      <div>
        <input
          type={"text"}
          // onChange={handleInput}
          value={searchInput}
          placeholder="Search Here..."
        />
        {/* <button onClick={handleInput}>Retreive</button> */}
        <button>Find</button>
      </div>

      {
        sessionStorage.getItem("data") < 1 ? (
          <h1>No data</h1>
        ) : (
          <div>
            <p id="name">Name : </p>
            <p>DOB : </p>
            <p>Aadhar : </p>
            <p>Mobile : </p>
            <p>Age : </p>
          </div>
        )

        // <div>{JSON.parse(sessionStorage.getItem("data"))}</div>
      }
    </div>
  );
}

export default Retreive;
