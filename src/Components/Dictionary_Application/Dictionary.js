import React, { useState } from "react";
import Header from "./Header";
import TableRow from "./Table";
import Retrieve from "./Retreive";

function Dictionary() {
  const [show, toggleShow] = useState(false);
  // const handleRetreivePageToggle = () => {
  //   console.log("hii saba");

  // };
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <button className="top_btns" onClick={() => toggleShow(!show)}>
          Add New Person
        </button>

        <button className="top_btns" onClick={() => toggleShow(!show)}>
          Retrieve Information
        </button>
        {show ? <Retrieve /> : <TableRow />}
      </div>
      <section>
        {/* <div>
          <h4>Add New Person</h4>
        </div> */}
        {/* <TableRow /> */}
      </section>
    </>
  );
}

export default Dictionary;
