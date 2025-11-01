import { useState, useEffect } from "react";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import ShimmerCard from "../shimmerCard/ShimmerCard";
import { FILTERS_BUTTON_LIST, apiURLs } from "../../utils/constants";
import "./body.css";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filtersButtonList, setFiltersButtonList] =
    useState(FILTERS_BUTTON_LIST);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(apiURLs?.getRestaurants);
    const restData = await response?.json();
    setRestaurantsList(
      // restData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    setFiltersButtonList(FILTERS_BUTTON_LIST);
  }, [FILTERS_BUTTON_LIST]);

  const handleOnClickFilters = (item) => {
    switch (item?.id) {
      case 1:
        setFilteredList(
          restaurantsList?.filter((ele) => ele?.info?.avgRating >= 4)
        );
        break;
      case 2:
        setFilteredList(
          restaurantsList?.filter((ele) => ele?.info?.veg === true)
        );
        break;
      case 3:
        setFilteredList([]);
      default:
        break;
    }
  };

  const handleOnClickButton = (clickedButton) => {
    let updatedList;

    if (clickedButton.id === 3) {
      // Clear all filters
      updatedList = filtersButtonList?.map((button) => ({
        ...button,
        isActive: false,
      }));
      setFilteredList([]);
    } else {
      // Activate only the clicked button
      updatedList = filtersButtonList.map((button) => ({
        ...button,
        isActive: button?.id === clickedButton?.id,
      }));
      handleOnClickFilters(clickedButton);
    }
    setFiltersButtonList(updatedList);
  };

  if (restaurantsList?.length === 0) {
    return <ShimmerCard />;
  }

  const searchHandler = (e) => {
    const text = e?.target?.value;
    setSearchText(text);
    const filterData = restaurantsList?.filter(
      (item) =>
        item?.info?.name?.toLowerCase()?.includes(text?.toLowerCase()) ||
        item?.info?.costForTwo?.toLowerCase()?.includes(text?.toLowerCase()) ||
        item?.info?.cuisines
          ?.join()
          ?.toLowerCase()
          ?.includes(text?.toLowerCase())
    );
    setFilteredList(filterData);
  };

  return (
    <div className="body">
      {/* Category Filter Bar */}
      <div className="filter-bar">
        {filtersButtonList?.map((ele, index) => (
          <button
            key={ele?.id || index}
            className={ele?.isActive ? "filter-btn active" : "filter-btn"}
            onClick={() => handleOnClickButton(ele)}
          >
            {ele?.title}
          </button>
        ))}
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants or dishes"
          className="search-bar"
          value={searchText}
          onChange={searchHandler}
        />
      </div>
      {/* Restaurant Cards */}
      <div className="rest-container">
        {((filteredList?.length || searchText) ? filteredList : restaurantsList)?.map(
          (item, index) => (
            <RestaurantCard key={item?.data?.info?.id || index} data={item} />
          )
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Privacy Policy</p>
      </footer>
    </div>
  );
};

export default Body;
