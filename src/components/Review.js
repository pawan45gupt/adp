import React from 'react';
export default class Address extends React.Component {
  render() {
    debugger;
    return this.props.reviews.map((review) =>
      <ul key={review.id}>
        <li>
          <i>{review.text} --- {review.user.name}</i>
        </li>
      </ul>
    );
  }
}