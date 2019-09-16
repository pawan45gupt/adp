import React from 'react';
export default class Address extends React.Component {
  render() {
    return (
      <div>
        <div>Contact: {this.props.shop.display_phone}</div>
        <div>Address: {this.props.shop.location ? this.props.shop.location.display_address : ''}</div>
      </div>
    );
  }
}