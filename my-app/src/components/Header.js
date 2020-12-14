import React from 'react';
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";

import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import avatar from "../images/avatar.jpg";
import { Block } from '@material-ui/icons';
import Particles from "react-particles-js";

//CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato",
        textAlign: "center"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem",
        textAlign: "center"
        
    },
    typedContainer: {
        positin: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
        display: "flex"
    },
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
        
    }
}));

const Header = () => {
    const classes = useStyles()
    return(
        <>
        
        <Box classname={classes.typedContainer}>
            <Particles
            canvasClassName = {classes.particlesCanva} 
                params={{
                    particles:{
                        number:{
                            value:45,
                            density:{
                                enable: true,
                                value_area: 900
                                }
                            },
                            shape: {
                                type: "star",
                                strole:{
                                    width: 3,
                                    color: "tomato"
                                }
                            },
                            size: {
                                value: 8,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 10,
                                    size_min: 0.1,
                                    sync: true
                                }
                            },
                            opacity:{
                                value:1,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: true
                                }
                            }
                        }
                    
                }}
                >
                </Particles>   
        <Grid container justify="center">
        <Avatar className={classes.avatar}  src={avatar} alt="Manoj S"/>

            </Grid>    
        <Typography className={classes.title} variant="h4">
            <Typed strings= {["Manoj S"]} typeSpeed={40}/>


        </Typography>
        <br/>
        <Typography className={classes.subtitle} variant="h4">
            <Typed strings= {["Web Development","FullStack","Machine Learning"]} typeSpeed={40} backSpeed={60} loop/>


        </Typography>

        
        </Box>
        
        </>
    )
}

export default Header;