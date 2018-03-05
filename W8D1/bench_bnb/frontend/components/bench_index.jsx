import React from 'react';

class BenchIndex extends React.Component {

  componentDidMount(){
    this.props.fetchBenches();
  }

  render() {
    return (
      this.props.benches.map((bench, idx) => {
        return (
          <li key={idx}>
            <p>{bench.description}</p>
            <p>{bench.lat}</p>
            <p>{bench.lng}</p>
          </li>);
      })
    );
  }


}








export default BenchIndex;
