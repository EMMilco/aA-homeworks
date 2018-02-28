import React from 'react';

import GiphysIndex from './giphys_index';

export default class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

 handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGiphys(searchTerm);
  }
 
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} value={this.props.state} />
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
