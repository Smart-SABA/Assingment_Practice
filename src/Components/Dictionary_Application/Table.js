import React, { useState, useRef } from "react";
import Retreive from "./Retreive";
//child
function TableRow() {
  // Adding and Deleting the Rows in the Table
  const [rowList, setRowList] = useState([{ row: "" }]);
  const [user, setUser] = useState([
    { name: "", dob: "", aadhar: "", mob: "", age: "" },
  ]);

  // FOR SAVING THE DATA IN LOCAL STORAGE

  const name = useRef();
  const dob = useRef();
  const aadhar = useRef();
  const mob = useRef();
  const age = useRef();

  const data = [{ name: "", dob: "", aadhar: "", mob: "", age: "" }];

  // ADD ROW
  const handleRowAdd = () => {
    setRowList([...rowList, { row: "" }]);
    setUser([...user, { name: "", dob: "", aadhar: "", mob: "", age: "" }]);
  };

  //REMOVE ROW
  const handleRowRemove = (index) => {
    const list = [...rowList];
    list.splice(index, 1);
    setRowList(list);
  };

  // GET INPUT VALUE FOR THE COMPONENTS

  const saveInputValue = (e) => {
    e.preventDefault();
    const data = {
      Name: name.current.value,
      DOB: dob.current.value,
      Aadhar: aadhar.current.value,
      Mobile_no: mob.current.value,
      Age: age.current.value,
    };
    sessionStorage.setItem("data", JSON.stringify([data]));

    const local_storage = JSON.parse(sessionStorage.getItem("data"));

    if (local_storage === null) {
      console.log("if part");
      sessionStorage.setItem("data", JSON.stringify([data]));
    } else {
      console.log("else part");
      const update_Local_storage = [...local_storage, data];

      sessionStorage.setItem("data", JSON.stringify(update_Local_storage));
      setUser(update_Local_storage);
    }

    console.log(Object.entries(local_storage));
  };

  const dateAgeCalculate = () => {
    var today = new Date();
    var dob = new Date(document.getElementById("dob").value);
    var month =
      today.getMonth() -
      dob.getMonth() +
      12 * (today.getFullYear() - dob.getFullYear());
    document.getElementById("age").value = Math.round(month / 12);
  };

  return (
    <div className="data">
      <h2>Add New Person</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rowList.map((oneRow, index) => (
            <tr key={index}>
              <td>
                <input
                  ref={name}
                  type="text"
                  id="name"
                  defaultValue={oneRow.Name}
                  required
                />
              </td>
              <td>
                <input
                  ref={dob}
                  type="date"
                  id="dob"
                  defaultValue={oneRow.DOB}
                  onChange={dateAgeCalculate}
                />
              </td>
              <td>
                <input
                  ref={aadhar}
                  type="number"
                  id="aadhar"
                  defaultValue={oneRow.Aadhar}
                  maxLength={12}
                />
              </td>
              <td>
                <input
                  ref={mob}
                  type="number"
                  id="mob"
                  defaultValue={oneRow.Mobile_no}
                  maxLength={10}
                />
              </td>
              <td>
                <input
                  ref={age}
                  type="text"
                  id="age"
                  defaultValue={oneRow.Age}
                />
              </td>
              <td>
                <div>
                  <button href="" onClick={saveInputValue}>
                    Save
                  </button>
                  &nbsp;
                  {rowList.length > 1 && (
                    <button href="" onClick={() => handleRowRemove(index)}>
                      Delete
                    </button>
                  )}
                </div>
              </td>
              <div className="add_Row_BTN">
                {rowList.length - 1 === index && (
                  <button onClick={handleRowAdd}>ADD</button>
                )}
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableRow;
