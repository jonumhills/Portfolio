import React, {useState} from "react";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ThemeProvider
} from "@material-ui/core";

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../images/avatar.jpg";

//CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: "100%",
        background: "#511",
        height:"10%"
    },
    avatar: {
        display : "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color: "tan" 
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
    right: false
    })

    const toggleSlider = (slider,open) => () => {
        setState({...state, [slider]: open });
    }
    const classes = useStyles();
    const sideList = slider => (
        
        <Box 
        className={classes.menuSliderComponent} 
        component="div"
        onClick={toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src={avatar} alt=""/>
        <Divider/>
        <List>
            {menuItems.map((lsItem, key) => (
                <ListItem button key={key} component={Link} to={lsItem.listPath} >
                <ListItemIcon className={classes.listItem }>{lsItem.listIcon}</ListItemIcon>
                <ListItemText className={classes.listItem } primary={lsItem.listText}/>
            </ListItem>
            ))}
            
        </List>
        </Box>
        );
        return(
            <>
        <Box component="nav"> 
            <AppBar position = "static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                    <ArrowBack style={{background: "tomato"}} />
                    </IconButton>
                    <Typography variant="h5" style={{color: "tomato"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider
                     anchor="right"
                     open={state.right}
                     onClose={toggleSlider("right",false)} >
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar;