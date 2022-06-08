import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <input type="text" onChange={this.onInputChange} />
            <label>Image Search</label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
