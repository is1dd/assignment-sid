import {Box, Divider } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import ChatComponent from '../../components/Chat/Chat';
import PlaceHolder from '../../components/PlaceHolder/PlaceHolder';
import TabHeader from '../../components/TabHeader/TabHeader';
import "./Profile.css"

function Post() {

  let location = useLocation();
  let {userData,usersList}= location.state;

  return (
      <Box maxWidth="lg" className='main-content'>
        <TabHeader heading="Post" userData = {userData} usersList={usersList}/>
        <Divider sx={{my: 2}}/>
        <Box maxWidth="lg" className='tab-content'>
          <PlaceHolder />
        </Box>
        <ChatComponent usersList={usersList}/>

      </Box>
  )
}

export default Post;