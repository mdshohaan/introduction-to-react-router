import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home/Home";
import PostDetails from "./Components/PostDetails";
import Posts from "./Components/Posts";
import UserDetails from "./Components/UserDetails";
import Users from "./Components/Users";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"), 
        element: <Users></Users>, 
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      },
      {
        path:'/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
