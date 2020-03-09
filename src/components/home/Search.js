import React, { Component } from "react";
import ProductItem from "../products/ProductItem";
import APIManager from "../helpers/APIManager";

class Search extends Component {

// Binding is necessary to set the scope of whatever is passed in
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// Setting state to hold property values. When state changes, component re-renders
  state = {
    locations: [],
    search: "",
    location: "",
    products: []
  };

// componentDidMount gets executed when a component first loads.
// locations are put into a new array of unique locations and sorted alphabetically.
  componentDidMount() {
    // console.log("SEARCH: ComponentDidMount");
    APIManager.getAll("products").then(response => {
      const newLocations = [];
      for (const item of response) {
        if (item.location !== null) {
            newLocations.push(item.location);
        }
      }
      const uniqueLocations = [...new Set(newLocations)].sort();
      this.setState({
        locations: uniqueLocations
      });
    });
  }

// handleInputChange captures user input in the text field and puts it in state.
  handleInputChange = evt => {
    let stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

// handleChange captures value from drop-down menu and puts it in state.
  handleChange(event) {
    // console.log("Event", event);
    this.setState({ location: event.target.value });
  }

// handleSubmit calls getAllProducts when form is submitted.
  async handleSubmit(event) {
    event.preventDefault();
    await this.getAllProducts()
  }

// Checking whether the value for location or search is not blank.
// If not blank the value is pushed to the query_array.
// query_array length is checked and if greater than 0 the value of query_array is appended to query_string with .join joining arguments if there are more than one.
// query_string is appended to endpoint in getAll and the result is stored in products in state.
   async getAllProducts() {
    let query_array = []
    let query_string = ""
    if (this.state.location !== "") {
        query_array.push(`location=${this.state.location}`)
    }
    if (this.state.search !== "") {
        query_array.push(`name=${this.state.search}`)
    }
    if (query_array.length > 0) {
        query_string += `?${query_array.join("&")}`
    }
    // console.log("Query String", query_string)
    const searched_products = await APIManager.getAll(`products${query_string}`)
    this.setState({ products: searched_products })
  }

// Form for filtering searches by location and/or product name
  render() {
    // console.log(this.state);
    return (
    <>
      <form onSubmit={this.handleSubmit}>
        <label>
        Search a product:
          <input
            type="text"
            id="search"
            onChange={this.handleInputChange}></input><br />
          Filter by location:
          <select value={this.state.location} onChange={this.handleChange}>
              <option value = "">
                  None Selected
              </option>
            {this.state.locations.map((location, index) => (
              <option
                key={index}
                value={location}>
                {location}
              </option>
            ))}
          </select>
        </label><br />
        <input type="submit" value="Submit" />
      </form>
      <div>
          
            {this.state.products.map((item) =>
             <ProductItem key={item.id} item={item} />
             )}
          
          </div>
          </>
    );
  }
}

export default Search;
