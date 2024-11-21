 
import React from "react";
const SearchComponent = () => {
  return (
    <div className="search-component">
      <h1>Search</h1>
      <form action="https://www.etoncollege.com/" method="get">
        <div className="inputs-container">
          <label htmlFor="s" className="sr-only">Search for:</label>
          <input
            type="search"
            id="s"
            name="s"
            placeholder="Enter a keyword"
            required
          />
          <button type="submit">Search</button>
        </div>
        <footer>
          Hit enter to search <span className="optional">or ESC to close</span>
        </footer>
      </form>
    </div>
  );
};

export default SearchComponent;
