import React, { useState } from "react";
import "./Weather.css";
import weather_Details from "./Data";

function Weather() {
  // Adding and Deleting the Rows in the Table
  const [rowList, setRowList] = useState([{ row: "" }]);
  const [user, setUser] = useState([
    { name: "", dob: "", aadhar: "", mob: "", age: "" },
  ]);

  const data = [{ name: "", dob: "", aadhar: "", mob: "", age: "" }];

  // ADD ROW
  const handleRowAdd = () => {
    console.log("clicked");
  };
  //Delete Row
  const handleRowRemove = (index) => {
    const list = [...rowList];
    list.splice(index, 1);
    setRowList(list);
  };

  return (
    <div>
      <>
        <div className="container">
          <h1>Saba's Weather App</h1>
        </div>
        <section className="section">
          <div className="left_section">
            <button className="button">Get Weather</button>

            <table className="center">
              <tr>
                <th style={{ background: "#4472c4", color: "#fff" }}>City</th>
              </tr>
              <tr>
                <td onClick={handleRowAdd}>London</td>
              </tr>
              <tr>
                <td>New York</td>
              </tr>
              <tr>
                <td>Los Angeleus</td>
              </tr>
              <tr>
                <td>Las Vegas</td>
              </tr>
            </table>
          </div>
          <div className="right_section">
            <div className="search">
              <input type="text" placeholder="City Name" />
              <button className="button">Search</button>
            </div>
            <div className="data">
              <table>
                <thead>
                  <tr>
                    <th className="heading_table">City</th>
                    <th className="heading_table">Description</th>
                    <th className="heading_table">Temperature (c)</th>
                    <th className="heading_table">Pressure (hPa)</th>
                    <th className="heading_table">Data age (hrs)</th>
                    <th className="heading_table">Delete Cities</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Weather;
