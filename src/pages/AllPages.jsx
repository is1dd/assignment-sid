import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Gallery from "./user-tabs/Gallery";
import Post from "./user-tabs/Post";
import Profile from "./user-tabs/Profile";
import ToDo from "./user-tabs/ToDo";
import UserPage from "./UserPage/";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserPage />}>
        <Route index path="/user/profile" element={<Profile />} />
        <Route path="/user/gallery" element={<Gallery />} />
        <Route path="/user/todo" element={<ToDo />} />
        <Route path="/user/posts" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default AllPages;
