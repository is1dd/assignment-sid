import { Box, Divider } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import TabHeader from "../../components/TabHeader/TabHeader";
import "./Profile.css";

function ToDo() {
  let location = useLocation();
  let { userData, usersList } = location.state;
  return (
    <Box maxWidth="lg" className="main-content">
      <TabHeader heading="ToDo" userData={userData} usersList={usersList} />
      <Divider sx={{ my: 2 }} />
      <Box maxWidth="lg" className="tab-content">
        <PlaceHolder />
      </Box>
      <Chat usersList={usersList} />
    </Box>
  );
}

export default ToDo;
