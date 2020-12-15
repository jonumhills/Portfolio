import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
        minWidth: 0,
        maxWidth: 250,
        },
        "& .MuiSvgIcon-root":{
            fill: "tomato",
            "&:hover":{
                fill: "tan",
                fontSize: "1.8rem",
            }
        }
    },
})

const Footer = () => {
    const classes = useStyles()
    return(
        <BottomNavigation width="auto" style={{background: "#222"}}>
    
    <BottomNavigationAction 
        className={classes.root}
         style={{padding: 0}}
            icon={<Instagram onClick={event =>  window.open('https://www.instagram.com/__manoj_s/', '_blank')}/>}
           
            
      />  
      <BottomNavigationAction 
        className={classes.root}
         style={{padding: 0}}
            
            icon={<GitHubIcon onClick={event =>  window.open('https://github.com/jonumhills?tab=repositories', '_blank')}/>}
            
      />  
        
    </BottomNavigation>
    )
}

export default Footer;