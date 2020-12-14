import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/core/styles";


//CSS STYLES
const useStyles = makeStyles({
    
});

const Home = () => {
    return(
        <> 
          
          <Navbar/>
          <Header/>
        
        </>
    );
};

export default Home;