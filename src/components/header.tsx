// import React from "react";
// import { createStyles,makeStyles } from "@material-ui/core";
import {styled} from '@mui/material/styles';

// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const StyledIconButton = styled(IconButton)(()=>({
  padding: "0px",
  margin: "10px"
}));

export const Header = () => {
  return (
    <>
      <AppBar position="static"  color="primary">
        <Toolbar>
          <StyledIconButton edge="start" color="inherit">
            <MenuIcon />
          </StyledIconButton> 
          <Typography>
            出張旅費精算システム
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}