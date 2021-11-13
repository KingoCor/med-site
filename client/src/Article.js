import React from "react"
import "./App.css";
import {useLocation} from "react-router-dom";

const location = useLocation();
const id = location.pathname.split("/");

import article from "./articles/"+id[id.length-1];

const Article = () => (

	<div>
		<iframe src={article}/>
	</div>

  );

export default Article;
