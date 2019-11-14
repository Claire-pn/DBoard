import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import HomeIcon from '@material-ui/icons/Home';
import UpdateIcon from '@material-ui/icons/Update';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/home" >
        <HomeIcon>Home</HomeIcon>
        HOME
      </a>

      <a className="menu-item" href="/post">
        <PostAddIcon>PostAdd</PostAddIcon>
        POST LITERARY
      </a>

      <a className="menu-item" href="/update">
        <UpdateIcon>Update</UpdateIcon>
        UPDATE LITERARY
      </a>

      <a className="menu-item" href="/delete">
        <DeleteIcon>Delete</DeleteIcon>
       DELETE ACCOUNT
      </a>

      <a className="menu-item" href="/logout">
        <ExitToAppIcon>ExitToApp</ExitToAppIcon>
       LOGOUT
      </a> 
    </Menu>
  );
};