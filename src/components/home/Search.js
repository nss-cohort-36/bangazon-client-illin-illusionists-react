import React, { Component } from "react";
import ProductItem from "./ProductItem";
import APIManager from "../helpers/APIManager";

class Search extends Component {
  state = {
    locations: [],
    search: "",
    value: "",
    locations_with_user_input: []
  };

  componentDidMount() {
    console.log("SEARCH: ComponentDidMount");
    APIManager.getAll("products").then(response => {
      const newLocations = [];
      for (const item of response) {
        newLocations.push(item.location);
      }
      const uniqueLocations = [...new Set(newLocations)].sort();
      this.setState({
        locations: uniqueLocations,
        value: ""
      });
    });
  };

  handleInputChange = (evt) => {
    let stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  };

  handleChange(event) {
    console.log("Event", event)
    // this.setState({ value: event.target.value });
  };

  handleSubmit(event) {
    alert("You chose: " + this.state.value);
    event.preventDefault();
  };

  filterList = event => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: items });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" id="search" onChange={this.handleInputChange}></input>
          Filter by location:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.locations.map((location, index) => (
              <option onClick={this.handleChange} key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
