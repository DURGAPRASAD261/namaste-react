import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ErrorPage from "./components/errorPage/ErrorPage";
import RestaurantMenu from "./components/restaurantMenu/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <div style={{ paddingTop: `${headerHeight}px`, marginTop: 30, paddingBottom: '10%' }}>
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
