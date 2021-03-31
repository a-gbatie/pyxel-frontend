import React from 'react'

class Search extends React.Component {
    render() {
      return (
        <div className="search">
          <form>
            <label htmlFor="search">Search</label>
            <input type="text" onChange={this.props.searchAdv} />
          </form>
        </div>
      );
    }
  }

export default Search;