import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "BMW",
      color: "white",
      mileage: "900km/hr",
      price: "30 lakh",
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    this.setState({ name: "Activa" });
    this.setState({ mileage: "400km/hr" });
    this.setState({ color: "brown" });
    this.setState({ price: "1 lakh" });
  };

  render() {
    return (
      <div>
        <h1>
          I have {this.state.name} with the color {this.state.color} and the
          price is {this.state.price} with the mileage of {this.state.mileage}
        </h1>

        <button onClick={this.handleClick}>change</button>
      </div>
    );
  }
}

export default Car;
