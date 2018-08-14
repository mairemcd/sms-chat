import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super() 
    this.state = {
      searchFilter: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchFilter: e.target.value
    })
  }

  render() {
    return (
      <div class="search">
        <input type="text" placeholder="search" onChange={this.handleChange} />
        {/* <i class="fa fa-search"></i> */}
      </div>
    )
  }
}