import { Link } from 'react-router-dom';
import { RATING_STAR_ICON, FAV_ICON } from '../../utils/constants';
import './restaurantCard.css';

const RestaurantCard = ({ data }) => {
  const {info} = data;
  return (
    <div className="rest-card">
      {/* Restaurant Image */}
      <img
        className="res-logo"
        alt="res-logo"
        src={info?.cloudinaryImageId}
      />

      {/* Favorite Icon */}
      <button className="fav-btn">{FAV_ICON}</button>

      {/* Card Details */}
      <div className="card-body">
        <p className="card-title">{info?.name}</p>
        <p className="card-desc">{info?.cuisines?.join(', ')}</p>

        <div className="star-rating-view">
          <span className="rating">
            <span className="star-icon">{RATING_STAR_ICON}</span>
            {info?.avgRatingString}
          </span>
          <span className="price-text">{info?.costForTwo}</span>
        </div>

        {/* View Menu Button */}
        <button className="view-menu-btn"><Link to='/restaurant/:id'>View Menu</Link></button>
      </div>
    </div>
  );
};

export default RestaurantCard;