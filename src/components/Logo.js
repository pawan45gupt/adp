import React from 'react';
export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.url} alt={this.props.name} height="30%" width="30%"/>
      </div>
    );
  }
}