import React, { Component } from "react";
import ProductItem from "../products/ProductItem";
import APIManager from "../helpers/APIManager";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    locations: [],
    search: "",
    value: "",
    products: []
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
  }

  handleInputChange = evt => {
    let stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleChange(event) {
    console.log("Event", event);
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.getAllProducts()
  }

  filterList = event => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: items });
  };

   async getAllProducts() {
    let query_string = ""
    const searched_products = await APIManager.getAll(`products?location=${this.state.value}`)
    this.setState({ products: searched_products })
  }

  render() {
    console.log(this.state);
    return (
    <>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            id="search"
            onChange={this.handleInputChange}></input>
          Filter by location:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.locations.map((location, index) => (
              <option
                //   onClick={this.handleChange}
                key={index}
                value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
          {/* <ul> */}
            {this.state.products.map((item) =>
             <ProductItem key={item.id} item={item} />
            // <div key ={item.id}>{item.name}</div>
             )}
          {/* </ul> */}
          </div></>
    );
  }
}

export default Search;
