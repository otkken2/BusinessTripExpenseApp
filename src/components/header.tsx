// import React from "react";
// import { createStyles,makeStyles } from "@material-ui/core";
import {styled} from '@mui/material/styles';

// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";


const StyledIconButton = styled(IconButton)(()=>({
  padding: "0px",
  margin: "10px"
}));

const menuList = [
  {
    menuText:"出張経費を申請する",
    link:"/businessTripExpense",
  },
  {
    menuText:"職員情報を登録する",
    link:"/registUserInfo",
  },
  {
    menuText:"用務地を追加する",
    link:"/registPlaceOfBusiness",
  },
  {
    menuText:"用務内容を追加する",
    link:"/registPurpose",
  },
  {
    menuText:"ログインする",
    link: "/login",
  }
]


export const Header = () => {
  const anchor = "right";
  const [isOpenDrawer,setIsOpenDrawer] = useState(false);
  const handleOnClickToggle = () => {
    setIsOpenDrawer(!isOpenDrawer);
  }

  return (
    <>
      <AppBar position="static"  color="primary">
        <Toolbar>
          <Drawer 
            anchor={anchor}
            open={isOpenDrawer} 
            onClose={()=>{
              setIsOpenDrawer(false)
            }}
          >
            <List>
              {menuList.map((menu)=> (
                // TODO メニュークリックしてページ遷移した時にドロワーを閉じたい場合、ここにonClick追加で本当によいのか検討
                <Link key={menu.link} to={menu.link} onClick={()=>setIsOpenDrawer(false)} style={{textDecoration: "none"}}>
                  <ListItemButton>
                    <ListItemText primary={menu.menuText}/>
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Drawer>
          <Typography sx={{flexGrow: 1}}>
            出張旅費精算システム
          </Typography>
          <StyledIconButton edge="end" color="inherit" onClick={handleOnClickToggle} size="large" sx={{mr: 2}}>
            <MenuIcon />
          </StyledIconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}