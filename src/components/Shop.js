import React from 'react';
import { fetchReviews, fetchShopsData } from '../services';
import Logo from "./Logo";
import Address from "./Address";
import Review from "./Review";
export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shopsData: [], shopReviews: {} } ;
    this.getShopReviews = this.getShopReviews.bind(this);
  }
  componentDidMount() {
    const _this = this;
    fetchShopsData()
      .then((response) => {
        _this.setState({shopsData: response});
      });
  }

  getShopReviews(businessId) {
    const _this = this;
    const id = businessId;
    return fetchReviews(id)
      .then((reviews) => _this.setState({ shopReviews: Object.assign(this.state.shopReviews, { [id] : reviews })}));
  }

  render() {
    return this.state.shopsData.map((shop, index) => (
      <div key={shop.id}>
        <Logo name={shop.name} url={shop.image_url} />
        <div>
        <h3>{index + 1}. {shop.name}</h3>
        </div>
        <Address shop={shop} />
        <div>Ratings: {shop.rating}</div>
        <div>Reviews: {shop.review_count}</div>
        <div>
          <h4><u>Top Reviews</u></h4>
          {this.getShopReviews(shop.id) && this.state.shopReviews[shop.id] ? <Review reviews={this.state.shopReviews[shop.id]} /> : null}
        </div>
        <hr/>
      </div>
    ));
  }
}