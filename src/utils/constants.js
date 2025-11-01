export const LOGO_URL = 'https://cdn.pixabay.com/photo/2016/05/16/20/26/burger-1396639_1280.png';
export const FOOD_IMG = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/481fc42f9821e18b124c235b3d1a073d';
export const RATING_STAR_ICON = '✪';
export const FAV_ICON = '♡';
export const RESTAURANT_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const apiURLs = {
   getRestaurants: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3982633&lng=78.481105&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
   getRestaurantMenu: 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3982633&lng=78.481105&restaurantId=674540',
}

export const menuPageConstants = {
    menuTitle: '꧁ Menu ꧂',
    addToCart: 'Add',
};

export const FILTERS_BUTTON_LIST = [
    {
        id: 1,
        title: 'Top-Rated',
        isActive: false,
    },  
    {
        id: 2,
        title: 'Pure Veg',
        isActive: false,
    },
    {
        id: 3,
        title: 'Clear',
        isActive: false,
    }
];

export const NAV_ITEM_LIST = [
     {
        id: 1,
        title: 'Home',
        navTo: '/',
    },  
    {
        id: 2,
        title: 'About',
        navTo: '/about',
    },
    {
        id: 3,
        title: 'Contact',
        navTo: '/contact',
    },
    {
        id: 4,
        title: 'Cart',
        isActive: '/',
    }
];
