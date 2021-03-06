import React from "react";
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core";
import project1 from "../images/avatar.jpg";
import project2 from "../images/bgimg9.jpg";
import project5 from "../images/jsrr_bg.png";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import { mergeClasses } from "@material-ui/styles";

//CSS STYLES
const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%",
        
    },
    cardContainer: {
        maxWidth: 300,
        margin: "1rem",
        margin: "1rem auto"
    }
});



const Portfolio= () => {
    const classes = useStyles()
    return (
    <Box component="div" className={classes.mainConatiner}>
    <Navbar/>
    <Grid container justify="center" alignments="center">
        {/*Project 1 */}
        <Grid item xs={8} sm={6} md={4}>
        <Card  className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
                ></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        FlowerDex
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        Pokedex:Pokemon :: Flowedex:Flower <br/>
                        Domain: Machine learning, Web Scraping 
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={event =>  window.open('https://github.com/jonumhills/FlowerDex', '_blank')} >
                        Github
                    </Button>
                </CardActions>
            
        </Card>
        </Grid>

        {/*Project 2 */}
        <Grid item xs={8} sm={6} md={4}>
        <Card  className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
                ></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        HumpyDumpy
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        lailailailailailaialaialaialaialaialaialaialaoalao
                    </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        share
                    </Button>
                    <Button size="small" color="primary">
                        Live Demo
                    </Button>
                </CardActions>
            
        </Card>
        </Grid>

        {/*Project 3 */}
        <Grid item xs={8} sm={6} md={4}>
        <Card  className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project2}
                ></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Twitter Analysis
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        lailailailailailaialaialaialaialaialaialaialaoalao
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        share
                    </Button>
                    <Button size="small" color="primary">
                        Live Demo
                    </Button>
                </CardActions>
            
        </Card>
        </Grid>

        {/*Project 4 */}
        <Grid item xs={8} sm={6} md={4}>
        <Card  className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project2}
                ></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Card Details Recognition
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        Getting useful information (Unique Id, name ...)
                         from adhar and pan card by clicking a pic of it. <br/> 
                        Tech: OpenCv, Flask, PyTesseract
                        
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={event =>  window.open('https://github.com/jonumhills/OCR_Card_Details', '_blank')}>
                        Github
                    </Button>
                </CardActions>
            
        </Card>
        </Grid>

        {/*Project 5 */}
        <Grid item xs={8} sm={6} md={4}>
        <Card  className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Project 5"
                height="140"
                image={project5}
                ></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        JSRR ACADEMY WEBSITE
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                        Dynamic Web Application for Academic institute <br/>
                        Tech: React, Node
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    
                    <Button size="small" color="primary" onClick={event =>  window.open('https://www.jsrracademy.in/', '_blank')}>
                        Website
                    </Button>
                </CardActions>
            
        </Card>
        </Grid>
        
    </Grid>
    </Box>);
};

export default Portfolio;