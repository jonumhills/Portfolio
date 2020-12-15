import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Typography, Box,Divider } from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles(theme=> ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1 rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before":{
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem:{
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            postion: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50%-5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before":{
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"

            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "20rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5 rem 0 1 rem",
        "&:before":{
            display: "none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading:{
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles();
    return(
        <>
        <Navbar />
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working Expirience
            </Typography>
            <Box component="div" className={classes.timeLine}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                    (Jan - Feb)
                </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" style={{color:"white"}}>
                
                    Data Science Intern
                </Typography>
                <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    (Sysfore)
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Got exposure to Machine Learning, DeepLearning <br/>
                    Worked on state of the art Algorithm-DenseNet
                </Typography>
            </Box>

            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2020
                    (Sept - Present)
                </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" style={{color:"white"}}>
                    Project Engineer
                </Typography>
                <Typography variant="body1" align="center" style={{color: "tomato"}}>
                    (Wipro)
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                    Worked on implementation of Warehouse Management System  <br/>    
                    Requirement Gathering, Designing Usecase scenarios and implementing it in full scale.
                </Typography>
            </Box>
            
          
            
            </Box>
        </Box>
        </>
    )

    
};

export default Resume;