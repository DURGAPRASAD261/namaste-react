import { Link } from 'react-router-dom';
import { RATING_STAR_ICON, FAV_ICON, RESTAURANT_IMG } from '../../utils/constants';
import './restaurantCard.css';

const RestaurantCard = ({ data }) => {
  const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } = data?.info;
  return (
    <div className="rest-card">
      {/* Restaurant Image */}
      <img
        className="res-logo"
        alt="res-logo"
        src={RESTAURANT_IMG+cloudinaryImageId}
      />

      {/* Favorite Icon */}
      <button className="fav-btn">{FAV_ICON}</button>

      {/* Card Details */}
      <div className="card-body">
        <p className="card-title">{name}</p>
        <p className="card-desc">{cuisines?.join(', ')}</p>

        <div className="star-rating-view">
          <span className="rating">
            <span className="star-icon">{RATING_STAR_ICON}</span>
            {avgRatingString}
          </span>
          <span className="price-text">{costForTwo}</span>
        </div>

        {/* View Menu Button */}
        <button className="view-menu-btn"><Link to='/restaurant/:id'>View Menu</Link></button>
      </div>
    </div>
  );
};

export default RestaurantCard;