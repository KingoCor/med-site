import React from "react"
import "./App.css";
import {useLocation} from "react-router-dom";

const Article = () => { 
    const location = useLocation();
    const id = location.pathname.split("/");

    return(
    <div>
        <iframe src={require(`./articles/${id[id.length-1]}`).default}/>
    </div>
    )
};

export default Article;
