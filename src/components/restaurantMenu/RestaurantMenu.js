import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import {menuPageConstants} from '../../utils/constants';

const mockRest = {
  id: "100003",
  name: "Tandoori Nights",
  cloudinaryImageId:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/1/848d7745-21f5-44a7-84f4-c38869b54afc_4cb1e8a1-f7d6-4731-bb75-ec4f4d51a1b3.jpg",
  areaName: "Jayanagar",
  costForTwo: "₹350 for two",
  cuisines: ["Ice Cream", "Thai", "Shakes"],
  avgRating: 3.8,
  veg: true,
  parentId: "53677",
  avgRatingString: "3.8",
  totalRatingsString: "115+",
};
const mockMenu = [
  {
    id: 101,
    name: "Chicken 65",
    price: 180,
    isVeg: false,
    category: "Starters",
  },
  {
    id: 102,
    name: "Veg Manchurian",
    price: 150,
    isVeg: true,
    category: "Starters",
  },
  {
    id: 103,
    name: "Paneer Tikka",
    price: 200,
    isVeg: true,
    category: "Starters",
  },
  {
    id: 104,
    name: "Chicken Wings",
    price: 220,
    isVeg: false,
    category: "Starters",
  },
  {
    id: 201,
    name: "Chicken Biryani",
    price: 220,
    isVeg: false,
    category: "Main Course",
  },
  {
    id: 202,
    name: "Veg Fried Rice",
    price: 120,
    isVeg: true,
    category: "Main Course",
  },
  {
    id: 203,
    name: "Butter Chicken",
    price: 280,
    isVeg: false,
    category: "Main Course",
  },
  {
    id: 301,
    name: "Gulab Jamun",
    price: 80,
    isVeg: true,
    category: "Desserts",
  },
  {
    id: 302,
    name: "Ice Cream",
    price: 100,
    isVeg: true,
    category: "Desserts",
  },
  {
    id: 401,
    name: "Irani Chai",
    price: 30,
    isVeg: true,
    category: "Drinks",
  },
];

const RestaurantMenu = () => {
  const { id } = useParams(); // restaurant ID from route
  const [restaurant, setRestaurant] = useState(mockRest);
  const [menuItems, setMenuItems] = useState(mockMenu);


  const headerRestoCard = () => {
    if (!restaurant) return null;
    return (
      <div className="header-card-container">
        <div className="header-left">
          <h2>{restaurant.name}</h2>
          <p>{restaurant.cuisines.join(", ")}</p>
          <p>⭐ {restaurant.avgRating} | {restaurant.costForTwo}</p>
        </div>
        <div className="header-right">
          <img src={restaurant.image} alt={restaurant.name} />
        </div>
      </div>
    );
  };

  const renderMenuItems = () => {
    return menuItems?.map((item) => (
      <div className="menu-item-card" key={item.id}>
        <div className="menu-item-info">
          <span className={`veg-indicator ${item.isVeg ? "veg" : "non-veg"}`}></span>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
        </div>
        <button className="add-to-cart-btn">{menuPageConstants.addToCart}</button>
      </div>
    ));
  };

  return (
    <div className="menu-container">
      {headerRestoCard()}
      <h3 className="menu-title">{menuPageConstants?.menuTitle}</h3>
      <div className="menu-items-grid">{renderMenuItems()}</div>
    </div>
  );
};

export default RestaurantMenu;